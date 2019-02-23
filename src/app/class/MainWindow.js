const electron  = require('electron')
const url = require('url');
const path = require('path');

const { BrowserWindow } = electron

class MainWindow extends BrowserWindow 
{
    constructor(page, frames){
        super({
            height: 600,
            width: 800,
            frame: frames,
            show: true,
            icon: __Asset + 'favicon.png',
            webPreferences: {
                backgroundThrottling: false
            }
        })
        
        this.loadURL(url.format({
                pathname: path.join(__dirname, './../view', page),
                protocol: 'file',
                slashes: true
            })
   
        );
        this.on('blur', this.onBlur.bind(this))
    }

    onBlur() {
        this.hide()
    }

}

module.exports = MainWindow