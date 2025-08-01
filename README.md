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
   cd wonderstacked
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

```bash
docker-compose up --build
```

### Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [ShadCN Documentation](https://ui.shadcn.com/docs)
- [Cypress Documentation](https://docs.cypress.io/guides/overview/why-cypress)
- [Docker Documentation](https://docs.docker.com/get-started/)

### License

This project is licensed under the MIT License. See the LICENSE file for details.
