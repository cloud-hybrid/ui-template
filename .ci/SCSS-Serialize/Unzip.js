// ---------------------------------------------------------------------------------------------------------------------
// Standard Library
// ---------------------------------------------------------------------------------------------------------------------

import * as FS from "fs";
import * as Path from "path";
import * as Runtime from "process";
import * as Child from "child_process";

import * as Assertion from "assert";

import * as Walker from "./Walker";

// ---------------------------------------------------------------------------------------------------------------------
// Global(s)
// ---------------------------------------------------------------------------------------------------------------------

const CWD = Runtime.cwd();

// const Archives = Walker.Exports.Zips;
//
// const Folders = Walker.default.Walk;

// ---------------------------------------------------------------------------------------------------------------------
// Input Serialization
// ---------------------------------------------------------------------------------------------------------------------

const Unzip = (source, target = null) => {
    const Absolute = {
        Source: Path.isAbsolute(source),
        Path: Path.resolve(source)
    };

    const Valid = (Absolute.Source) ? FS.statSync(source).isFile()
        : FS.statSync(Path.relative(CWD, source)).isFile();

    Assertion.strictEqual(Valid, true);

    const Subprocess = Child.spawn("unzip", [
        "-o", "-q", "-q", Absolute.Path, "-d", (target !== null)
            ? target: Runtime.cwd()
    ]);

    const Output = Subprocess.stdout || Runtime.stdout;
    const Error = Subprocess.stderr || Runtime.stderr;

    Runtime.stdout.write("    - Decompression Target: " + source + "\n");

    Output.on("data", async (data) => {
        let Allocation = 0;

        // Allocate --> Array Buffer of (n + 1) Bytes
        const Buffer = await data;
        new Array(Buffer[Symbol.iterator]).forEach(
            (_) => Allocation += 1
        );

        // Shift <-- Left to Release Empty Byte for String[0]
        const Output = Buffer.toString("UTF-8", Allocation - 1);

        const String = Output.trim();

        if (String !== "") {
            Runtime.stdout.write(String + "\n");
        }
    });

    Error.on("data", async (data) => {
        let Allocation = 0;

        // Allocate an Array Buffer of (n + 1) Bytes
        const Buffer = await data;
        new Array(Buffer[Symbol.iterator]).forEach(
            (_) => Allocation += 1
        );

        // Shift <-- Left to Release Empty Byte for String[0]
        const Output = Buffer.toString("UTF-8", Allocation - 1);

        Runtime.stdout.write(Output);
    });

    Subprocess.on("error", (error) => {
        Runtime.stderr.write("Error", JSON.stringify(
            error, null, 4)
        );
    });

    Subprocess.on("close", (code) => {
        Runtime.stdout.write("Exit-Code: " + String(code) + " " + String((code === 0) ? "(Successful)": "(Error)") + " " + "\n");

        if (target !== null) {
            Runtime.stdout.write("Scanning Blob for Decompression Targets ..." + "\n");

            Archives(target).forEach(async (Element) => {
                await Unzip(Element.Path);
            });
        }
    });
};

const Main = () => {
    /// ... Unzip("Artifacts.zip", Path.join(CWD, "Artifacts"));
};

module.exports = Main;

Main();
