const ipcMain = require('electron').ipcMain;
ipcMain.on("openFolderDialog", (event, arg)=>{
	const dialog = require('electron').dialog;
	let tips = dialog.showOpenDialogSync({properties:["openDirectory", "multiSelections"]});
	event.returnValue = tips;
});

ipcMain.on("openFileDialog", (event, arg)=>{
	const dialog = require('electron').dialog;
	let tips = dialog.showOpenDialogSync({properties:["openFile", "multiSelections"]});
	event.returnValue = tips;
});