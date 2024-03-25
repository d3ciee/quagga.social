# Quogga.social Project Structure

This is the outline of the directory structure for Quogga, which uses Go with the Fiber framework, along with UI components implemented using Lit Elements & Tailwindcss.  Other technologies used in the project include HTMX & SQLite

## Directory Structure Overview

```
quogga.social/
│
├── api/                     # API-specific logic
│   ├── handler/             # Request handlers
│   │   ├── api_handlers.go  # API-specific route handlers
│   │   └── web_handlers.go  # Web-specific route handlers
│   ├── middleware/          # API middleware
│   └── response/            # Response structures and utilities
│
├── cmd/                     # Main applications for this project
│   └── quoggasocial/        # Entry point of the application
│       └── main.go          # Application entry point
│
├── config/                  # Configuration file(s)
│   └── config.go            # Configuration initialization
│
├── pkg/                     # Library code that's ok to use by external applications
│   ├── model/               # Data models
│   ├── service/             # Business logic
│   └── repository/          # Database interactions
│
├── internal/                # Private application and library code
│   ├── util/                # Utility functions and common code
│   └── db/                  # Database initialization and connection logic
│
├── web/                     # Web assets
│   ├── static/              # CSS, JavaScript, and other static assets
│   ├── template/            # HTML templates
│   └── ui/                  # UI components using Lit Elements
│
├── .env                     # Environment variables
├── go.mod                   # Go module definitions
└── go.sum                   # Go module checksums
```

## Key Components

- **`api/`**: Contains logic related to API endpoints, including request and response handling, middleware, and utilities.

- **`cmd/`**: Holds main applications for the project. Each application has its own directory with a `main.go` file serving as the entry point.

- **`config/`**: Centralized configuration settings, including initialization logic.

- **`pkg/`**: Library code that can be used by other applications, organized into models, services, and repositories.

- **`internal/`**: Private application and library code, including utilities and database connection logic.

- **`web/`**: Houses web-related assets, including static files, HTML templates, and UI components using Lit Elements.

## Additional Notes

- Route handlers for API endpoints are located in `api/handler/api_handlers.go`, while handlers for web endpoints are in `api/handler/web_handlers.go`.

- The project structure promotes modularity, scalability, and maintainability, making it easier to manage both backend and frontend components of the application.
```
