"use static";

export const Load = async () => {
    document.documentElement.classList.remove("no-js");
    document.documentElement.classList.add("js");
    document.documentElement.id = "NEXus-IO-Document-Element";

    if (location.protocol !== "https:") {
        if ("serviceWorker" in navigator) {
            window.addEventListener("load", () => {
                navigator.serviceWorker.register("Worker.js");
            });
        }
    }

    console.debug("[DEBUG] HTML.Head.load()", true);
};

export default new Promise(async () => await Load());
