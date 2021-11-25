const express = require( 'express' );
const {APIController} = require( './../controllers/apiController' );
const APIRouter = express.Router();


APIRouter.route('/').get(APIController.loadnames);
APIRouter.route('/new/:name').get(APIController.addname);

APIRouter.route('/remove/:name').get(APIController.deleteUser);
APIRouter.route('/:name').get(APIController.loadname);


module.exports = { APIRouter };

