# cell-dna

You should be familiar with http://node-organic.com/ if you want to use this DNA loader.

This specific DNA loader assuming you're having a `dna` folder outside of `node_modules`. It may have the following structure:

```
dna
├── default.js
├── development.js
├── secrets.js
├── staging.js
└── test.js
```

In order to load specific DNA be sure to start your process with corresponding NODE_ENV. `development` is default DNA. Example usage:

```
$ NODE_ENV=staging node index.js // starts your process by using development.js DNA
$ NODE_ENV=test node index.js // starts your process by using staging.js DNA
```

Be sure to check out https://github.com/lorenwest/node-config/wiki/Configuration-Files to better understand how to organize your cell DNA folder 
