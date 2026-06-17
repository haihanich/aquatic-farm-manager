const { ask, clearScreen } = require("./utils");

async function switchShowObjectsMenu(choice1) {
    switch (choice1) {
        case "1":
            clearScreen();
            console.log("Список ферм:");
            await ask("\nНажми Enter, чтобы вернуться в меню...");
            break;

        case "2":
            clearScreen();
            console.log("Создать новую ферму");
            await ask("\nНажми Enter, чтобы вернуться в меню...");

        case "0":
            clearScreen();
    }
}

module.exports = { switchShowObjectsMenu };