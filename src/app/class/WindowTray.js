const electron = require('electron')
const {Tray, app, Menu} = electron

class WindowTray extends Tray {
    constructor(iconePath, mainWindow){
        super(iconePath)

        this.on('right-click', this.onRightClick.bind(this))
        this.setToolTip('Desktop pharmacie')
        this.mainWindow = mainWindow
        this.on('click', this.onClick.bind(this))       
    }

    onClick() {
        this.mainWindow.isVisible() ? this.mainWindow.hide() : this.mainWindow.show();
    }

    onRightClick() {
        const menuConfig = Menu.buildFromTemplate([
            {
                label: 'Quitter',
                click: ()   =>  app.quit()
            }
        ])
        
        this.popUpContextMenu(menuConfig)
    }
}

module.exports = WindowTray