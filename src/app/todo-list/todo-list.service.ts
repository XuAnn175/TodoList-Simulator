import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  private list : Todo[] = [];
  constructor() { }

  add(title : string) : void{
    if(title || title.trim()){
      this.list.push(new Todo(title));
    }
  }
  remove(index : number) : void{
    this.list.splice(index,1);
  }
  getlist() : Todo[]{
    return this.list;
  }
  getWithCompleted(completed: boolean): Todo[] {
    return this.list.filter(todo => todo.get_done() === completed);
  }
  removeCompleted(): void {
    this.list = this.getWithCompleted(false);
  }
}
