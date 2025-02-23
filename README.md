# API Documentation

git clone https://github.com/kaltrinabaliu/carRental.git

install the MongoDB for VS Code

create the .env file

MONGO_URI=mongodb://localhost:27017/carRental
JWT_SECRET=supersecretkey

to install

npm install

run

npm start

## User APIs

### 1. Signup

- **Route:** POST /api/register
- **Description:** Creates a new user account.

### 2. Sign in

- **Route:** POST /api/login
- **Description:** Logs in an existing user.

### 3. My profile

- **Route:** GET /api/my-profile
- **Description:** Get user loged in details.

### 4. Rental cars

- **Route:** GET /api/rental-cars?
- **Description:** Get cars to rent sorted from lowest
  to highest price, also you can filter by params(year, color,
  steering type, and number of seats).
