import * as TTY from "tty";

const Spinner = [
    "┃ ●    ┃",
    "┃  ●   ┃",
    "┃   ●  ┃",
    "┃    ● ┃",
    "┃     ●┃",
    "┃    ● ┃",
    "┃   ●  ┃",
    "┃  ●   ┃",
    "┃ ●    ┃",
    "┃●     ┃"
];


let index = 0;
const Handler = async () => setInterval(() => {
    index = (index + 1) % Spinner.length;

    const dots = new Array(index + 1).join(".");

    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write("Installing Dependencies" + " " + dots);
}, 500);

export const Exit = ($) => {
    process.exit($);
};

export default (TTY.isatty(process.stdin.fd)) ? Handler: () => null;
