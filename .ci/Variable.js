const FS = require("fs");
const Path = require("path");
const Query = require("querystring");
const Runtime = require("process");
const Process = require("child_process");

/// Signals: https://man7.org/linux/man-pages/man3/errno.3.html

const CWD = Path.parse(Path.resolve("."));
const Package = Runtime.env.npm_package_configuration || Runtime.env.npm_package_json;
const Throw = {Trigger: false};

(Package) ? console.info("[DEBUG]",
    "➜" + " " + "Configuration" + ":", Package
) : Throw.Trigger = true;

console.info("[DEBUG]",
    "➜" + " " + "Input" + ":", Runtime.argv
);

const Usage = (Integer) => console.error("\n" + "[ERROR]" + " " + "(" + String(Integer) + ")",
    "Usage: npm run env -- [create|update|delete] --token \"{...}\" --key \"{...}\" --value \"{...}\"", "\n"
);

const Valid = [];

if ((Runtime.argv.length !== 9)) {
    Usage(0);

    Runtime.kill(process.pid, "SIGTERM");
}

Valid.push(!(
    Runtime.argv[2].toLowerCase() !== "create"
    && Runtime.argv[2].toLowerCase() !== "delete"
    && Runtime.argv[2].toLowerCase() !== "update"
));

Valid.push(!(
    Runtime.argv[3].toLowerCase() !== "--token"
    || Runtime.argv[5].toLowerCase() !== "--key"
    || Runtime.argv[7].toLowerCase() !== "--value"
));

Valid.forEach((Validated, Index) => {
    if (!Validated) {
        Usage(Index + 1);

        Runtime.kill(process.pid, "SIGTERM");
    }
});

const Token = Runtime.argv[4];
const Key = Runtime.argv[6];
const Value = Runtime.argv[8];

if (Throw.Trigger === true) {
    console.error("\n" + "[ERROR]",
        "➜" + " " + "Message" + ":", "Variable.js must be interfaced via NPM",
        "\n", "             >>> \"scripts\": {",
        "\n", " ---------   ...     \"env-create\": \"node Variable.js create\"",
        "\n", "  Example    ...     \"env-delete\": \"node Variable.js delete\"",
        "\n", " ---------   ...     \"env-update\": \"node Variable.js update\"",
        "\n", "             ... }",
        "\n"
    );

    Runtime.kill(process.pid, "SIGTERM");
} else console.debug("[DEBUG] Current Working Directory" + ":", CWD);

const HTTP = require("https");

const Agent = new HTTP.Agent({
    keepAlive: false,
    maxSockets: 1,
    requestCert: true
});

const Command = Process.execSync(
    ["git", "config", "--get", "remote.origin.url"]
        .join(" "),
    (error, stdout, stderr) => {
        console.log(stdout);
        console.error(stderr);

        (error !== null) ? console.log(
                "Sub-Process Error" + " - " + JSON.stringify(error, null, 4))
            : console.debug("Execution Complete");
    }
);

let Allocation = 0;
new Array(Command[Symbol.iterator]).forEach(
    (_) => Allocation += 1
);

// Shift <-- Left to Release Empty Byte for String[0]
const Output = Command.toString("UTF-8", Allocation - 1);
Runtime.stdout.write("[DEBUG] Remote Origin" + ":" + " " + Output);
const Expression = /^(https|git)(:\/\/|@)([^\/:]+)[\/:]([^\/:]+)\/(.+).git$/gm;

const Container = {
    HTTPs: null,
    uri: null,
    protocol: null,
    separator: null,
    hostname: null,
    directory: null,
    target: null,
    iterator: [
        "uri",
        "protocol",
        "separator",
        "hostname",
        "directory",
        "target"
    ]
};

let match;
while ((match = Expression.exec(Output)) !== null) {
    // Avoid Infinite Runtime(s) from Zero-Width Matches
    if (match.index === Expression.lastIndex) Expression.lastIndex++;

    match.forEach((string, group) => {
        Container[Container.iterator[group]] = string;
    });
}

console.debug("[DEBUG] Expression" + ":", Container);

if (Container.protocol === "git") {
    console.debug("[DEBUG] Generating HTTPs String ...");

    var protocol = "https";
    var separator = "://";
    var hostname = Container.hostname;
    var directory = Container.directory;
    var target = Container.target;

    Container.HTTPs = String(
        protocol
        + separator
        + hostname
        + directory
        + target
    );
} else Container.HTTPs = Container.uri;

console.debug("[DEBUG] URL" + ":", Container.HTTPs);

const IO = {
    Path: Path.format(CWD) + Path.sep + ".io",
    Configuration: null
};

/// Check if GitHub
if (Container.hostname === "github.com") {
    try {
        const Handle = FS.statSync(IO.Path, {
            throwIfNoEntry: true
        });
        const _ = Handle.isFile();

        /// https://man7.org/linux/man-pages/man3/errno.3.html
        const Error = !(_) ? new Error("ENOENT") : null;

        if (Error) throw Error;
    } catch (_) {
        console.error("[ERROR] Invalid VCS System ...");
        console.info("");

        Runtime.stdout.write(
            [
                "The CI-CD Utility is strictly for interfacing GitLab's API.                       ",
                "                                                                                  ",
                "However, usage can still occur so long as a file rc exists in the repository's    ",
                "root directory.                                                                   ",
                "    - The file must be named '.io'.                                               ",
                "    - Contents of '.io' must be JSON-Object Serialized ('{}').                    ",
                "    - The file must contain a project-id & and project-url.                       "
            ].join("\n") + "\n" + "\n"
        );

        /// Runtime.stdout.flush();

        Runtime.stdout.write(
            [
                " Example \".io\" Configuration                                                 ",
                "=============================                                                  ",
                "                                                                               ",
                "{                                                                              ",
                "    \"ID\": 241                                                                ",
                "    \"URL\": \"https://gitlab.example.com/group/target.git\"                   ",
                "}                                                                              ",
                "                                                                               "
            ].join("\n") + "\n"
        );

        /// Signal Exit via ENOENT Code
        /// --> https://man7.org/linux/man-pages/man3/errno.3.html
        /// Runtime.exit(3)

        Runtime.kill(process.pid, 3);
    }

    IO.Configuration = JSON.parse(String(FS.readFileSync(IO.Path)));

    console.debug("[DEBUG] Configuration" + ":", IO.Configuration);

    const Expression = /^(https|git)(:\/\/|@)([^\/:]+)[\/:]([^\/:]+)\/(.+).git$/gm;

    const Container = {
        uri: null,
        protocol: null,
        separator: null,
        hostname: null,
        directory: null,
        target: null,
        iterator: [
            "uri",
            "protocol",
            "separator",
            "hostname",
            "directory",
            "target"
        ]
    };

    let match;
    while ((match = Expression.exec(IO.Configuration.URL)) !== null) {
        // Avoid Infinite Runtime(s) from Zero-Width Matches
        if (match.index === Expression.lastIndex) Expression.lastIndex++;

        match.forEach((string, group) => {
            Container[Container.iterator[group]] = string;
        });
    }

    const Payload = Query.stringify({
        key: Key,
        value: Value
    });

    const Options = {
        host: Container.hostname,
        port: 443,
        path: "/api/v4/projects/" + IO.Configuration.ID + "/variables",
        method: "POST",
        agent: Agent,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Content-Length": Payload.length,
            "PRIVATE-TOKEN": Token
        }
    };

    const Request = HTTP.request({...Options}, async (response) => {
        let $;

        response.on("data", (_) => $ += _);

        response.on("end", (_) => {
            if (!response.complete) console.error(
                "[ERROR] Connection Exited Prior to Validating Response"
            );

            const Buffer = $.replace(String(_), "");

            Runtime.stdout.write("\n");
            Runtime.stdout.write(Buffer + "\n");
            Runtime.stdout.write("\n");
        });

        response.on("error", (_) => {
            console.error("[ERROR] Response", _);
        });
    });

    Request.on("error", (_) => {
        console.error("[ERROR] Request", _);
    });

    Request.write(Payload);
    Request.end();

} else {
    /// ... Under Development
}
