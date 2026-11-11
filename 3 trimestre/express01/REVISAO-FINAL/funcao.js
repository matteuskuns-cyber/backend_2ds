//São blocos de código reproveitaveis
//remete a algumas ações ou procedimento (replicaveis)
//exige nomes auto-explicativos

function montarCarro(peças, regars, documentos, montador){
    return {
        montar: function(){console.log(`O carro foi montado com sucesso \\o/`)},
    }
}
//todos os dados serão descartados
montarCarro(
    ['portas', 'vidros', 'pneus', 'motor', 'bancos', 'volante']
    'como montar um monza',
    'projeto para montar um monza',
    'seu zé'
)