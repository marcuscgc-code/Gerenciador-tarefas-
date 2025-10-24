import { prisma } from "@/lib/prisma";
// criar funcao assincrona pois so assincrona pra se comunicar com bd
const getTasks = async ()=>{
    //await pra esperar o bd
    // prisma.tasks é a tabela criada em schema.prisma que faz concexao com .env e prisma.confi.ts 
    // findMany pra buscar todas as informações que estão no banco de dados
    const tasks = await prisma.tasks.findMany

    // verificar se a resposta seja falso como null, false, 0, undefine, notAnumber
    if(!tasks) return
    //no console.log vai mostrar as atividades cadastradas
    console.log(tasks)
    return tasks

}