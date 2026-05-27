// usamos o * para dizer que estamos
// importando tudo de um arquivo
// o termo "as" permite criar um apelido

export * as petShop from './gato-mod.js'

console.log(petShop.alimentarGato('frajola', 'fruta'));
console.log(petShop.banhoGato('sphinx', 'quente'));
console.log(petShop.tosaGato('vira-lata', 'puppy'));