FROM node:22 AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Production image
FROM node:22 AS production

# Set the working directory
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next

# Copy production environment files (non-local)
COPY --from=builder /app/.env.production ./

# Copy any additional files Next.js might need
COPY --from=builder /app/tsconfig.json ./
COPY --from=builder /app/next-env.d.ts ./


# Remove prepare script to avoid husky error in production
RUN npm pkg delete scripts.prepare

# Install only production dependencies
RUN npm install --omit=dev

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]