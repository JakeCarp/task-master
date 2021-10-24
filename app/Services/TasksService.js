import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";



class TasksService {
    constructor() {
        console.log('hello from task service')
    }
    createTask(taskData) {
        let task = new Task(taskData)
        ProxyState.tasks = [...ProxyState.tasks, task]
    }

    deleteTask(id) {
        ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
    }
    toggle(id) {
        let task = ProxyState.tasks.find(t => t.id == id)
        task.complete = !task.complete
        ProxyState.tasks = ProxyState.tasks
    }
}


export const tasksService = new TasksService()