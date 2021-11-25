const { names } = require('debug');
const {NameModel} = require( './../models/nameModel' );


const APIController = {

    loadnames : function (resquest,response) {
        NameModel.getallnames()
            .then( names => {
    
                let allnames = names.map(name => {
                    return {name}
                });
            response.status( 200 ).json( allnames );
            });
            },
    


    addname : function (request,response) {
        
        let name = request.params.name;
        let created_at = new Date();
        let updated_at = new Date();

        if(name){
        newName = {
            name,
            created_at,
            updated_at
        }

        console.log(newName);

        
        NameModel
                .createname( newName )
                .then( result => {
                    response.status( 201 ).json( result );
                });
        }
        else{
            response.statusMessage = "You are missing a field to create a new user ('userName', 'firstName', 'lastName', 'password')";
            response.status( 406 ).end();
        }      
    },

    deleteUser : function( request, response ){
        let name = request.params.name;

        NameModel
            .getUserById( name )
            .then( user => {
                if( user === null ){
                    throw new Error( "That user doesn't exist" );
                }
                else{
                    NameModel
                        .deleteUserById( name )
                        .then( result => {
                            response.status( 204 ).end();
                        });
                }
            })

    },

    loadname : function (request,response) {

        let name = request.params.name;
        NameModel.getUserById(name)
            .then( names => {
                let name = names
            response.status( 200 ).json( name );
            });
            },

}


module.exports = { APIController };