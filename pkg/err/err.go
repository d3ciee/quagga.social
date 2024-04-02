package err

import "fmt"

type Error struct {
	Status  int
	Message string
}

func (e *Error) Error() string {
	return fmt.Sprintf("status: %d, message: %s", e.Status, e.Message)
}

func New(code int, message string) *Error {
	return &Error{
		Status:  code,
		Message: message,
	}
}
