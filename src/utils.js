const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

/**
 * Задаёт вопрос пользователю и возвращает Promise с ответом.
 * @param {string} question — текст вопроса
 * @returns {Promise<string>}
 */
function ask(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer.trim());
        });
    });
}

/**
 * Очищает терминал.
 */
function clearScreen() {
    console.clear();
}

/**
 * Печатает горизонтальную линию-разделитель.
 */
function printSeparator() {
    console.log("=".repeat(50));
}

/**
 * Закрывает readline интерфейс.
 */
function closeApp() {
    rl.close();
}

module.exports = { ask, clearScreen, printSeparator, closeApp };
