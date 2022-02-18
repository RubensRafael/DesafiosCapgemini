const checkPassword = require('./desafio2')


//Use test.only para selecionar o teste a ser feito.

test('saber se o que falta para a senha ser minimamente aceitavel', () => {
	
	let password = "senha"
  	expect(checkPassword(password)).toBe(1);
  		
	
});
// Em todos os testes abaixo, caso a função bloqueie corretamente, ela retornará a mesma senha digitada
test('saber se NÃO existe uma minúscula', () => {
	

	let password = "SENHAA"
	let check = new RegExp("[a-z]")

  	expect(check.test(checkPassword(password))).toBeFalsy();
  		
	
});

test('saber se NÃO existe uma maiúscula', () => {
	

	let password = "senhaa"
	let check = new RegExp("[A-Z]")

  	expect(check.test(checkPassword(password))).toBeFalsy();
  		
	
});

test('saber se NÃO existe número', () => {
	

	let password = "Senhaa"
	let check = new RegExp("[0-9]")

  	expect(check.test(checkPassword(password))).toBeFalsy();
  		
	
});

test('saber se NÃO existe caractere especial', () => {
	

	let password = "Senha1"
	let check = new RegExp("[!@#$%^&*()-+]")

  	expect(check.test(checkPassword(password))).toBeFalsy();
  		
	
});
