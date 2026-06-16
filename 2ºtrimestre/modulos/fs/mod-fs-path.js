
const fs = require('fs')
const path = require('path')
const chalk = require('chalk').default

try {
    //             Módulo-fs                  diretório    arquivo  codificação  
    const arquivo = fs.readFileSync(path.join(__dirname, './festa.md'), 'utf-8')
console.log(chalk.green('Arquivo carregado com sucesso!'))
    console.log(arquivo)
console.log(chalk.red("Deu ruin:"))
} catch (erro) {
    console.log(erro.messagem)
}

