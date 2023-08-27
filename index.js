const express = require("express");
const app = express();
const PORT = 5000;
const path = require("path");

// Set up call hbs with sub folder
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "src/views"));

// Set serving static file
app.use(express.static("src/assets"));

// parsing data static file
app.use(express.urlencoded({ extended: false }));

// dummy data
// const blog = [
//   {
//     id: 1,
//     title: "Aplikasi website",
//     content: "membuat website sederhana",
//     author: "Jhon doe",
//     postedAt: new Date(),
//   },
//   {
//     id: 1,
//     title: "Aplikasi website",
//     content: "membuat website sederhana",
//     author: "Jhon doe",
//     postedAt: new Date(),
//   },
// ];

// Routing
app.get("/", home);
app.get("/blog", blog);
app.get("/form-blog", formBlog);
app.get("/contact", contact);
app.get("/blog-detail/:id", blogDetail);
app.get("/project", project);
// app.post("/project", addBlog);

// Local Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// index
function home(req, res) {
  res.render("index");
}

// home
function blog(req, res) {
  res.render("blog");
}

// form blog
function formBlog(req, res) {
  res.render("form-blog");
}

// project
function project(req, res) {
  res.render("project");
}

// add new blog
// function addBlog(req, res) {
//   const title = req.body.title;
//   const content = req.body.description;
// }

// console.log(title);
// console.log(description);

// contact
function contact(req, res) {
  res.render("contact");
}

// blog-detail
function blogDetail(req, res) {
  const { id } = req.params;
  console.log(id);

  const data = {
    id,
    title: "APLIKASI WEBSITE ADALAH PILIHAN UTAMA UNTUK PENGGUNA MOBILE DAN SEMUA JAGAD RAYA",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris cursus egestas neque a facilisis. Etiam nec tortor id velit posuere aliquam eget nec enim. Etiam semper maximus mauris, ac elementum urna auctor nec. Sed es semper in tellus vel, consequat lobortis odio. Sed maximus aliquam dui, eu egestas dui imperdiet semper. Nam auctor nisi tortor, eget iaculis erat euismod sed. Nam sed velit egestas, venenatis sapien quis, convallis",
  };

  res.render("blog-detail", data);
}
