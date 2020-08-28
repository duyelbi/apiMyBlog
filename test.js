const mongoose = require('mongoose')
const blog = require('./models/blog')
mongoose.connect('mongodb://localhost/myBlog', {
    useNewUrlParser: true
});
blog.create({
    title: 'Đây là sách dạy học lập trình Node.js từ cơ bản',
    body: 'Nếu bạn đam mê với Javascript và muốn khám phá cách xây dựng ứng dụng với Node.js thì đây là cuốn sách dành cho bạn.'
}, (error, blog) => {
    console.log(error, blog)
})
