const path = require('path');
const url = require('url');
const {app,BrowserWindow}= require('electron');

let win;

function createWindow() {
  win = new BrowserWindow({width: 571,height: 920, icom: __dirname + "/img/img/icon/MainIcon.png" });
  win.loadURL(url.format({pathname: path.join(__dirname,'index.html'),protocol:'file:',slashes:true }));
  win.webContents.openDevTools();
  win.on('closed', ()=> {
    win = null;
  });
}

app.on('ready',createWindow);

app.on('window-all-closed', ()=>{
  app.quit();
})