import * as Process from "process";

/// --> Common-JS := const webdriver = require("selenium-webdriver");
/// --> Common-JS := const chrome = require("selenium-webdriver/chrome");
/// --> Common-JS := const firefox = require("selenium-webdriver/firefox");

import * as Driver from "selenium-webdriver";

// import { Driver as Firefox } from "selenium-webdriver/firefox.js";
// import { Driver as Chrome } from "selenium-webdriver/chrome.js";
// import { Driver as Safari } from "selenium-webdriver/safari.js";
// import { Driver as Edge } from "selenium-webdriver/edge.js";

const Configuration = {
    Chrome: () => Driver.Capabilities.chrome(),
    Edge: () => Driver.Capabilities.edge(),
    Firefox: () => Driver.Capabilities.firefox(),
    Safari: () => Driver.Capabilities.safari()
};

const Capabilities = Configuration.Chrome();

Capabilities.setPageLoadStrategy("normal");

const Waiter = async (time, instance) => {
    await new Promise(($) => setTimeout($, time));
    return instance;
}

/***
 *
 * @param Instance { Driver }
 *
 * @constructor
 *
 */

const Login = async (Instance, reject) => {
    const Query = Driver.By;                // --> Alias to require("selenium-webdriver").Driver.By
    const Key = Driver.Key;                 // --> Alias to require("selenium-webdriver").Driver.Key
    const Awaitable = Driver.until;         // --> Alias to require("selenium-webdriver").Driver.until

    const submitButton = await Instance.findElement(Query.id("btn-sign-in"));

    const usernameField = await Instance.findElement(Query.id("input-username"));
    await usernameField.clear();
    await usernameField.sendKeys("Administrator", Key.RETURN);

    await Waiter(2500, null);

    await submitButton.click();

    await Waiter(2500, null);

    const passwordField = await Instance.findElement(Query.id("input-password"));

    await passwordField.sendKeys("Kn0wledge!", Key.RETURN);

    await Waiter(2500, null);

    await submitButton.click();

    try {
        const Conditional = await Awaitable.titleContains("Dashboard");

        await Instance.wait(Conditional, 10000);
    } catch (e) {
        reject(e);
    } finally {
        console.debug("[Debug]", "Login Event Closure");
    }
}

const Container = [];

const Main = async () => {
    let iterator;

    const Arguments = Process.argv.splice(2).map((Element) => Element.toLowerCase());

    const $ = Arguments.indexOf("--sessions");

    if ($ === -1) iterator = 0;
    else {
        const target = Arguments[$ + 1];

        iterator = Number(target);
    }

    console.log("[Debug] Target Sessions", "\n", "" + "➜", iterator, "Total", "\n");

    const Target = (proto, host, port) => proto + "://" + host + ":" + String(port);
    const URI = Target("http", "localhost", 9515);

    for (let i = 0; i < iterator; i++) {
        console.debug("[Debug] Instantiating Browser Session", "(" + String(i) + ")", "...");

        //
        // Although seemingly genius to place the await call inside of the Awaitable Promise, such will result in
        // inconsistent race condition when establishing a new browser window.
        //
        // Performing a nested await results in destruction of the chromedriver server, SIGNAL 6.
        // ... I believe that's a bug on Google's side.
        //

        const Instance = await new Driver.Builder().withCapabilities(Capabilities).usingServer(URI).forBrowser("chrome").build();

        const Awaitable = new Promise(async (resolve, reject) => {
            // --> Does not work consistently :== await Instance;

            const Query = Driver.By;                // --> Alias to require("selenium-webdriver").Driver.By
            const Key = Driver.Key;                 // --> Alias to require("selenium-webdriver").Driver.Key
            const Awaitable = Driver.until;         // --> Alias to require("selenium-webdriver").Driver.until

            await Instance.get("https://localhost:3000/sign-in");

            await Login(Instance, reject);

            try {
                // const Conditional = Awaitable.titleIs("Selenium Documentation - Google Search");

                // await Instance.wait(Conditional, 1000);

                // --> 5 Minute Waiter
                resolve(Waiter(1000, Instance));
            } catch (e) {
                reject(async () => await Instance.quit());
            }
        });

        console.debug("[Debug]", "  ↳", "Successful");

        console.debug("[Debug] Placing Instance in Queue ...");

        Container.push(Awaitable);

        console.debug("[Debug]", "  ↳", "Successful", "\n");
    }

    const Data = {
        Successful: 0,
        Failure: 0
    };

    Promise.allSettled(Container).then((Promises) => {
        console.debug("[Debug]", "Destroying Session(s) ...");

        Promises.forEach(
            async ($, index) => {
                console.debug("[Debug]", "Evaluating Browser Session", "(" + String(index) + ")", "...");

                switch ($.status) {
                    case "fulfilled": {
                        Data.Successful += 1;
                        console.debug("[Debug]", "  ↳", "Successful", "\n");
                        await $.value.quit();

                        break;
                    }
                    case "rejected": {
                        Data.Failure += 1;
                        console.warn("[Warning]", " ↳", "Failure", "\n");

                        break;
                    }
                }
            }
        );

        console.log("Results: " + JSON.stringify(Data, null, 4));

    });
}; await Main();
