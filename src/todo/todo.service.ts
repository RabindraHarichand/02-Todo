import { Injectable } from '@nestjs/common';
import { Todo } from './entity/todo.entity';

@Injectable()
export class TodoService {
  private todos: Todo[] = [
    { id: 1, description: 'Piedra del Alma', done: false },
    { id: 1, description: 'Piedra del Espacio', done: true },
    { id: 1, description: 'Piedra del Poder', done: false },
  ];

  findAll(): Todo[] {
    return this.todos;
  }
}
