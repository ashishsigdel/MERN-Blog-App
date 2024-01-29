<H1 align ="center" > Ashish's BLOG  </h1>
<h5  align ="center"> 
Fullstack open source blogging application made with MongoDB, Express, React & Nodejs (MERN) with tailwind css </h5>
<br/>

  * [Configuration and Setup](#configuration-and-setup)
  * [Key Features](#key-features)
  * [Technologies used](#technologies-used)
      - [Frontend](#frontend)
      - [Backend](#backend)
      - [Database](#database)
  * [Author](#author)
  * [License](#license)


## Configuration and Setup

In order to run this project locally, simply fork and clone the repository or download as zip and unzip on your machine.

- Open the project in your prefered code editor.
- Go to terminal -> New terminal (If you are using VS code)
- Split your terminal into two (run the Frontend(client) on one terminal and the Backend(api) on the other terminal)

In the first terminal

```
$ cd client
$ npm install (to install frontend-side dependencies)
$ npm run  start (to start the frontend)
```

In the second terminal

- Set environment variables in .env
- Create your mongoDB connection url, which you'll use as your MONGO
- Supply the following credentials

```
#  ---  .env  ---

MOGO =
JWT_SECRET_KEY =

# --- Terminal ---

$ npm install (to install backend-side dependencies)
$ npm run dev (to start the backend)
```
##  Key Features

- User registration and login
- Admin dashboard
- Robost app
- Authentication using JWT Tokens
- Authentication with google
- CRUD operations (post create, read, update and delete)
- Upload user ımages
- Commenting  on the post and edit
- like  on the comment 
- loading effect
- Responsive Design

<br/>

##  Technologies used

This project was created using the following technologies.

####  Frontend 

- [React js ](https://www.npmjs.com/package/react) - JavaScript library that is used for building user interfaces specifically for single-page applications
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) - To handle routing
- [React icons](https://react-icons.github.io/react-icons/) - Small library that helps you add icons  to your react apps.
- [Google firebase](https://console.firebase.google.com/u/0/) - To store image and to Authenticate with google
- [React Quill](https://www.npmjs.com/package/react-quill) - To store input as HTML body
- [React Redux](https://react-redux.js.org/) - React Redux is the official React UI bindings layer for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update state.


####  Backend 

- [Node js](https://nodejs.org/en/) -A runtime environment to help build fast server applications using JS
- [Express js](https://www.npmjs.com/package/express) -The server for handling and routing HTTP requests
- [Mongoose](https://mongoosejs.com/) - For modeling and mapping MongoDB data to JavaScript
- [express-async-handler](https://www.npmjs.com/package/express-async-handler) - Simple middleware for handling exceptions inside of async express routes and passing them to your express error handlers 
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - For authentication
- [Bcryptjs](https://www.npmjs.com/package/bcryptjs) - For data encryption
- [Dotenv](https://www.npmjs.com/package/dotenv) - Zero Dependency module that loads environment variables

####  Database 

 - [MongoDB ](https://www.mongodb.com/) - It provides a free cloud service to store MongoDB collections.
 

## Author
- Website: [Ashish Sigdel](https://ashishsigdel.com.np/)
- Github: [ashishsigdel](https://github.com/ashishsigdel)
- Linkedin: [Ashish Sigdel](https://www.linkedin.com/in/ashish-sigdel-39106a268/)
- Email: [a.asis.sigdel01@gmail.com](mailto:a.asis.sigdel01@gmail.com)

## License

MIT License

Copyright (c) 2024 - Ashish Sigdel
