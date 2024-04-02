package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/template/html/v2"
	apihandler "quagga.social/api/handler/api_handler"
	webHandler "quagga.social/api/handler/web_handler"
	db "quagga.social/internal/db"
)

func main() {
	err := db.InitDB()
	if err != nil {
		panic("Failed to connect to db")
	}
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

	// TODO: Remove the lucide icon file when wifi is now working
	app.Static(
		"/public",
		"public",
		fiber.Static{
			MaxAge: 0,
		},
	)

	webHandler.SetupRoutes(app)
	apihandler.SetupRoutes(app)

	app.Listen(":3000")
}
