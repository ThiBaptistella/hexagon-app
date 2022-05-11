const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
  sendPing: () => ipcRenderer.send('api', 'ping'),
  apiCall: (callback: (arg0: any) => void) => ipcRenderer.on('api', (event, data) => {
    if(typeof callback === 'function') {
      callback(data);
      console.log("preload", data)
    }
  }),
})