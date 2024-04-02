package err

var (
	ErrUsernameTaken    = New(400, "username is already taken")
	ErrEmailTaken       = New(400, "email is already taken")
	ErrInvalidEmail     = New(400, "email is invalid")
	ErrInvalidPass      = New(400, "password must be at least 8 characters long")
	ErrInvalidUsername  = New(400, "username is invalid")
	ErrUsernameReserved = New(400, "username is reserved")
	ErrPPTOSRequired    = New(400, "terms of service and privacy policy must be accepted")
)
