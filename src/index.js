import "./index.scss";

import "core-js/modules/es.array.includes";
import "core-js/modules/es.array.fill";
import "core-js/modules/es.string.includes";
import "core-js/modules/es.string.trim";
import "core-js/modules/es.object.values";

import React, {
    Suspense,
    lazy as Import
} from "react";

import ReactDOM from "react-dom";

import { default as Skeleton } from "./Page-Loader";

import * as Worker from "./Worker";

import Production, { default as Development } from "./Globals";

import {
    BrowserRouter as Navigator,
    HashRouter as Router
} from "react-router-dom";

(process.env.NODE_ENV !== "production") ? Development(): Production();

const Application = Import(() => {
    return import("./Application").then((SPA) => SPA);
});

const DOM = () => {
    return (
        <Navigator forceRefresh={ false }>
            <Router>
                <Suspense fallback={ (<Skeleton />) }>
                    <Application />
                </Suspense>
            </Router>
        </Navigator>
    );
}

ReactDOM.render(
    (<DOM/>), document.getElementById(
        "Application"
    )
);

 (process.env.ENVIRONMENT === "Production") ? Worker.register()
     : Worker.unregister();

// const cache = new InMemoryCache();
// import {
//     ApolloProvider,
//     ApolloClient,
//     InMemoryCache
// } from "@apollo/client";
// const client = new ApolloClient({
//   cache: cache,
//   uri: "https://api.github.com/graphql",
//   headers: {
//     authorization: `Bearer ${
//       process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
//     }`,
//   },
// });

// ReactDOM.render(
//   <ApolloProvider client={client}>
//     <Router>
//       <Application />
//     </Router>
//   </ApolloProvider>,
//   document.getElementById("Application")
// );
