
const fs = require('fs')
const path = require('path')
const chalk = require('chalk').default //padrao

try {
    //             Módulo-fs                  diretório    arquivo  codificação  
    const arquivo = fs.readFileSync(path.join(__dirname, './festamd'), 'utf-8')
    console.log(arquivo)
console.log(chalk.green("Arquivo carregado com sucesso"))
} catch (erro) {
    console.log(erro.messagem)
console.log(chalk.italic.bgBlue.bold.strikethrough.cyan.dim.inverse("Deu ruim:"))
}
