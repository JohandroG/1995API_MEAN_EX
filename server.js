const express = require('express');
require('./server/config/database');
const {APIRouter} = require( './server/routes/apiRouter' );

const app = express();

app.use( '', APIRouter );

app.listen( 8080, function(){
    console.log( "The users server is running in port 8080." );
});



