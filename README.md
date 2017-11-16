# VueJS playground

> Toying around with VueJS

When pushing to the `master` branch, [Travis-CI](https://travis-ci.org/) will build the site and push it into the `gh-pages` branch.

## Getting started

The project is using `yarn`, but you're free to substitute it for `npm`.

First you need to install the package dependencies.
```bash
yarn install
```

Afterwards you can start the server. We use [`nodemon`](https://github.com/remy/nodemon) to track changes to your webpack config and restart the server on the fly.
The server will be availaible via `localhost:8000`.
```bash
yarn start
```

## Usage with `hotel`

Assuming [`hotel`](https://github.com/typicode/hotel/) is installed, use this command to access the site via `http://vuejsplay.dev`.

```bash
hotel add 'yarn start --port $PORT' --name vuejsplay --change-origin
```

## Production builds

To build a production version, use the following command. You'll fine the code in a newely created `dist/` directory.
```
yarn build
```

#### Misc
```bash
# build for production and view the bundle analyzer report
yarn build --report
```

#### Testing
```bash
# run unit tests
yarn unit

# run all tests
yarn test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
