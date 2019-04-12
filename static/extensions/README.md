# static/extensions

This folder contains chrome extensions that need to be manually installed because there is no package available on npm.
See https://electronjs.org/docs/tutorial/devtools-extension for how to get the files of an extension.

Once you copied the files of an extension here, make sure to add it to the extensions array in `src/main/initDevTools.js`.
