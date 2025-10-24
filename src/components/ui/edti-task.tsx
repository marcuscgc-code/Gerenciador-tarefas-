// Criando componente React

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FilePenLine } from "lucide-react";
import { Input } from "./input";
import { Button } from "./button";

// Arrow funciton
const EditTask = () =>{
return(
    <Dialog>
              <DialogTrigger asChild>
              <FilePenLine size={16} className="cursor-pointer text-gray-600 hover:text-blue-600 transition-colors" />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                  Editar Tarefas
                  </DialogTitle>
                </DialogHeader>   

                <div className="flex gap-2">
                  <Input placeholder="Editar Tarefa"/>
                  <Button className="cursor-pointer">
                    Editar
                  </Button>
                </div>
              </DialogContent>
          </Dialog>
)
}
export default EditTask