import * as FS from "fs";
import * as Path from "path";
import * as Runtime from "process";

import { default as Glob } from "glob";

const Files = () => Glob([Runtime.cwd(), "src", "**/*.module.css"].join(Path.sep), (Error, Files) => {
    if (Error) console.error(Error);
    Files.forEach(
        (File) => {
            console.debug(File);
            const Serial = JSON.stringify(FS.readFileSync(File, { encoding: "UTF-8" }));
            console.debug(Serial);
        }
    )
});

if (Runtime.argv.includes("--main")) Files();

