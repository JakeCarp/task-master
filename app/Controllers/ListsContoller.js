import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";

//private
function _drawLists() {
    const lists = ProxyState.lists
    let template = ``
    lists.forEach(l => template += l.Template)
    document.getElementById('app').innerHTML = template
}

export class ListsController {
    constructor() {
        console.log('hello form list controller')
        ProxyState.on('lists', _drawLists)
        ProxyState.on('lists', saveState)
        ProxyState.on('tasks', _drawLists)
        ProxyState.on('tasks', saveState)
        loadState()
        _drawLists()
    }

    createList() {
        console.log('creating list...')
        window.event.preventDefault()
        let form = window.event.target
        let listData = {
            title: form.listTitle.value,
            color: form.listColor.value
        }
        console.log(listData)
        listsService.createList(listData)

    }

    deleteList(id) {
        listsService.deleteList(id)
    }
}