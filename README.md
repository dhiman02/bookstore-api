Bookstore RESTful API ---
This is a simple RESTful API for a Bookstore Application built with NestJS and MongoDB. It supports user authentication, CRUD operations on books, filtering/search, and input validation.

Tech Stack ---
-Backend Framework: NestJS (Node.js + TypeScript)
-Database: MongoDB
-Authentication: JWT (JSON Web Tokens)
-ORM/ODM: Mongoose

Features ---

1. User Authentication (JWT-based)
-`POST /auth/signup` – to register a new user with email & password
-`POST /auth/login` – to login with email & password to receive JWT token
All book routes are protected and require a valid token.

2. Book Endpoints (Protected)
- `POST /books` – to add a new book  
- `GET /books` – to get all books  
- `GET /books/:id` – to get book by ID  
- `PUT /books/:id` – to update book by ID  
- `DELETE /books/:id` – to delete book by ID  

3. Filtering and Search
- Filter by: `author`, `category`, `rating`
- Search by: partial match in `title`
- Example:  
  `GET /books?author=Rowling&rating=4.5&title=magic`

Sample Request – Add Book (POST /books) ---
Headers: Authorization: Bearer <your_jwt_token> Content-Type: application/json
Body: { "title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "category": "Classic", "price": 10.99, "rating": 4.7, "publishedDate": "1925-04-10" }

Setup Instructions --- 

1. Clone the repository:

(In Git bash)
git clone https://github.com/dhiman02/bookstore-api.git
cd bookstore-api

2. Install dependencies:

(In Git bash)
npm install

3. Configure MongoDB connection:

Update your .env file with your MongoDB URI:
MONGODB_URI=mongodb://localhost:27017/bookstore
JWT_SECRET=your_jwt_secret

4. Run the app:

(In Git bash)
npm run start:dev

Author---

Namrata Dhiman
Backend Developer Assignment for Zynetic(April 2025)

