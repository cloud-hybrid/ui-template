import { Library } from "@cloud-technology/api-library";

const Controller = Library.Router();

import { default as Organization } from "../../schemas/GitHub/Generator/Organization.js";
import { default as Projects } from "../../schemas/GitLab/Generator/Projects.js";

Controller.get("/", async (request, response) => {
    /// Debugging
    const Request = {
        Headers: request.headers,
        URL: {
            Base: request.baseUrl,
            Origin: request.originalUrl,
            Normalized: request.url
        }
    };

    /// Configuration
    const Configuration = {
        "Keep-Alive": false
    };

    /// Body Composition
    const Body = {
        Status: "Online"
    };

    /// Response
    const Response = {
        Status: 200,
        Message: "Online",
        Type: "Application/JSON",
        Body: Body
    };

    /// Server-Side Logging
    process.stdout.write(
        JSON.stringify({
            Request, Response
        }, null, 4) + "\n" + "\n"
    );

    /// HTTP(s) Response
    response.type(Response.Type);
    response.status(Response.Status);
    response.contentType(Response.Type);
    response.statusMessage = Response.Message;

    response.shouldKeepAlive = Configuration["Keep-Alive"];

    response.send(JSON.stringify({
        Response, Request
    }, null, 4));
});

Controller.get("/github/organization", async (request, response) => {
    /// Body Composition
    const Body = {
        ... await Organization(),
        ... { Projects: await Projects() }
    };

    const $ = JSON.stringify(JSON.parse(await Projects()), null, 4);

    /// HTTP(s) Response
    response.type("Application/JSON");
    response.status(200);
    response.contentType("Application/JSON");
    response.statusMessage = "Successful";

    response.shouldKeepAlive = false;

    response.send($);
});

export default Controller;
