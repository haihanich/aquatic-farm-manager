const { ask, clearScreen } = require("./utils");
const {showObjectsMenu} = require("./menu");

async function switchShowObjectsMenu() {
    let back = false;
    while(!back) {
        const choice = await showObjectsMenu();

        switch (choice) {
            case "1":
                clearScreen();
                console.log("Список ферм:");
                await ask("\nНажми Enter, чтобы вернуться в меню...");
                break;

            case "2":
                clearScreen();
                console.log("Создать новую ферму");
                await ask("\nНажми Enter, чтобы вернуться в меню...");
                break;

            case "0":
                back = true;
                clearScreen();
        }
    }
}

module.exports = { switchShowObjectsMenu };
