// Exemplo 1: Exportação default (export default)
// Aqui, você exporta apenas UM elemento como padrão do arquivo.
// Ao importar, não precisa usar chaves {}, pode dar qualquer nome ao importar.
//import ELIAS sem aplicado @ -- facilita o trabalho pra não entrar em varias pastas
// 👉 Isso é uma exportação nomeada!
// O símbolo @ é uma convenção comum em projetos com Webpack, Next.js ou Vite,
// para facilitar o import sem ficar usando vários ../../.. entre pastas.
// Normalmente o @ equivale ao diretório 'src/', então
// "@/components/ui/button" seria "src/components/ui/button".

// Se o 'Button' for exportado assim:
// export const Button = () => { ... }
// A importação correta é: import { Button } from "..."
// Se fosse export default: export default Button;
// A importação poderia ser: import Button from "..." (sem as chaves)
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle, CardHeader, CardContent, CardFooter, CardAction } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Plus,List, ListCheck, Check, ArrowDownRight } from 'lucide-react';

const Home = () => {
  return (
  <main className="w-full h-screen bg-gray-100 flex justify-center items-center">
      {/* <Button variant="secondary" aria-label="submit">Cadastrar</Button>
      <Input></Input> */}
      <Card className="w-lg">
        <CardContent className="flex gap-2">
          {/* esse é o nome  do card */}
      <Input placeholder="Adicionar Tarefa"/>
      <Button variant="default" className="cursor-pointer"><Plus/>Cadastrar</Button>
      </CardContent>
      <Separator />
      <div className="flex gap-2">
        <Badge className="m-1 cursor-pointer"><List/>Todas  </Badge>
        <Badge className="m-1 cursor-pointer"><ArrowDownRight/>Não Finalizadas  </Badge>
        <Badge className="m-1 cursor-pointer"><Check/>Concluídas  </Badge>

      </div>


        
</Card>
</main>

  )
}
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



//Se aparecer --legacy-peer-deps 
// significa que a biblioteca não está 100% atualizada com o react atual que o usuario está usando
// se aparece ro erro clique em --legacy-pper