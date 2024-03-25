package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/template/html/v2"
)

func main() {
	engine := html.New("web/template", ".html")

	app := fiber.New(fiber.Config{
		Views: engine,
	})

	app.Static(
		"/public",
		"dist",
		fiber.Static{
			MaxAge: 0,
		},
	)

	app.Get("/", func(c *fiber.Ctx) error {
		return c.Render("page/index", fiber.Map{})
	})

	app.Listen(":3000")
}
