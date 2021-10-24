import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"

export class List {
    constructor(data) {
        this.id = data.id || generateId()
        this.title = data.title
        this.color = data.color
    }


    get Template() {
        return `
        <div class="card text-center col-3">
            <div class="row">
                <div class="card-body" style="background-color:${this.color}">
                    <h4 class="card-title">${this.title}</h4>
                </div>
                <button class="btn btn-warning" onclick="app.listsController.deleteList('${this.id}')">Delete List</button>
            </div>
            <div>
                ${this.getTasks()}
            </div>
            <form class="row align-items-end" onsubmit="app.tasksController.createTask('${this.id}')">
        <div class="col-10">
          <input type="text" class="form-control" name="taskName" id="" aria-describedby="helpId" placeholder="add task">
        </div>
        <button class="btn btn-dark col-2">+</button>
        </form>
        </div>
        `
    }


    getTasks() {
        let tasks = ProxyState.tasks.filter(t => t.listId == this.id)
        let template = ``
        tasks.forEach(t => {
            template += t.Template
        });
        return template
    }
}
