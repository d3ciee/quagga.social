package apihandler

import (
	"github.com/gofiber/fiber/v2"
	db "quagga.social/internal/db"
	repository "quagga.social/pkg/repository"
	"quagga.social/pkg/validator"
)

func SetupApiAccountRoutes(app *fiber.App) {
	accountGroup := app.Group("/api/account")
	ur := repository.UserRepository(repository.UserRepository{DB: db.DB})

	accountGroup.Get("/is-username-available/:uname", func(c *fiber.Ctx) error {
		v, _ := validator.ValidateUsername(c.Params("uname"))
		if c.Params("uname") == "" || !v {
			return Response(c, Resp{isSuccess: false, status: fiber.StatusBadRequest, message: "invalid username", data: nil})
		}
		_, err := ur.GetByUsername(c.Params("uname"), []string{"id"})

		if err.Error() == "record not found" {
			return Response(c, Resp{isSuccess: true, status: 200, message: "username is available", data: nil})
		}
		if err != nil {
			return Response(c, Resp{isSuccess: false, status: 500, message: "internal error", data: nil})
		}
		return Response(c, Resp{isSuccess: false, status: 200, message: "username is not available", data: nil})
	})
}
