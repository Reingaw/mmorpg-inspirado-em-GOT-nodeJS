module.exports.cadastro = function(application, req, res){
	res.render('cadastro', {validacao : {}, dadosForm : {}});
}

module.exports.cadastrar = function(application, req, res){
	var dadosForm = req.body;

	req.assert('nome', 'Nome não pode ser vazio!').notEmpty();
	req.assert('usuario', 'Usuário não pode ser vazio!').notEmpty();
	req.assert('senha', 'Senha não pode ser vazio!').notEmpty();
	req.assert('casa', 'Uma casa deve ser selecionada!').notEmpty();

	var erros = req.validationErrors();

	if (erros) {
		res.render('cadastro', {validacao : erros , dadosForm : dadosForm});
		return;
	}

	var conn = application.config.dbConnection;
	var usuariosDAO = new application.app.models.UsuariosDAO(conn);
	var jogoDAO = new application.app.models.JogoDAO(conn);

	usuariosDAO.inserirUsuario(dadosForm);
	jogoDAO.gerarParametros(dadosForm.usuario);

	res.render('index', {validacao : erros, dados : bodyForm,  msg : {}});
}