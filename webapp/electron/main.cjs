const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 900,
        minWidth: 800,
        minHeight: 600,
        titleBarStyle: 'hiddenInset',
        backgroundColor: '#1A1918',
        show: false,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
        },
    });

    const indexPath = path.join(__dirname, '..', 'dist', 'index.html');

    win.loadFile(indexPath).catch(err => {
        console.error(`Failed to load index.html: ${err.message}`);
    });

    win.once('ready-to-show', () => {
        win.show();
        win.focus();
    });
}

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.whenReady().then(createWindow);


