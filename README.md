Bookstore RESTful API ---<br />
This is a simple RESTful API for a Bookstore Application built with NestJS and MongoDB. It supports user authentication, CRUD operations on books, filtering/search, and input validation.
<br/>
Tech Stack ---<br/>
-Backend Framework: NestJS (Node.js + TypeScript)<br/>
-Database: MongoDB<br/>
-Authentication: JWT (JSON Web Tokens)<br/>
-ORM/ODM: Mongoose<br/>
<br/>
Features ---<br/>

1. User Authentication (JWT-based)<br/>
-`POST /auth/signup` – to register a new user with email & password<br/>
-`POST /auth/login` – to login with email & password to receive JWT token<br/>
All book routes are protected and require a valid token.<br/>

2. Book Endpoints (Protected)<br/>
- `POST /books` – to add a new book  <br/>
- `GET /books` – to get all books  <br/>
- `GET /books/:id` – to get book by ID  <br/>
- `PUT /books/:id` – to update book by ID  <br/>
- `DELETE /books/:id` – to delete book by ID  <br/>

3. Filtering and Search<br/>
- Filter by: `author`, `category`, `rating`<br/>
- Search by: partial match in `title`<br/>
- Example:  <br/>
  `GET /books?author=Rowling&rating=4.5&title=magic`<br/>
<br/>
Sample Request – Add Book (POST /books) ---<br/>
Headers: Authorization: Bearer <your_jwt_token> Content-Type: application/json<br/>
Body: { "title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "category": "Classic", "price": 10.99, "rating": 4.7, "publishedDate": "1925-04-10" }<br/>
<br/>
Setup Instructions --- <br/>

1. Clone the repository:<br/>

(In Git bash)<br/>
git clone https://github.com/dhiman02/bookstore-api.git<br/>
cd bookstore-api<br/>

2. Install dependencies:<br/>

(In Git bash)<br/>
npm install<br/>

3. Configure MongoDB connection:<br/>

Update your .env file with your MongoDB URI:<br/>
MONGODB_URI=mongodb://localhost:27017/bookstore<br/>
JWT_SECRET=your_jwt_secret<br/>

4. Run the app:<br/>

(In Git bash)<br/>
npm run start:dev<br/>
<br/>
Author---<br/>

Namrata Dhiman<br/>
Backend Developer Assignment for Zynetic(April 2025)<br/>

