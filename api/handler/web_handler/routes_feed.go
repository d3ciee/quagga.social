package webhandler

import (
	"github.com/gofiber/fiber/v2"
)

func setupHomepageRoutes(app *fiber.App) {
	app.Get("/explore", func(c *fiber.Ctx) error {

		props := &fiber.Map{
			"Meta": meta{
				Title: "Explore",
			},
			"Page": "explore",
		}

		if c.Get("HX-Boosted") == "true" {
			return c.Render("page/feed/explore", props)
		}

		return c.Render("page/feed/explore", props, "layout/feed", "layout/main")
	})

	app.Get("/", func(c *fiber.Ctx) error {

		props := &fiber.Map{
			"Meta": meta{
				Title: "Home",
			},
			"Page": "home",
		}

		if c.Get("HX-Boosted") == "true" {
			return c.Render("page/feed/home", props)
		}

		return c.Render("page/feed/home", props, "layout/feed", "layout/main")
	})
}
