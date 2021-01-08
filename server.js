const { text } = require('express');
const express = require('express');
const app = express()

const hbs = require('hbs');
app.use(express.static(__dirname+'/public'))

hbs.registerPartials(__dirname+'/views/parciales')

//helpers
require('./hbs/helpers')

const port = process.env.PORT || 3000;

app.set('view engine','hbs');

app.get('/', function (req, res){
   
    // renderiza el archivo especificado "home.hbs"
    res.render('home', {
        nombre: 'luis f'
    })
}) 

app.get('/about', function (req, res){
   
    // renderiza el archivo especificado "home.hbs"
    res.render('about', {
        img: 'gendapp.jpeg'
    })
}) 


/*/*  app.get('/data', function (req, res){
    res.send('Hola Data')

}) */

app.listen(port,()=>{
    console.log(`Escuchando peticiones en el puerto ${port}`, )
})