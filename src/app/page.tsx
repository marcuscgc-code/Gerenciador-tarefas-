// Exemplo 1: Exportação default (export default)
// Aqui, você exporta apenas UM elemento como padrão do arquivo.
// Ao importar, não precisa usar chaves {}, pode dar qualquer nome ao importar.

const Home = () => {
  return <div>Marcus</div>;
};
//App Router
// // Isto é um 'export default':
export default Home;

/*
Significa: Neste arquivo, a exportação principal é Home.
Em outro arquivo, você importa assim:
import Home from './Home';
(Não precisa usar chaves)
*/



//next trabalha com renderizaçao la no servidor
//renderizar conteudo no servidor e vai mandar seu conteudo pro front end
//o servidor tiver uma coisa e front end tiver outra -- ERRO DE HIDRATAÇAO
