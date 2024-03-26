package webhandler

import "github.com/gofiber/fiber/v2"

func setupAccountRoutes(app *fiber.App) {
	accountGroup := app.Group("/account")

	accountGroup.Get("sign-up", func(c *fiber.Ctx) error {

		return c.Render("page/account/sign_up/create_account", &fiber.Map{
			"Meta": meta{
				Title: "Sign up",
			},
		})
	})
}
