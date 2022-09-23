import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos-items',
  templateUrl: './todos-items.component.html',
  styleUrls: ['./todos-items.component.css']
})
export class TodosItemsComponent implements OnInit {
 @Input()todo!: Todo;
 @Input()i!: number;

  @Output() todoDelete : EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox : EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(todo : Todo){
    this.todoDelete.emit(todo);
    console.log("onClick method is triggered")
  }
  onCheckboxClick(todo: Todo | undefined)
  {
    console.log(todo)
    this.todoCheckbox.emit(todo);
    console.log(todo)
  }
}
