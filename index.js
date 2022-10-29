const express = require('express')
const {engine} = require('express-handlebars')
const axios = require('axios')
const port = process.env.PORT || 3000;
const app = express()

app.set('view engine', 'hbs')
app.use(express.static('public'))
app.engine('hbs', engine({
    layoutsDir: `${__dirname}/views/layouts`,
    extname: 'hbs',
    partialsDir: `${__dirname}/views/partials`
}))

app.get('/',async(req,res)=>{
    var movies = await axios.get('https://movie-api-messi.herokuapp.com/')
    movies = movies.data
    res.render('home',{layout: 'index',css_file_name: 'home.css',js_file_name: 'home.js',movies: movies})
})
app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})