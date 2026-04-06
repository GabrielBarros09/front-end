let texto = "Alô, mundo!"
console.log(texto.length);
console.log(texto[0]);
console.log(texto[10]);

let nome = "gabriel";
console.log(nome.map(palavra => palavra.charAt()))

let frase = "Aprender JavaScript é divertido!";
console.log(frase.includes("JavaScript"));

console.log("HTML é fácil".replaceAll("HTML", "JavaScript"));

let textoSujo = "   Olá,    mundo   !   ";
console.log(textoSujo.trim())