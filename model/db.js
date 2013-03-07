var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var Band = new Schema({
    name           : String,
    description    : String,
    facebook       : String,
    twitter        : String,
    myspace        : String
});

mongoose.model( 'Band', Band );

mongoose.connect( 'mongodb://localhost/instrument-village' );
