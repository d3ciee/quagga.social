package model

import (
	"time"

	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	Username                                 string    `gorm:"unique; not null"`
	Email                                    string    `gorm:"unique; not null"`
	PasswordHash                             []byte    `gorm:"not null; type:blob"`
	AcceptedTermsOfServiceAndPrivacyPolicyAt time.Time `gorm:"not null"`
}

type ReservedUsername struct {
	gorm.Model
	Username string `gorm:"unique; not null"`
}
