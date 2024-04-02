
# Authentication API Documentation

## Introduction
The Authentication API provides endpoints for user authentication, including sign-up, login, logout, token refresh, and user details retrieval.

## Base URL
```
https://example.com/api/auth
```

## Authentication
Most endpoints in this API require authentication using JSON Web Tokens (JWT). To authenticate, include the access token in the `Authorization` header of the HTTP request in the format:
```
Authorization: Bearer <access_token>
```

## Endpoints

### 1. Sign Up
- **Method**: `POST`
- **URL**: `/signup`
- **Description**: Register a new user.
- **Request Body**:
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string"
  }
  ```
- **Response**:
  - `201 Created`: User successfully registered.
  - `400 Bad Request`: Invalid request body or missing parameters.
  - `409 Conflict`: Email already exists.

### 2. Log In
- **Method**: `POST`
- **URL**: `/login`
- **Description**: Authenticate and generate access tokens.
- **Request Body**:
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Response**:
  - `200 OK`: Successful login, returns access and refresh tokens.
  - `400 Bad Request`: Invalid request body or missing parameters.
  - `401 Unauthorized`: Invalid credentials.

### 3. Get User Details
- **Method**: `GET`
- **URL**: `/user`
- **Description**: Retrieve user details.
- **Authentication**: Required (Bearer token).
- **Response**:
  - `200 OK`: User details retrieved successfully.
  - `401 Unauthorized`: Invalid or missing access token.

### 4. Update Username
- **Method**: `PUT`
- **URL**: `/update-username`
- **Description**: Update the username of the authenticated user.
- **Authentication**: Required (Bearer token).
- **Request Body**:
  ```json
  {
    "userId": "string",
    "newUsername": "string"
  }
  ```
- **Response**:
  - `200 OK`: Username updated successfully.
  - `400 Bad Request`: Invalid request body or missing parameters.
  - `404 Not Found`: User not found.

### 5. Log Out
- **Method**: `POST`
- **URL**: `/logout`
- **Description**: Invalidate the refresh token.
- **Request Body**:
  ```json
  {
    "refreshToken": "string"
  }
  ```
- **Response**:
  - `200 OK`: Successfully logged out.
  - `400 Bad Request`: Invalid request body or missing parameters.
  - `401 Unauthorized`: Invalid refresh token.

## Error Responses
- `400 Bad Request`: Invalid request format or parameters.
- `401 Unauthorized`: Access token is missing or invalid.
- `404 Not Found`: Resource not found.
- `409 Conflict`: Resource already exists.
- `500 Internal Server Error`: Unexpected server error.

---

You can now copy and paste this content into your Word document. Adjustments can be made based on your specific formatting preferences.
