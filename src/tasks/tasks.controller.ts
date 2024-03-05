import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Get(':id')
  getTaskById(@Param('id') id: number): Task {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  createTask(@Body() task: Task): Task {
    return this.tasksService.createTask(task);
  }

  @Put(':id')
  updateTask(@Param('id') id: number, @Body() updatedTask: Task): Task {
    return this.tasksService.updateTask(id, updatedTask);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: number): void {
    this.tasksService.deleteTask(id);
  }
}
