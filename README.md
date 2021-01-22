# What is Waldtraud.js?

Waltraud.js is planned to become a small collection of utility classes and functions for Node.js to exctract information from OGC Web Map Service (WMS) and Map Feature Service (WFS) capabilities documents, and perhaps a bit more in the farther away future.

It is currently used as a dependency in our Node-RED CKAN extension (not available on GitHub yet), and at least for the near future, the implemented functionality will probably remain limited to the requirements of that project. Nevertheless, we decided to put it into a separate package since we can imagine many other use cases.

Waltraud.js is written in TypeScript.


## How to build Waltraud.js

The waltraud.js package already contains compiled JavaScript files, ready for use. If you change the TypeScript source files, you need to compile them again. This is done with the following commands:

1. Install npm dependencies:

```npm install```

2. Run the TypeScript compiler:

```tsc```