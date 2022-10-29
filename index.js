const express = require('express')
const {engine} = require('express-handlebars')
const port = process.env.PORT || 3000;
const app = express()

app.set('view engine', 'hbs')
app.use(express.static('public'))
app.engine('hbs', engine({
    layoutsDir: `${__dirname}/views/layouts`,
    extname: 'hbs',
    partialsDir: `${__dirname}/views/partials`
}))

app.get('/',(req,res)=>{
    res.render('home',{layout: 'index',css_file_name: 'home.css',js_file_name: 'home.js'})
})
app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})