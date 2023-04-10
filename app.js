const express = require ('express');
const app = express();
const morgan = require('morgan');//recibir en consola
//settings
app.set('port',process.env.PORT || 3000);//en caso haya un puerto definido por la nube que lo tome sino usar 3000
app.set('json spaces',2);//Ordenar el json con spacios


//middlewares
app.use(morgan('dev')); //mensaje de servidor mas reducido
//app.use(morgan('combined')) //mensaje de servidor mas completo
app.use(express.urlencoded({extended:false}));//mensajes de formularios sencillos input
app.use(express.json());//para entender mensajes json

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1><br>My name is <strong>Bryan Daniell Arrivasplata Rojas</strong><br> Website: <a href="https://www.bryanarrivasplata.com">https://www.bryanarrivasplata.com</a>')
});

app.use(require('./src/routes/category'));
app.use(require('./src/routes/product'));

app.listen(app.get('port'),()=>{
    console.log(`http://127.0.0.1:${app.get('port')}`);
});