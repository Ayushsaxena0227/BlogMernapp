Introduction
This is a full-stack MERN (MongoDB, Express, React, Node.js) blog application that allows users to create, edit, delete, and view blogs. The application features a clean and attractive UI with animations and 3D effects.

Features->
Add a Blog: Users can add new blogs with a title and description.
Edit a Blog: Users can edit existing blogs.
Delete a Blog: Users can delete blogs.
View Blogs: Users can view a list of all blogs.

Project Structure->
The project is divided into two main folders:
client: Contains the front-end code.
server: Contains the back-end code.

Technologies Used->
Frontend: React, CSS Modules, Axios
Backend: Node.js, Express.js
Database: MongoDB
Styling: CSS with animations and 3D effects

Prerequisites->
Node.js
MongoDB

Installation->
Clone the repository:
git clone https://github.com/Ayushsaxena0227/BlogMernapp.git
cd BlogMernapp
Install dependencies for the server:
cd server
npm install

Install dependencies for the client:
cd ../client
npm install

Running the Application->
Start the server:
cd server
npm start

Start the client:
cd ../client
npm start

Configuration->
Create a .env file in the server directory and add the following environment variables:
MONGO_URI=your_mongo_db_connection_string
PORT=5000

API Endpoints->
Blog Endpoints
GET /api/blogs: Fetch all blogs
POST /api/blogs: Add a new blog
PUT /api/blogs/
: Edit an existing blog
DELETE /api/blogs/
: Delete a blog

Frontend Components->
Home Component
Displays a list of all blogs.
Shows loading animation while fetching data.
Uses CSS Modules for styling with animations and 3D effects.

AddBlog Component->
Allows users to add a new blog.
Form validation and error handling.
Uses CSS Modules for styling with animations and 3D effects.

EditBlog Component->
Allows users to edit an existing blog.
Form validation and error handling.
Uses CSS Modules for styling with animations and 3D effects.
Contributing
Feel free to submit issues and enhancement requests.

License
This project is licensed under the MIT License.

Acknowledgements
CodeCamp for the inspiration and resources.
All contributors for their hard work.
