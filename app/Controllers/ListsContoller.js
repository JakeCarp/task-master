import { ProxyState } from "../AppState.js";
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
        ProxyState.on('lists', _drawLists())
        ProxyState.on('lists', saveState())
        ProxyState.on('tasks', _drawLists())
        ProxyState.on('tasks', saveState())
    }

    createList() {
        window.event.preventDefault()
        let form = window.event.target
        let
    }
}