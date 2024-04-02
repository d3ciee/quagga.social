package webhandler

import (
	"fmt"
	"time"

	"github.com/gofiber/fiber/v2"
	db "quagga.social/internal/db"
	err "quagga.social/pkg/err"
	"quagga.social/pkg/repository"
)

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

	accountGroup.Post("sign-up", func(c *fiber.Ctx) error {
		step := c.Queries()["step"]
		r := repository.UserRepository{DB: db.DB}

		if step == "confirm-email" {
		}
		if step == "add-details" {
		}
		if step == "create-account" {
			time.Sleep(3 * time.Second)

			if c.FormValue("accept-pp-tos") != "on" {
				return c.Status(200).SendString(err.ErrPPTOSRequired.Message)
			}

			fmt.Println(c.FormValue("username"))
			_, e := r.Create(c.FormValue("username"), c.FormValue("email"), c.FormValue("password"), time.Now())

			if e != nil {
				return c.Status(200).SendString(e.Message)
			}
			c.Set("HX-Redirect", "true")
			return c.Redirect("/account/sign-up?step=confirm-email")
		}

		return c.Redirect("/account/sign-up?step=create-account")
	})
}
