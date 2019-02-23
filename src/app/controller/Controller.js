const electron = require('electron')
const {ipcMain} = electron

const Model = require(`${__Model}`)

class Controller {
    constructor (window, element) {
        this.window = window
        this.element = element
        this.dataStore = new Model({ name: element})
        
        this.add = 'add-' + element
        this.delete = 'delete-' + element
        this.get = 'get-' + element
        this.update = 'update-' + element
        this.find = 'find-' + element
    }

    addF(){
            ipcMain.on(`${this.add}`, (event, item) => {
            const updateItems = dataStore.addItem(item).items
            this.window.send(this.element, updateItems)
        })
    }

    deleteF(){
        ipcMain.on(`${this.delete}`, (event, item) => {
            const updateItems = dataStore.deleteItem(item).items
            this.window.send(this.element, updateItems)
        })
    }

    updateF(){
        ipcMain.on(`${this.update}`, (event, item) => {
            const updateItems = dataStore.update(item).items
            this.window.send(this.element, updateItems)
        })
    }

    findF(){
        ipcMain.on(`${this.update}`, (event, item) => {
            const updateItems = dataStore.find(item).items
            this.window.send(this.element, updateItems)
        })
    }
}

module.exports = Controller