const { ask, clearScreen, printSeparator } = require("./utils");

/**
 * Показывает главное меню и возвращает выбор пользователя.
 * @returns {Promise<string>} — номер выбранного пункта
 */
async function showMainMenu() {
    clearScreen();
    printSeparator();
    console.log("    🐟  AQUATIC FARM MANAGER  🐟");
    printSeparator();
    console.log("");
    console.log("  1. Дашборд");
    console.log("  2. Объекты мониторинга (фермы и бассейны)");
    console.log("  3. Тревожные события");
    console.log("  0. Выход");
    console.log("");
    printSeparator();

    return await ask("Выберите пункт меню: ");
}

async function showObjectsMenu() {
    clearScreen();
    console.log("2. Объекты мониторинга");
    printSeparator();
    console.log("1. Показать все фермы");
    console.log("2. Создать новую ферму");
    console.log("0. Назад");
    console.log("");
    printSeparator();

    return await ask("Выберите действие: ");
}

module.exports = { showMainMenu, showObjectsMenu };
