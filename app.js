const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const path = require( 'path' );

const router = express.Router();

const app = express();

app.use( bodyParser.urlencoded( { extended: false } ) );
app.use( bodyParser.json() );

module.exports = router;

const upload = require( './routes/upload' );
app.use( '/api/upload', upload );

const port = process.env.PORT || 3000;

app.listen( port, () => console.log( `Server running on port: ${port}` ) );