import { Component, OnInit } from '@angular/core';
import {TODO} from '../../TODO';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItem: string;
  todos!:TODO[]
  
  constructor() {
    this.localItem = localStorage.getItem('todos')!;
    if(this.localItem == null){
       this.todos = []
    }
    else{
      this.todos = JSON.parse(this.localItem);
    }
   }

  ngOnInit(): void {
  }
   deleteTodo(todo:TODO){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
   }
   addTodo(todo:TODO){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
   }

}
