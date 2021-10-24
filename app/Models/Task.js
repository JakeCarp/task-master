import { generateId } from "../Utils/generateId.js";


export class Task {

    constructor(data) {
        this.id = data.id || generateId()
        this.body = data.body
        this.complete = data.complete || false
    }

    get Template() {
        return `
        <div class="col-12">
                <p class="m-0">${t.body}</p>
                <button class="btn btn-danger" onclick="app.tasksController.deleteTask('${this.id}')"><i class="mdi mdi-close></i></button>
            </div>
            `
    }
}