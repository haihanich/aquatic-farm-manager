const { showMainMenu, showObjectsMenu } = require("./menu");
const { closeApp, clearScreen, ask } = require("./utils");
const { switchShowObjectsMenu } = require("./submenus");

/**
 * Главный цикл приложения.
 * Показывает меню, обрабатывает выбор, повторяет.
 */
async function startApp() {
    let running = true;

    while (running) {
        const choice = await showMainMenu();

        switch (choice) {
            case "1":
                // TODO: Дашборд
                clearScreen();
                console.log("📊 Дашборд — пока пусто. Реализуй меня!");
                await ask("\nНажми Enter, чтобы вернуться в меню...");
                break;

            case "2":
                // TODO: Объекты мониторинга
                clearScreen();
                const choice1 = await (showObjectsMenu());
                switchShowObjectsMenu(choice1);

                break;

            case "3":
                // TODO: Тревожные события
                clearScreen();
                console.log("🚨 Тревожные события — пока пусто. Реализуй меня!");
                await ask("\nНажми Enter, чтобы вернуться в меню...");
                break;

            case "0":
                running = false;
                clearScreen();
                console.log("👋 До встречи, фермер!");
                break;

            default:
                // Неизвестная команда — просто покажем меню заново
                clearScreen();
                console.log('такой команды пока не существует :(');
                await ask('\nНажми Enter, чтобы вернуться в меню...');
                break;
        }
    }

    closeApp();
}


module.exports = { startApp };
