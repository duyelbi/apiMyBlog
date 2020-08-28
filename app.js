var CreateError = require('http-errors');
const Express = require("express");
const BodyParser = require("body-parser");
var Path = require('path');

var app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

// connect database
const Mongoose = require('mongoose')
Mongoose.connect('mongodb://localhost/myBlog', { useNewUrlParser: true, useUnifiedTopology: true })
Mongoose.set('useCreateIndex', true);

var blogRouter = require('./routes/blog');

app.use("/blog", blogRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(CreateError(404));
  });

  // error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
  

app.listen(3000, () => {
    console.log("Listening at : 3000");
})

module.exports = app;