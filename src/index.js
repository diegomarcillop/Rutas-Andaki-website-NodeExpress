const express = require('express');
const morgan = require('morgan');
const path =  require('path');
 
const app = express();

// settings
app.set('port', 3000);
app.set('nameWeb','Rutas Andaki');
app.set('views', path.join(__dirname, 'views'));

app.engine('html', require('ejs').renderFile)
app.set('view engine','ejs');

// middlewares 

// routes
 app.use(require('./routes/index'));


// static files
app.use(express.static(path.join(__dirname,'public')));

// listener in server
app.listen(app.get('port'), ()=>{
     console.log('Server on ports '+app.get('port'));
})
