const { Db } = require('mongodb');
const mongoose = require( 'mongoose' );

const NameSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    created_at : {
        type : Date,
    },
    updated_at : {
        type : Date,
    }


});

const Name = mongoose.model( 'names', NameSchema );


const NameModel = {


    getallnames : function () {
        return Name.find();
    },

    createname : function (newName){
        return Name.create(newName);
    },
    deleteUserById : function( name ){
        return Name.remove( {name} );
    },
    getUserById : function( name ){
        return Name.findOne({ name });
    },
    //TODO add new endpoints


}

module.exports = {NameModel};