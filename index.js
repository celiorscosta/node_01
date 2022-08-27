import chalk from 'chalk';
import fs  from 'fs';
import { encode } from 'punycode';

function trataErro(erro){
    throw new Error(chalk.red(erro.code, 'Não há arquivo'));
}

async function pegaArquivo(caminhoDoArquivo){
    try{   
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        console.log(chalk.green(texto));
    }
    catch(erro){
        trataErro(erro);
    }
}

// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8';
//     fs.promises
//     .readFile(caminhoDoArquivo, encoding)
//     .then((text)=> console.log(chalk.green(text)))
//     .catch((erro)=> trataErro(erro));
// }

// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8';
//     fs.readFile(caminhoDoArquivo, encoding, (erro, texto)=>{
//         if(erro){
//             trataErro(erro);
//         }
//         console.log(chalk.green(texto));
//     });
// }

pegaArquivo('./arquivos/texto1.md');