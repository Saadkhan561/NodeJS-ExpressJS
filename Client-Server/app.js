const express = require('express');

// morgan middleware is used to display request types on the console
const morgan = require('morgan');

// mongoose is an ODM(Object Document Mapping) library used for mongodb.
const mongoose = require('mongoose');

const blogRoutes = require('./routes/blogRoutes')

// creating express app
const app = express();

// mongoDB database link
const db =
  'mongodb+srv://saadnadeem885:rokx51928@saad-cluster.sydav3q.mongodb.net/';
mongoose
  .connect(db)
  .then((result) => {
    app.listen(3000);
    console.log('database connected');
  })
  .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// listen for requests
// app.listen(3000);

// morgan middleware
app.use(morgan('tiny'));

// middleware & static files
app.use(express.static('public'));

// middleware to get form data which comes attached to the URL.
app.use(express.urlencoded({extended: true}))

// mongoose and mongo sandbox routes/Practice routes to save and retrieve data from mongoDB. 
// app.get('/add-blog', (req, res) => {
//   const blog = new Blog({
//     title: 'new blog 2',
//     snippet: 'about my second blog',
//     body: 'more about my second blog'
//   })
//   blog.save()
//     .then((result) => {
//       res.send(result)
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// })

// app.get('/all-blogs', (req, res) => {
//   Blog.find()
//     .then((result) => {
//       res.send(result)
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// })

// app.get('/single-blog', (req, res) => {
//   Blog.findById('64ec5a2ec06349f0488e959b')
//     .then((result) => {
//       res.send(result)
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// })
// mongoose and mongo sandbox routes/Practice routes to save and retrieve data from mongoDB.


app.get('/about', (req, res) => {
  // res.send('<p>about page</p>')
  // res.sendFile('./views/about.html', {root: __dirname})
  res.render('about', { title: 'About' });
});

// Blog Routes
app.use(blogRoutes)

// redirects
// used when site route is changed.
app.get('/about-us', (req, res) => {
  res.redirect('/about');
});

// 404 page
// middleware
// use method fires for every request and works only for the invalid request.
//  This should be placed at the very bottom.
app.use((req, res) => {
  // res.status(404).sendFile('./views/404.html', {root: __dirname})
  res.status(404).render('404', { title: '404 Error' });
});
