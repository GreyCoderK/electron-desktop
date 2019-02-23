const electron = require('electron')
const Store = require('electron-store')

const {app} = electron

const fs = require('fs')
class Model extends Store {
    constructor (setting, item) {
        super(setting)

        this.filename = app.getPath('userData') + item
        this.file = require(this.filename)
        this.item = item 
        this.items =  this.get(item) || []  
    }

    saveItems () {
        this.set(this.item, this.items)
        return this
    }

    addItem (item) {
        this.items = [...this.items, item]
        return this.saveItems()
    }

    getItems () {
        this.items = this.get(this.item) || []
        return this
    }

    findItem () {
        this.items = this.getItems().filter(obj => obj.id == item.id)
        return this
    }

    deleteItem (item) {
        this.items = this.items.filter(t => t !==  item)
        return this.saveItems()
    }

    updateItem (item) {
        this.getItems().filter(obj => obj.id == item.id).map(item => {
            fs.writeFile(this.filename, file.item, function (err) {
                if (err) {
                    return console.log(err)
                }
                console.log(JSON.stringify(file, null));
                console.log('writing to ' + fileName);
            })
        })
    }
}

module.exports = Model