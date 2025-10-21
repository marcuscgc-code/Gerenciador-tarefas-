import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Plus, List, Check, ArrowDownRight, FilePenLine, Trash, ListCheck } from 'lucide-react';

const Home = () => {
  return (
    // main: área principal da tela (ocupa 100% da largura e altura da janela)
    // Tailwind classes:
    // w-full h-screen → ocupa toda a tela
    // bg-gray-100 → define fundo cinza-claro
    // flex justify-center items-center → centraliza o conteúdo no meio da tela (horizontal e vertical)
    // p-4 → adiciona espaçamento interno
    <main className="w-full h-screen bg-gray-100 flex justify-center items-center p-4">
      
      {/* O Card é o “bloco principal”, tipo uma caixa delimitada e estilizada */}
      {/* max-w-lg impede que fique muito largo, ideal em layouts responsivos */}
      <Card className="w-full max-w-lg">

        {/* CardHeader é a parte superior do card — normalmente um título ou elementos de entrada */}
        {/* space-y-4 → adiciona espaçamento vertical entre elementos filhos */}
        <CardHeader className="space-y-4">
          
          {/* Agrupa o Input e o botão lado a lado */}
          {/* flex → coloca em linha
              gap-2 → insere espaçamento de 8px entre eles
          */}
          <div className="flex gap-2">
            {/* Campo de input onde o usuário digita a tarefa */}
            {/* flex-1 → ocupa todo o espaço restante no container */}
            <Input placeholder="Adicionar Tarefa" className="flex-1" />

            {/* Botão para adicionar uma nova tarefa */}
            {/* variant="default" → estilo padrão do shadcn */}
            {/* cursor-pointer → transforma o cursor em "mãozinha" */}
            <Button variant="default" className="cursor-pointer">
              {/* Ícone de “+” antes do texto, tamanho 16px */}
              {/* mr-2 → separa o ícone do texto com margem à direita */}
              <Plus size={16} className="mr-2" />
              Cadastrar
            </Button>
          </div>

          {/* Inserção do separador (linha horizontal) abaixo do input */}
          <Separator />

          {/* Seção dos filtros (Todas / Não Finalizadas / Concluídas) */}
          {/* flex + gap-2 → coloca lado a lado com espaçamento */}
          {/* flex-wrap → quebra linha caso fique muito estreito */}
          <div className="flex gap-2 flex-wrap">
            
            {/* Badge “Todas” */}
            {/* hover:bg-blue-100 → muda leve fundo ao passar o mouse */}
            <Badge className="cursor-pointer hover:bg-blue-100">
              <List size={14} className="mr-1" />
              Todas
            </Badge>

            {/* Badge “Não Finalizadas” */}
            <Badge className="cursor-pointer hover:bg-yellow-100">
              <ArrowDownRight size={14} className="mr-1" />
              Não Finalizadas
            </Badge>

            {/* Badge “Concluídas” */}
            <Badge className="cursor-pointer hover:bg-green-100">
              <Check size={14} className="mr-1" />
              Concluídas
            </Badge>
          </div>
        </CardHeader>

        {/* Parte inferior do card, onde as tarefas são listadas */}
        <CardContent>
          
          {/* Agrupa as tarefas com um pequeno espaçamento entre elas */}
          <div className="space-y-2">

            {/* PRIMEIRA TAREFA */}
            {/* bg-white → fundo branco
                h-14 → altura fixa de 56px
                flex justify-between items-center → alinha os filhos na horizontal
                border e rounded-lg → bordas suaves e contorno leve
                shadow-sm hover:shadow-md → sombra pequena que aumenta no hover
            */}
            <div className="bg-white h-14 flex justify-between items-center border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              {/* Barrinha lateral colorida à esquerda da tarefa (indicando status) */}
              <div className="w-1 h-full bg-green-500 rounded-l-lg"></div>

              {/* Texto da tarefa */}
              <p className="flex-1 px-4 text-sm font-medium">Estudar React</p>

              {/* Ações (editar / deletar) */}
              <div className="flex items-center gap-2 pr-4">
                {/* Ícone de lápis para editar */}
                <FilePenLine size={16} className="cursor-pointer text-gray-600 hover:text-blue-600 transition-colors" />
                
                {/* Ícone de lixeira para apagar */}
                <Trash size={16} className="cursor-pointer text-gray-600 hover:text-red-600 transition-colors" />
              </div>
            </div>

            {/* SEGUNDA TAREFA */}
            <div className="bg-white h-14 flex justify-between items-center border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              {/* Barrinha lateral amarela → indicando "pendente" */}
              <div className="w-1 h-full bg-yellow-500 rounded-l-lg"></div>
              
              {/* Título da tarefa */}
              <p className="flex-1 px-4 text-sm font-medium">Fazer exercícios</p>

              {/* Botões de ação (editar/apagar) */}
              <div className="flex items-center gap-2 pr-4">
                <FilePenLine size={16} className="cursor-pointer text-gray-600 hover:text-blue-600 transition-colors" />
                <Trash size={16} className="cursor-pointer text-gray-600 hover:text-red-600 transition-colors" />
              </div>
            </div>

            {/* TERCEIRA TAREFA */}
            <div className="bg-white h-14 flex justify-between items-center border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              {/* Barrinha lateral azul → talvez indicando outro tipo de status */}
              <div className="w-1 h-full bg-blue-500 rounded-l-lg"></div>

              {/* Descrição da tarefa */}
              <p className="flex-1 px-4 text-sm font-medium">Ler documentação</p>

              {/* Ícones de ação */}
              <div className="flex items-center gap-2 pr-4">
                <FilePenLine size={16} className="cursor-pointer text-gray-600 hover:text-blue-600 transition-colors" />
                <Trash size={16} className="cursor-pointer text-gray-600 hover:text-red-600 transition-colors" />
              </div>
            </div>

           
          </div>
          <div className="flex justify-between mt-4">
          <div className="flex gap-2 items-center">
               <ListCheck size={18}/>
              <p className="text-xs">Tarefas Concluidas (3/3)</p>
            </div>
            <Button className="text-xs h-7 cursor-pointer" variant="outline"><Trash /> Limpar tarefas Concluidas</Button>
            
            </div>
            <div className="h-8 w-full bg-red-100">
              <div className="h-2 w-52 bg-blue-500">

              </div>
            </div>
          
                  </CardContent>
      </Card>
    </main>
  );
};

// Exporta o componente "Home" como o padrão do arquivo
// Assim ele pode ser importado facilmente em outro lugar: import Home from './Home';
export default Home;