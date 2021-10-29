# [UI-Template] #

The Cloud Dashboard & User Interface for *Cloud-Technology LLC.*

[[_TOC_]]

## Overview ##

- [ ] Update to `react-dom-router` Beta
- [ ] Implement POC for [`defaultProps` JSX](https://reactjs.org/docs/typechecking-with-proptypes.html)
    - Update Documentation to Reflect Understanding
- [ ] Install & Document [`react-devtools-core`](https://github.com/facebook/react/tree/main/packages/react-devtools)
    - https://www.npmjs.com/package/react-devtools-core
- [ ] Review & Document an Applicable use-case for a Merged, Shallow `useState` (Probably Login)
    - https://reactjs.org/docs/state-and-lifecycle.html#using-state-correctly
- [ ] Review & Document POC for [`react-dom-router@^6.x`](https://github.com/remix-run/react-router/tree/dev/examples)
    - [ ] [Warn-Up](https://replit.com/@RemixRun/React-Router-v6-Tutorial-Completed)
    - [ ] [General Usage](https://github.com/remix-run/react-router/tree/main/examples/basic)
    - [ ] [Lazy Loading](https://github.com/remix-run/react-router/blob/dev/examples/lazy-loading/src/App.tsx)
    - [ ] [Authorization via `useNavigate` & `<Navigate/>`](https://github.com/remix-run/react-router/tree/main/examples/auth/src)
    - [ ] [Cross-Path Stateful Modal](https://github.com/remix-run/react-router/tree/main/examples/modal/src)
    - [ ] [Multi-Application](https://github.com/remix-run/react-router/tree/main/examples/multi-app)
    - [ ] [Optimizations](https://github.com/ReactTraining/react-workshop/tree/main/courses/electives/performance-optimizations/lecture)
    - [ ] [Imperative Programming](https://github.com/ReactTraining/react-workshop/tree/main/courses/advanced-hooks/02-imperative-react)
    - [ ] [Advanced `useEffects`](https://github.com/ReactTraining/react-workshop/tree/main/courses/advanced-hooks/01-effects)
    - [ ] [Understand `children/render`](https://reactrouter.com/web/api/Route/children-func)

Cloud-Technology's Dashboard is a set of user-friendly utilities that interface RESTful HTTP endpoints & related database CRUD actions. The User-Interface is
consistent in visibility, styling, but above all else, ***functionality***.

As a *Single-Page-Application* (*SPA*), the client-sided front-end can remain functional so long as the API & dependent endpoints remain online -- largely a
benefit from micro-serviced architecture(s).

### Code Splitting ###

The following project makes use of [code-splitting](https://reactjs.org/docs/code-splitting.html#route-based-code-splitting).

Combined with `react-dom-router`, project(s) benefit from both code-spliting *and*
development ease when establishing **page transitions**.

**Example**

```js
import React, { Suspense, lazy }                  from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Home  = lazy(() => import("./routes/Home"));
const About = lazy(() => import("./routes/About"));

const App = () => (
    <Router>
        <Suspense fallback={ <div>Loading...</div> }>
            <Switch>
                <Route exact path="/" component={ Home }/>
                <Route path="/about" component={ About }/>
            </Switch>
        </Suspense>
    </Router>
);
```

## Usage ##

### Setup & Installation ###

```bash
npm run setup
```

### Development ###

```bash
npm run start
```

### CI-CD ###

<details>

<summary>
    <strong>
        Runbook
    </strong>
</summary>

---

#### Build ####

<details>

<summary>
    <strong>
        Production
    </strong>
</summary>

<br/>

```bash
source .env.production || true

cat << EOF > .env
PORT="${PORT:-8443}"
HTTPS="${HTTPS:-false}"
HOST="${HOST:-0.0.0.0}"

FAST_REFRESH="${FAST_REFRESH:-false}"

NODE_ENV="${NODE_ENV:-production}"
BABEL_ENV="${BABEL_ENV:-production}"

BROWSERSLIST_DISABLE_CACHE="${BROWSERSLIST_DISABLE_CACHE:-true}"
BROWSERSLIST_CONFIG="${BROWSERSLIST_CONFIG:="configuration/.browserlistrc"}"

SCROLL_TRACKING="${SCROLL_TRACKING:-false}"
GENERATE_SOURCEMAP="${GENERATE_SOURCEMAP:-true}"
INLINE_RUNTIME_CHUNK="${INLINE_RUNTIME_CHUNK:-true}"
ESLINT_NO_DEV_ERRORS="${ESLINT_NO_DEV_ERRORS:-true}"
DISABLE_ESLINT_PLUGIN="${DISABLE_ESLINT_PLUGIN:-true}"

SASS_PATH="${SASS_PATH:-node_modules:src}"

SSL_CRT_FILE="${SSL_CRT_FILE}"
SSL_KEY_FILE="${SSL_KEY_FILE}"

ENVIRONMENT="${ENVIRONMENT:-Production}"

REACT_APP_API="${REACT_APP_API}"
REACT_APP_API_ENDPOINT="${REACT_APP_API_ENDPOINT}"
REACT_APP_WS_ENDPOINT="${REACT_APP_WS_ENDPOINT}"
EOF

npm run build --production
```

</details>

#### Archive ####

<details>

<summary>
    <strong>
        Registry
    </strong>
</summary>

<br/>

```bash
export VERSION="$(printf "%s" "$(cat VERSION)")"

export BASE="${CI_REGISTRY_IMAGE}/${CONTAINER}"
export TARGET="${BASE}/${VERSION}"
export LATEST="${TARGET}:latest"

docker build --no-cache --tag "${TARGET}" --tag "${LATEST}" .
docker login -u "${CI_REGISTRY_USER}" -p "${CI_REGISTRY_PASSWORD}" "${CI_REGISTRY}"
docker push "${TARGET}" && docker push "${LATEST}"
```

</details>

#### Distribution ####

<details>

<summary>
    <strong>
        ECR
    </strong>
</summary>

<br/>

```bash
export VERSION="$(printf "%s" "$(cat VERSION)")"

export AWS_ACCESS_KEY_ID="${AWS_ACCESS_KEY_ID}"
export AWS_SECRET_ACCESS_KEY="${AWS_SECRET_ACCESS_KEY}"

export BASE="${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com/${CONTAINER}"
export TARGET="${BASE}:${VERSION}"
export LATEST="${BASE}:latest"

docker build --no-cache --tag "${TARGET}" --tag "${LATEST}" .

export URL="${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com"
export PASSWORD="$(aws ecr get-login-password --region ${AWS_DEFAULT_REGION})"

aws ecr create-repository --repository-name "${CONTAINER}" --region "${AWS_DEFAULT_REGION}" || true
printf "%s\n" "${PASSWORD}" | docker login "${URL}" --username AWS --password-stdin

docker push "${TARGET}" && docker push "${LATEST}"
```

</details>

#### Deployment ####

<details>

<summary>
    <strong>
        Stack
    </strong>
</summary>

<br/>

```bash
aws cloudformation create-stack --stack-name "${STACK}" \
    --template-body "file://Stack.Yaml"

# --> Update

aws cloudformation update-stack --stack-name "${STACK}" \
    --template-body "file://Stack.Yaml"

# --> Waiter(s)

aws cloudformation wait stack-create-complete \
    --stack-name "${STACK}" || true

aws cloudformation wait stack-delete-complete \
    --stack-name "${STACK}" || true

aws cloudformation wait stack-exists \
    --stack-name "${STACK}" || true

aws cloudformation wait stack-import-complete \
    --stack-name "${STACK}" || true

aws cloudformation wait stack-rollback-complete \
    --stack-name "${STACK}" || true

aws cloudformation wait stack-update-complete \
    --stack-name "${STACK}" || true
```

</details>

</details>

## Environment Variables ##

The included `.env.local` file + pre-configured TLS `*.key`, `*.conf`,
`*.crt`, & `*.pfx` located in [configuration](./configuration) should be enough to begin local development. If the default development TLS file(s) need to be
changed, the password for `Development.pfx` is `Development`.

Please refer to the following table when creating distributions & deploying assets:

|             Key           |         Value          |  Description  |
|:-------------------------:|:----------------------:|:-------------:|
| `PORT`                    | **_8443_**             | [Description] |
| `HTTPS`                   | **_false_**            | [Description] |
| `HOST`                    | **_0.0.0.0_**          | [Description] |
| `FAST_REFRESH`            | **_false_**            | [Description] |
| `NODE_ENV`                | **_production_**       | [Description] |
| `BABEL_ENV`               | **_production_**       | [Description] |
| `SCROLL_TRACKING`         | **_false_**            | [Description] |
| `GENERATE_SOURCEMAP`      | **_true_**             | [Description] |
| `INLINE_RUNTIME_CHUNK`    | **_true_**             | [Description] |
| `ESLINT_NO_DEV_ERRORS`    | **_true_**             | [Description] |
| `DISABLE_ESLINT_PLUGIN`   | **_true_**             | [Description] |
| `SASS_PATH`               | **_node_modules:src_** | [Description] |
| `SSL_CRT_FILE`            |  _N/A_                 | [Description] |
| `SSL_KEY_FILE`            |  _N/A_                 | [Description] |
| `ENVIRONMENT`             | **_Production_**       | [Description] |

Anything listed as a value of `...` is a ***soft dependency*** -- meaning that in order to achieve a full working state, the value(s) should exist and any
associated resource(s)
created ahead of time. However, the application will continue to resolve requests regardless of such dependents in order to avoid *chicken-or-egg* problems.

These values for production should be established in a `.env.production` file during the CI-CD build process, and finally, in a `.env` during the distribution.

### TLS Development Key(s) ###

<details>

<summary>
    <strong>
        OpenSSL CLI Instructions
    </strong>
</summary>

<br/>

```bash
#!/bin/bash --posix

#
# A CSR or Certificate Signing request is a block of encoded text that is given to a Certificate Authority
# when applying for an SSL Certificate. It is usually generated on the server where the certificate will be
# installed and contains information that will be included in the certificate such as the organization name,
# common name (domain name), locality, and country. It also contains the public key that will be included in
# the certificate. A private key is usually created at the same time that you create the CSR, making a key pair.
#
# CSRs are generally encoded using ASN.1 according to the PKCS #10 specification.
#

# ... export SUB="/C=US/ST=MN/O=Cloud Technology LLC./CN=localhost/subjectAltName=DNS:*.nexus.cloud-technology.io,DNS:nexus.cloud-technology.io,localhost,0.0.0.0"
# ...
# ... openssl req -x509 -newkey rsa:8192 -nodes -sha256   \
# ...     -days 365 -passin "pass:Development"            \
# ...         -subj "${SUB}" -keyout Development.key      \
# ...             -out Development.pem

# --> Debian & Ubuntu
# ... sudo apt install libnss3-tools --yes

# --> OS Agnostic
cat << "EOF" | tee Development.conf
[ req ]
prompt              = no
default_bits        = 2048
default_keyfile     = Development.pem
distinguished_name  = subject
req_extensions      = req_ext
x509_extensions     = x509_ext
string_mask         = utf8only

# RFC 4514, RFC 4519

[ subject ]
countryName              = US
stateOrProvinceName      = MN
localityName             = Minneapolis
organizationName         = Localhost

# Friendly Name

commonName          = Development Certificate
emailAddress        = development@localhost.com

[ x509_ext ]

subjectKeyIdentifier        = hash
authorityKeyIdentifier      = keyid,issuer
basicConstraints        = CA:FALSE
keyUsage                = digitalSignature, keyEncipherment
subjectAltName          = @alternate_names
nsComment               = "OpenSSL Generated Certificate"

# RFC 5280, Section 4.2.1.12 makes EKU optional

[ req_ext ]

subjectKeyIdentifier        = hash

basicConstraints            = CA:FALSE
keyUsage                    = digitalSignature, keyEncipherment
subjectAltName              = @alternate_names
nsComment                   = "OpenSSL Generated Certificate"

# CA/Browser Baseline Requirements, Appendix (B)(3)(G)

[ alternate_names ]

DNS.1       = localhost
DNS.7       = 127.0.0.1

# IPv6 localhost
# DNS.8     = ::1
EOF

openssl req -config Development.conf -new -x509 -sha256 -newkey rsa:2048 -nodes \
    -days "1024" -keyout "Development.key" -out "Development.crt"

openssl pkcs12 -export -out "Development.pfx" -inkey "Development.key" -in "Development.crt"

# --> MacOS Only
# ... sudo security -v add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain Development.crt

# --> Debian & Ubuntu
# ... pk12util -d "sql:${HOME}/.pki/nssdb" -i Development.pfx
# ... certutil -d sql:$HOME/.pki/nssdb -A -t "P,," -n "Development Certificate" -i Development.crt

# Reference
#   - https://stackoverflow.com/questions/7580508/getting-chrome-to-accept-self-signed-localhost-certificate
```

</details>

## Type Hinting ##

**Prop-Types**

```js
import React     from 'react';
import PropTypes from 'prop-types';

class MyComponent extends React.Component {
    render() {
        // ... do things with the props
    }
}

MyComponent.propTypes = {
    // You can declare that a prop is a specific JS primitive. By default, these
    // are all optional.
    optionalArray:  PropTypes.array,
    optionalBool:   PropTypes.bool,
    optionalFunc:   PropTypes.func,
    optionalNumber: PropTypes.number,
    optionalObject: PropTypes.object,
    optionalString: PropTypes.string,
    optionalSymbol: PropTypes.symbol,

    // Anything that can be rendered: numbers, strings, elements or an array
    // (or fragment) containing these types.
    optionalNode: PropTypes.node,

    // A React element (ie. <MyComponent />).
    optionalElement: PropTypes.element,

    // A React element type (ie. MyComponent).
    optionalElementType: PropTypes.elementType,

    // You can also declare that a prop is an instance of a class. This uses
    // JS's instanceof operator.
    optionalMessage: PropTypes.instanceOf(Message),

    // You can ensure that your prop is limited to specific values by treating
    // it as an enum.
    optionalEnum: PropTypes.oneOf(['News', 'Photos']),

    // An object that could be one of many types
    optionalUnion: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.instanceOf(Message)
    ]),

    // An array of a certain type
    optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

    // An object with property values of a certain type
    optionalObjectOf: PropTypes.objectOf(PropTypes.number),

    // You can chain any of the above with `isRequired` to make sure a warning
    // is shown if the prop isn't provided.

    // An object taking on a particular shape
    optionalObjectWithShape: PropTypes.shape({
        optionalProperty: PropTypes.string,
        requiredProperty: PropTypes.number.isRequired
    }),

    // An object with warnings on extra properties
    optionalObjectWithStrictShape: PropTypes.exact({
        optionalProperty: PropTypes.string,
        requiredProperty: PropTypes.number.isRequired
    }),

    requiredFunc: PropTypes.func.isRequired,

    // A value of any data type
    requiredAny: PropTypes.any.isRequired,
};
```
