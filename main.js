const { app } = require('electron')
const Window = require('./script/Window');
const Arduino = require('./script/Arduino');
const arduino = new Arduino();
const myEmitter = require('./script/EventEmitter');
let mainWindow;

function main () {
    mainWindow = new Window({
        file: 'index.html',
    });
}

app.on('ready', main);

app.on('window-all-closed', function() {
    app.quit();
});

myEmitter.on('start-animation', () => {
    console.log('Event Triggered');
    mainWindow.webContents.executeJavaScript(`document.querySelector('.boxaid').style.visibility = "visible"`);
});
myEmitter.on('garra-ready', () => {
  let i = 1;
  for (i; i<6; i++) {
      mainWindow.webContents.executeJavaScript(`document.querySelector('.bandGear:nth-child(${i})').style.animationPlayState="running"`);
      mainWindow.webContents.executeJavaScript(`document.querySelector('.band2Gear:nth-child(${i})').style.animationPlayState="running"`);
  }
  mainWindow.webContents.executeJavaScript(`document.querySelector('.boxaid').style.visibility = "hidden"`);
  mainWindow.webContents.executeJavaScript(`document.querySelector('.box').classList.add('box-animation')`);
});
myEmitter.on('counter', count => {
  mainWindow.webContents.executeJavaScript(`document.getElementById('count').innerText = ${count}`);
})
