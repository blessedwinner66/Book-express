# 📚 Book Management API

A simple RESTful API built with **Node.js**, **Express**, and **MongoDB** to manage a collection of books.

## 🚀 Features

- Create a new book
- Get all books
- Get a single book by ID
- Update a book by ID
- Delete a book by ID

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose)
- REST API architecture

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/book-api.git
   cd book-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start MongoDB on your local machine (or make sure it’s running).

4. Start the server:
   ```bash
   node app.js
   or
   npm start from nodemon installed as a dev dependency(it is already configured)
   ```
   

5. Server will start at:
   ```
   http://localhost:3000/api
   ```

## 📘 API Endpoints

| Method | Endpoint         | Description               |
|--------|------------------|---------------------------|
| GET    | `/api/`          | Welcome message           |
| POST   | `/api/books`     | Create a new book         |
| GET    | `/api/books`     | Get all books             |
| GET    | `/api/books/:id` | Get a specific book       |
| PUT    | `/api/books/:id` | Update a book             |
| DELETE | `/api/books/:id` | Delete a book             |

## 📄 Example Book Schema

Make sure you have a Mongoose model like:

```js
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  year: Number
});

module.exports = mongoose.model('Book', bookSchema);
```

## 📬 Contact

For any questions or feedback, feel free to reach out.

---

> Made with ❤️ by IMPANO Blessed Winner
