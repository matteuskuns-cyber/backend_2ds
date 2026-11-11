//São estruturas complexas de dados
//Argumentos do tipos chave-valor( k, v)
//Pode conter valores, arrays, objetos, funções, etc.

const celular = {
    tela: '6.7',
    marca: 'Samsung',
    modelo: 'S21',
    preco: 4500,
    cores: ['preto', 'branco', 'cinza'],
    acao: function onOf(){return 'ligar/desligar'}
    
}
console.log(celular.cores[1])
console.log(celular.acao)
console.log(celular.acao())