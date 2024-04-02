package apihandler

import (
	"github.com/gofiber/fiber/v2"
)

type Resp struct {
	isSuccess bool
	status    int
	message   string
	data      *interface{}
}

func Response(c *fiber.Ctx, r Resp) error {
	return c.Status(r.status).JSON(fiber.Map{
		"status": func(s bool) string {
			if s {
				return "success"
			}
			return "error"
		}(r.isSuccess),
		"message": r.message,
		"data":    r.data,
	})
}

func SetupRoutes(app *fiber.App) {

	SetupApiAccountRoutes(app)
}
