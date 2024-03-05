import { Injectable } from '@nestjs/common';
import { Task } from './task.model';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: number): Task {
    return this.tasks.find(task => task.id === id);
  }

  createTask(task: Task): Task {
    const fullTask = {
        ...task,
        id: this.tasks.length + 1,
        completed: false,
    }

    this.tasks.push(fullTask);

    return fullTask;
  }

  updateTask(id: number, updatedTask: Task): Task {
    const taskIndex = this.tasks.findIndex(task => task.id === id);
    this.tasks[taskIndex] = { ...this.tasks[taskIndex], ...updatedTask };
    return this.tasks[taskIndex];
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
