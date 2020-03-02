import { Component, OnInit } from '@angular/core';
import { Tarefa } from "src/app/models/Tarefa";

@Component({
  selector: 'app-lista-de-tarefas',
  templateUrl: './lista-de-tarefas.component.html',
  styleUrls: ['./lista-de-tarefas.component.css']
})
export class ListaDeTarefasComponent implements OnInit {
  listaTarefa: Tarefa[] = [];

  constructor() {
    this.listaTarefa.push(new Tarefa("Jogar",true))
   }

  ngOnInit(): void {
  }

  addTarefa(){
    ``
  }

}
