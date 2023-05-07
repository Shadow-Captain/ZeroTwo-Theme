'use strict';

const vscode = require('vscode');

/**
 * Esta es la función que se exporta como el punto de entrada de la extensión.
 * @param {vscode.ExtensionContext} context - El contexto de la extensión.
 */
function activate(context) {
  console.log('La extensión "zerotwo-love-theme" ha sido activada.');

  // Registra un comando para la extensión.
  let disposable = vscode.commands.registerCommand('extension.saludar', () => {
    vscode.window.showInformationMessage('Hola desde mi extensión ZeroTwo!');
  });

  // Añade el comando a la lista de objetos que se eliminan cuando se desactiva la extensión.
  context.subscriptions.push(disposable);
}

/**
 * Esta función se llama cuando la extensión se desactiva.
 */
function deactivate() {
  console.log('La extensión "zerotwo-love-theme" ha sido desactivada.');
}

module.exports = {
  activate,
  deactivate
};
