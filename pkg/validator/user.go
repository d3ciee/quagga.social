package validator

import (
	"net/mail"
	"regexp"

	err "quagga.social/pkg/err"
)

func ValidatePassword(password string) (bool, *err.Error) {
	if len(password) < 8 || len(password) > 60 {
		return false, err.ErrInvalidPass
	}
	return true, nil
}

func ValidateUsername(uname string) (bool, *err.Error) {
	if match, _ := regexp.MatchString(`^[a-zA-Z0-9_]{2,20}$`, uname); !match {
		return false, err.ErrInvalidUsername
	}
	return true, nil
}

func ValidateEmail(email string) (bool, *err.Error) {
	if _, e := mail.ParseAddress(email); e != nil {
		return false, err.ErrInvalidEmail
	}
	return true, nil
}
