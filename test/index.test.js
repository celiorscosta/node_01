const pegaArquivo = require('../index');

const arrayResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
];

describe('pegaArquivo::', () => {
    it('deve ser uma função', () => {
        expect(typeof pegaArquivo).toBe('function');
    });
    it('deve retornar array com resultados', async () => {
        const resultado = await pegaArquivo('D:/Celio/Documents/Estudos Novas Tecnologias/node_01/test/arquivos/texto1.md');
        expect(resultado).toEqual(arrayResult);
    });
    it('deve retornar mensagem "não há link"', async () => {
        const resultado = await pegaArquivo('D:/Celio/Documents/Estudos Novas Tecnologias/node_01/test/arquivos/texto1_sem_link.md');
        expect(resultado).toBe('não há links');
    });
    it('deve lançar um erro na falta de arquivo', async () => {
        await expect(pegaArquivo('D:/Celio/Documents/Estudos Novas Tecnologias/node_01/test/arquivos/')).rejects.toThrow(/não há arquivo no caminho/);
    });
    it('deve resolver a função com sucesso', async () => {
        await expect(pegaArquivo('D:/Celio/Documents/Estudos Novas Tecnologias/node_01/test/arquivos/texto1.md')).resolves.toEqual(arrayResult);
    })
});
