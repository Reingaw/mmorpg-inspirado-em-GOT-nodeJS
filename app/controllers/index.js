module.exports.index = function(application, req, res){
	res.render('index', {validacao : {}, dados : {} , msg : {}});
}

module.exports.autenticar = function(application, req, res){
	var bodyForm = req.body;

	req.assert('usuario', 'Usuário não pode ser vazio!').notEmpty();
	req.assert('senha', 'Senha não pode ser vazio!').notEmpty();

	var erros = req.validationErrors();

	if (erros) {
		res.render('index', {validacao : erros, dados : bodyForm,  msg : {}});
		return;
	}

	var conn = application.config.dbConnection;
	var usuariosDAO = new application.app.models.UsuariosDAO(conn);

	usuariosDAO.autenticar(bodyForm, req, res);

}