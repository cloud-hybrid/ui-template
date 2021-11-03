import { Application } from "./../../index.js";

import { Library } from "@cloud-technology/api-library";

const Controller = Library.Router();

import { Generator } from "./../../utilities/configuration.js";

import { default as GitHub } from "./github/index.js";

Application.routes.push("/api/v1/schema");
Controller.route("test");
Controller.get("/", async (request, response) => {
    const $ = Generator(request);
    const Body = $.toJSON();

    /// HTTP(s) Response
    response.type($.Configuration.Type);
    response.status($.Configuration.Status);
    response.contentType($.Configuration.Type);
    response.statusMessage = $.Configuration.Message;

    response.shouldKeepAlive = $.Configuration["Keep-Alive"];

    response.send(Body);
});

Application.routes.push("/api/v1/schema/github");
Controller.get("/github", async (request, response) => {
    const $ = Generator(request);
    const Body = $.toJSON();

    /// HTTP(s) Response
    response.type($.Configuration.Type);
    response.status($.Configuration.Status);
    response.contentType($.Configuration.Type);
    response.statusMessage = $.Configuration.Message;

    response.shouldKeepAlive = $.Configuration["Keep-Alive"];

    response.send(Body);
});

Application.routes.push("/api/v1/schema/gitlab");
Controller.get("/gitlab", async (request, response) => {
    const $ = Generator(request);
    const Body = $.toJSON();

    /// HTTP(s) Response
    response.type($.Configuration.Type);
    response.status($.Configuration.Status);
    response.contentType($.Configuration.Type);
    response.statusMessage = $.Configuration.Message;

    response.shouldKeepAlive = $.Configuration["Keep-Alive"];

    response.send(Body);
});

Application.routes.push("/api/v1/schema/github/organization");
Controller.get("/github/organization", async (request, response) => {
    const Query = await GitHub.Organization();

    const $ = Generator(request, Query["data"]);
    const Body = $.toJSON();

    /// HTTP(s) Response
    response.type($.Configuration.Type);
    response.status($.Configuration.Status);
    response.contentType($.Configuration.Type);
    response.statusMessage = $.Configuration.Message;

    response.shouldKeepAlive = $.Configuration["Keep-Alive"];

    response.send(Body);
});

export default Controller;
