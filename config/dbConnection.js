//Importando o MongoDb
var mongo = require('mongodb');

//Variavel contendo a função com os dados de conexão
var conMongoDb = function(){
	var db = new mongo.Db(
		'got',
		new mongo.Server(
			'localhost', //string contendo o endereço do servidor
			27017, //porta de conexão
			{}
		),
		{}
	);

	return db;
}

//Retornando a variavel que permite fazer a conexão com o banco
module.exports = function(){
	return conMongoDb;
}