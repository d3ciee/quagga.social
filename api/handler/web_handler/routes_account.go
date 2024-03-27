package webhandler

import "github.com/gofiber/fiber/v2"

func setupAccountRoutes(app *fiber.App) {
	accountGroup := app.Group("/account")

	accountGroup.Get("sign-up", func(c *fiber.Ctx) error {
		step := c.Queries()["step"]
		if step == "confirm-email" {
			//TODO: if login, redir to /
			return c.Render("page/account/sign_up/confirm_email", &fiber.Map{
				"Meta": meta{
					Title: "Confirm email",
				},
				"Email":       "decefemz@gmail.com",
				"ResendAfter": 120,
				"Step":        2,
			}, "layout/main", "layout/sign_up")
		}
		if step == "add-details" {
			//TODO: check if authenticated.  if not, redir to sign_in
			return c.Render("page/account/sign_up/add_details", &fiber.Map{
				"Meta": meta{
					Title: "Sign up",
				},
				"Step": 3,
			}, "layout/main", "layout/sign_up")
		}
		return c.Render("page/account/sign_up/create_account", &fiber.Map{
			"Meta": meta{
				Title: "Sign up",
			},
			"Step": 1,
		}, "layout/main", "layout/sign_up")

	})
}
