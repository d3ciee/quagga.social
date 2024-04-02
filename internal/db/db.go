package db

import (
	model "quagga.social/pkg/model"

	"github.com/glebarez/sqlite"
	"gorm.io/gorm"
)

var DB *gorm.DB

func InitDB() error {
	var err error
	DB, err = gorm.Open(sqlite.Open("./.data/local.sqlite"), &gorm.Config{})
	err = DB.AutoMigrate(&model.User{}, &model.ReservedUsername{})
	return err
}
