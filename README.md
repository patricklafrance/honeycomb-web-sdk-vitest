# honeycomb-web-sdk-vitest

To reproduce the error, open a console at the root of the workspace and execute the following command:

```bash
pnpm test
```

You should get the following error:

```
SyntaxError: Named export 'computeStackTrace' not found. The requested module 'tracekit' is a CommonJS module, which may not support all module.exports as named exports.
CommonJS modules can always be imported via the default export, for example using:

import pkg from 'tracekit';
const { computeStackTrace } = pkg;
```
