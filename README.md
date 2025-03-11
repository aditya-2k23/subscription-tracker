# Subscription Tracker API

## Overview

The Subscription Tracker API is a backend service designed to manage user subscriptions. It allows users to create, update, delete, and retrieve their subscriptions. The service also includes features for user authentication and automated reminders for subscription renewals.

## Features

- User authentication (sign-up, sign-in, sign-out)
- CRUD operations for subscriptions
- Automated reminders for subscription renewals
- Rate limiting and bot detection using Arcjet
- Integration with Upstash for workflow automation

## Technologies Used

- **Node.js**: JavaScript runtime for building the backend service.
- **Express.js**: Web framework for handling HTTP requests and routing.
- **MongoDB**: NoSQL database for storing user and subscription data.
- **Mongoose**: ODM library for MongoDB, providing schema-based data modeling.
- **JWT (jsonwebtoken)**: For user authentication and authorization.
- **Bcrypt.js**: For hashing user passwords.
- **Dotenv**: For managing environment variables.
- **Arcjet**: For rate limiting and bot detection.
- **Upstash**: For workflow automation and reminders.
- **Day.js**: For date manipulation and formatting.

## Project Structure

- **config/**: Configuration files for environment variables, Arcjet, and Upstash.
- **controllers/**: Controllers for handling business logic and HTTP requests.
- **database/**: Database connection setup.
- **middlewares/**: Middleware functions for request processing.
- **models/**: Mongoose models for MongoDB collections.
- **routes/**: Express routes for different API endpoints.

## Getting Started

1.  **Clone the repository**:

    ```sh
    git clone https://github.com/your-username/subscription-tracker.git
    cd subscription-tracker
    ```

2.  **Install dependencies**:

    ```sh
    npm install
    ```

3.  **Set up environment variables**: Set up environment variables: Create a `.env.development.local` file in the root directory and add the following variables:

    ```env
    PORT=5500
    SERVER_URL="http://localhost:5500"
    NODE_ENV="development"
    DB_URI="your-mongodb-uri"
    JWT_SECRET="your-jwt-secret"
    JWT_EXPIRES_IN="1d"
    ARCJET_KEY="your-arcjet-key"
    ARCJET_ENV="development"
    QSTASH_URL="http://127.0.0.1:8080"
    QSTASH_TOKEN="your-qstash-token"
    ```

4.  **Run the development server**:

    ```sh
    npm run dev
    ```

5.  **Access the API**: The API will be running at `http://localhost:5500`.

## API Endpoints

- **AUTH**:

  - `POST /api/v1/auth/sign-up`: Register a new user.
  - `POST /api/v1/auth/sign-in`: Login a user.
  - `POST /api/v1/auth/sign-out`: Logout a user.

- **USERS**:

  - `GET /api/v1/users`: Get all users.
  - `GET /api/v1/users/:id`: Get a single user by ID.

- **SUBSCRIPTIONS**:

  - `POST /api/v1/subscriptions`: Create a new subscription.
  - `GET /api/v1/subscriptions/user/:id`: Get all subscriptions for a user.
  - `PUT /api/v1/subscriptions/:id`: Update a subscription.
  - `DELETE /api/v1/subscriptions/:id`: Delete a subscription.

- **WORKFLOWS**:
  - `POST /api/v1/workflows/subscription/reminder`: Trigger subscription reminders.
