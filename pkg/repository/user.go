package repository

import (
	"time"

	"github.com/gofiber/fiber/v2/log"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
	"quagga.social/pkg/err"
	model "quagga.social/pkg/model"
	validator "quagga.social/pkg/validator"
)

type UserRepository struct {
	DB *gorm.DB
}

func (r *UserRepository) GetByUsername(username string, fields []string,
) (*model.User, error) {
	var user model.User
	result := r.DB.Where(&model.User{Username: username}).First(&user).Select(fields)
	if result.Error != nil {
		if result.Error.Error() != "record not found" {
			log.Error(result.Error)
		}
		return nil, result.Error
	}
	return &user, nil
}

func (r *UserRepository) Create(
	username string,
	email string,
	password string,
	acceptedTermsOfServiceAndPrivacyPolicy time.Time,
) (*model.User, *err.Error) {

	_, ep := validator.ValidatePassword(password)
	_, ee := validator.ValidateEmail(email)
	_, eu := validator.ValidateUsername(username)

	for _, e := range []*err.Error{eu, ee, ep} {
		if e != nil {
			return nil, e
		}
	}

	passwordHash, bcryptErr := bcrypt.GenerateFromPassword([]byte(password), 10)

	if bcryptErr != nil {
		log.Error(bcryptErr)
		return nil, err.ErrInternal
	}

	d := r.DB.Select("username").Where(&model.ReservedUsername{Username: username}).First(&model.ReservedUsername{})
	if d.Error == nil {
		return nil, err.ErrUsernameReserved
	}

	if d.Error.Error() != "record not found" {
		log.Error(d.Error)
		return nil, err.ErrInternal
	}

	u := model.User{
		PasswordHash:                             passwordHash,
		Username:                                 username,
		Email:                                    email,
		AcceptedTermsOfServiceAndPrivacyPolicyAt: time.Now(),
	}

	t := r.DB.Create(&u)
	if t.Error != nil {
		if t.Error.Error() == "UNIQUE constraint failed: users.username" {
			return nil, err.ErrUsernameTaken
		}
		if t.Error.Error() == "constraint failed: UNIQUE constraint failed: users.email (2067)" {
			return nil, err.ErrEmailTaken
		}
		log.Error(t.Error)
		return nil, err.ErrInternal
	}
	return &u, nil

}
