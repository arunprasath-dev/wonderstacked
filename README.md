# My Next.js App

This is a Next.js application that utilizes ShadCN for component styling, Cypress for end-to-end testing, and Docker for containerization.

## Getting Started

To get started with this project, follow the instructions below.

### Prerequisites

Make sure you have the following installed:

- Node.js (version 14 or later)
- Docker and Docker Compose

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd wonderstacked_playground
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Development Server

To run the development server, use the following command:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application in action.

### Running Tests

To run the Cypress end-to-end tests, use the following command:

```bash
npx cypress open
```

### Building for Production

To build the application for production, run:

```bash
npm run build
```

### Running in Docker

To run the application in a Docker container, use the following command:

For production:

```bash
docker-compose up --build -d
```

For development with hot reloading:

```bash
docker-compose -f docker-compose.dev.yml up --build -d
```

For force rebuild without cache

```bash
docker compose -f docker-compose.yml build --no-cache
```

### 📁 Project Directory Structure

```txt
.
├── .husky/                     # Git hooks (e.g., pre-commit)
├── public/                     # Static assets (images, SVGs, etc.)
│   └── ...
├── src/                        # All source code lives here
│   ├── app/                    # Next.js 13+ routing (App Router)
│   │   ├── layout.tsx          # Global layout
│   │   ├── page.tsx            # Root page
│   │   └── (routes)/           # Route folders (e.g., /about, /dashboard)
│   ├── components/             # Reusable UI components
│   │   └── ui/                 # Design system primitives
│   ├── features/               # Feature-specific logic (modular structure)
│   │   └── auth/               # Example: auth feature
│   │       ├── AuthForm.tsx
│   │       └── auth.api.ts
│   ├── lib/                    # Utilities, configs, constants
│   │   ├── utils.ts
│   │   └── constants.ts
│   ├── styles/                 # Global CSS, Tailwind, variables, themes
│   │   ├── globals.css
│   │   └── theme.css
│   ├── middleware.ts           # Optional Next.js middleware
│   └── types/                  # Global TypeScript declarations
│       └── index.d.ts
├── cypress/                    # Cypress E2E tests
│   ├── e2e/
│   ├── fixtures/
│   └── support/
├── docker/                     # Docker/Nginx related configs
│   └── nginx.conf
├── logs/                       # Runtime logs (ignored in Git)
├── .dockerignore
├── .editorconfig
├── .eslintrc.js
├── .gitignore
├── .prettierrc
├── .prettierignore
├── components.json             # Optional: shadcn or Storybook metadata
├── docker-compose.yml
├── Dockerfile
├── next.config.ts
├── next-env.d.ts
├── package.json
├── tsconfig.json
├── README.md
└── LICENSE
```

### Best Practices

## Logging

- Static by default - Better performance and SEO
- Dynamic when needed - User-specific content, real-time data
- Client-side analytics - For tracking page views on static pages
- API routes - For server-side logging without affecting page rendering
- Structured logging - Include context like user ID, session, etc.

### Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [ShadCN Documentation](https://ui.shadcn.com/docs)
- [Cypress Documentation](https://docs.cypress.io/guides/overview/why-cypress)
- [Docker Documentation](https://docs.docker.com/get-started/)

### License

This project is licensed under the MIT License. See the LICENSE file for details.
