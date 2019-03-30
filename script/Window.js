const { BrowserWindow } = require('electron');

const defaultProps = {
    width: 800,
    height: 600,
    frame: false
}

class Window extends BrowserWindow {
    constructor ({ file, ...windowSettings } ) {
        super({ ...defaultProps, ...windowSettings });
        this.loadFile(file);
        this.once('ready-to-show', () => {
            this.show();
            require('./arduino');
        });
    }
}

module.exports = Window;
