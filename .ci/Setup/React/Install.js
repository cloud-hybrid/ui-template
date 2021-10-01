import * as Runtime from "process";
import * as Process from "child_process";
import * as Handler from "./Handler.js";

const Subprocess = Process.spawn("npm", ["install", "."]);

const Output = Subprocess.stdout;
const Error = Subprocess.stderr;

Handler.default(Runtime);

Output.on("data", async (data) => {
    Runtime.stdout.clearLine();

    let Allocation = 0;

    // Allocate --> Array Buffer of (n + 1) Bytes
    const Buffer = await data;
    new Array(Buffer[Symbol.iterator]).forEach(
        (_) => Allocation += 1
    );

    // Shift <-- Left to Release Empty Byte for String[0]
    const Output = Buffer.toString("UTF-8", Allocation - 1);

    (process.argv.splice(2).includes("--verbose"))
        ? Runtime.stdout.write(Output) : null;
});

Error.on("data", async (data) => {
    let Allocation = 0;

    // Allocate an Array Buffer of (n + 1) Bytes
    const Buffer = await data;
    new Array(Buffer[Symbol.iterator]).forEach(
        (_) => Allocation += 1
    );

    // Shift <-- Left to Release Empty Byte for String[0]
    process.stdout.clearLine();
    process.stdout.cursorTo(0);

    const Output = Buffer.toString("UTF-8", Allocation - 1);

    Runtime.stdout.write(Output);
});

Subprocess.on("error", (error) => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);

    console.error("Error", JSON.stringify(
        error, null, 4)
    );
});

Subprocess.on("close", (code) => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);

    const Signal = String(code);
    const Status = (Signal !== "0")
        ? "(Error)": "(Success)";

    Runtime.stdout.write("Exit Code: " + Signal + " " + Status + "\n");

    Handler.Exit(code);
});

export default Subprocess;
