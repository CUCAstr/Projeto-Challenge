// Adiciona evento de submit ao formulário
document.getElementById('bank-form').addEventListener('submit', function (e) {
	e.preventDefault(); // Evita o comportamento padrão do formulário
	
	// Obtém os valores dos campos
	const banco = document.getElementById('codigoBanco').value.trim();
	const agencia = document.getElementById('agencia').value.trim();
	const conta = document.getElementById('conta').value.trim();
	const cpf = document.getElementById('cpf').value.trim();
	
	// Valida se todos os campos foram preenchidos
	if (!banco || !agencia || !conta || !cpf) {
		alert('Por favor, preencha todos os campos.');
		return;
	}
	
	// Exibe mensagem de sucesso (ou prossiga para a próxima etapa)
	alert('Dados enviados com sucesso!');
});
