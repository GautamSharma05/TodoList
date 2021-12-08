import { Component, Input, OnInit, Output,EventEmitter  } from '@angular/core';
import { TODO } from 'src/app/TODO';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
  @Input() todo!: TODO;
  @Output() todoDelete:EventEmitter<TODO> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(todo:TODO){
    this.todoDelete.emit(todo);
    console.log("Item Deleted")
  }

}
