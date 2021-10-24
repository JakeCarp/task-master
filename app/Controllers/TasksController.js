import { tasksService } from "../Services/TasksService.js"



export class TasksController {
    constructor() {
        console.log('hello from tasks Controller')
    }
    createTask(id) {
        window.event.preventDefault()
        let form = window.event.target
        let taskData = {
            listId: id,
            body: form.taskName.value
        }
        tasksService.createTask(taskData)
    }

    deleteTask(id) {
        tasksService.deleteTask(id)
    }
    toggle(id) {
        tasksService.toggle(id)
    }
}