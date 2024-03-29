package webhandler

import (
	"github.com/gofiber/fiber/v2"
)

type meta struct {
	Title string
}

func SetupRoutes(app *fiber.App) {
	setupAccountRoutes(app)
	setupHomepageRoutes(app)
}
