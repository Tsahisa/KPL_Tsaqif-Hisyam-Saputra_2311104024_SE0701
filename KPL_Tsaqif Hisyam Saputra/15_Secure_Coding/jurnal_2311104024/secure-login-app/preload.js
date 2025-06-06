const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  readUsers: () => ipcRenderer.invoke('read-users'),
  saveUsers: (data) => ipcRenderer.invoke('save-users', data)
});