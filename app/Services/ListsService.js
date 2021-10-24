import { ProxyState } from "../AppState.js";
import { List } from "../Models/List";
import { saveState } from "../Utils/LocalStorage.js";

//private




export class ListsService {
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