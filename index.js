const path = require('path')
const electron = require('electron')

const MainWindow = require(__Class + '/MainWindow')
const WindowTray = require(__Class + '/WindowTray')
const Controller = require(`${__Controller}`)

const tables = [];

const {app} = electron

let mainWindow;
let tray;
let emptyArray = [];
let mainMenuTemplate;

app.on('ready', () => {
    if(process.platform === 'darwin') {
        app.dock.hide()
    }
    
    mainWindow = new MainWindow(`index.html`,true)
    
    const icone = 'favicon.png'
    const iconePath = path.join(__dirname, `./src/asset/${icone}`)
    tray = new WindowTray(iconePath, mainWindow)
})

if(process.env.NODE_ENV !== 'production'){
    if(mainMenuTemplate){
        mainMenuTemplate.push({
            label: 'Outil de developpement',
            submenu: [
                {
                    label: 'Toogle DevTools',
                    accelerator: process.platform == "darwin" ? 'Command+I' : 'Ctrl+I',
                    click(item, focusedWindow){
                        focusedWindow.toggleDevTools();
                    }
                },
                {
                    role: 'reload'
                }
            ]
        });
    }
    else
    {
        emptyArray.push({
            label: 'Outil de developpement',
            submenu: [
                {
                    label: 'Toogle DevTools',
                    accelerator: process.platform == "darwin" ? 'Command+I' : 'Ctrl+I',
                    click(item, focusedWindow){
                        focusedWindow.toggleDevTools();
                    }
                },
                {
                    role: 'reload'
                }
            ]
        });
    }
    
}
