const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
  sendPing: () => ipcRenderer.send('api', 'ping'),
  listen: (callback: (arg0: any) => void) => ipcRenderer.on('api', (event, msg) => {
    if(typeof callback === 'function') {
      callback(msg);
    }
  })
})