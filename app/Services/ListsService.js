import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";
import { saveState } from "../Utils/LocalStorage.js";

//private




class ListsService {
    constructor() {
        console.log('hello from lists service')
    }
    createList(listData) {
        let list = new List(listData)
        ProxyState.lists = [...ProxyState.lists, list]
        saveState()
    }

    deleteList(id) {
        ProxyState.lists = ProxyState.lists.filter(l => l.id != id)

        ProxyState.tasks = ProxyState.tasks.filter(t => t.listId != id)
    }
}


export const listsService = new ListsService()