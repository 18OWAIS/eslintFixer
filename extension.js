const vscode = require('vscode');

function activate(context) {
    console.log('ESLint Disabler is active!');

    let disposable = vscode.commands.registerCommand('extension.fixESLintErrors', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }

        const document = editor.document;
        const firstLine = document.lineAt(0);
        const insertionPoint = new vscode.Position(0, firstLine.firstNonWhitespaceCharacterIndex);

        // Insert the /* eslint-disable */ line at the beginning of the file
        editor.edit(editBuilder => {
            editBuilder.insert(insertionPoint, '/* eslint-disable */\n');
        });

        vscode.window.showInformationMessage('ESLint disabled for the uppermost section!');
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};


// this is my extension.js file
// now implement the extension on our source code