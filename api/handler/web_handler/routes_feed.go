package webhandler

import (
	"github.com/gofiber/fiber/v2"
)

func setupHomepageRoutes(app *fiber.App) {
	app.Get("/", func(c *fiber.Ctx) error {

		return c.Render("page/homepage", &fiber.Map{
			"Meta": meta{
				Title: "Home",
			},
		})

	})
}
