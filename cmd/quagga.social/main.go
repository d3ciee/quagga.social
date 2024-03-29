package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/template/html/v2"
	webHandler "quagga.social/api/handler/web_handler"
)

func main() {
	engine := html.New("web/template", ".html")

	app := fiber.New(fiber.Config{
		Views:       engine,
		ViewsLayout: "layout/main",
	})

	app.Static(
		"/public",
		"dist",
		fiber.Static{
			MaxAge: 0,
		},
	)

	webHandler.SetupRoutes(app)

	app.Listen(":3000")
}
