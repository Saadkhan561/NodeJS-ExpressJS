// importing blog model
const Blog = require('../models/blog');

const blog_index = (req, res) => {
  Blog.find()
    .then((result) => {
      res.render('index', { title: 'Home', blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });

  // Dummy Data
  // res.send('<p>home page</p>')
  // res.sendFile('./views/index.html', {root: __dirname}) // __dirname gives the name of the directory you are currently in
  // const blogs = [
  //   { title: 'yayyyy', snippet: 'Lorem ipsum dolor sit amet consectetur.' },
  //   { title: 'hipppiiii', snippet: 'Lorem ipsum dolor sit amet consectetur.' },
  //   { title: 'hurrayyy', snippet: 'Lorem ipsum dolor sit amet consectetur.' },
  // ];
};

const blog_details = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render('details', { blog: result, title: 'Blog Details' });
    })
    .catch((err) => {
      console.log(err);
    });
};

const blog_create = (req, res) => {
  res.render('blogs-create', { title: 'Create Blog' });
};

const blog_create_post = (req, res) => {
  console.log(req.body);
  const blog = new Blog(req.body);

  blog
    .save()
    .then((result) => {
      res.redirect('/');
    })
    .catch((err) => {
      console.log(err);
    });
};

const blog_delete = (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: '/' });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  blog_index,
  blog_details,
  blog_create,
  blog_create_post,
  blog_delete,
};
