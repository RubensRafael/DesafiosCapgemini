const myModule = require('./desafio3')
const getSubstrings = myModule.getSubstrings
const anagramCheck = myModule.anagramCheck
const countPairs = myModule.countPairs


//Use test.only para selecionar o teste a ser feito.

test('saber se a lista de substrigs cobre todas as possibilidades', () => {
	
	let word = "ovo"
	let possibilities = getSubstrings(word).length
  	expect(possibilities).toBe(6);
  		
	
});

test('saber se duas palavras são anagramas', () => {
	// como duas letras repetidas são consideradas anagramas, testamos com apenas uma letra.
	let str1 = "o"
	let str2 = "o"
	
  	expect(anagramCheck(str1,str2)).toBeTruthy();
  		
	
});

test('saber se a quantidade de pares está correta', () => {
	
	let str = "ovo"
	let check = countPairs([ 'o', 'ov', 'ovo', 'v', 'vo', 'o' ]).length
  	expect(check).toBe(2);
  		
	
});

