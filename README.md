# Portfolio

[![logo]][website]

[logo]: https://www.rzille.de/img/og_image.png
[website]: https://www.rzille.de

My portfolio website created with TypeScript, Vue 3 and Bulma. The project includes Firebase functions for saving contact requests to a realtime database and sending Emails with basic spam protection. Scripts for continuous deployments to Firebase Hosting are included under `.github/workflows`.

## Used libraries

| Project      | Status                                     |
| ------------ | ------------------------------------------ |
| [typescript] | [![typescript-status]][typescript-package] |
| [vue]        | [![vue-status]][vue-package]               |
| [bulma]      | [![bulma-status]][bulma-package]           |
| [firebase]   |                                            |

[typescript]: https://github.com/microsoft/TypeScript
[vue]: https://github.com/vuejs/vue-next
[bulma]: https://github.com/jgthms/bulma
[firebase]: https://github.com/firebase
[typescript-status]: https://img.shields.io/npm/v/typescript.svg
[vue-status]: https://img.shields.io/npm/v/vue.svg
[bulma-status]: https://img.shields.io/npm/v/bulma.svg
[typescript-package]: https://www.npmjs.com/package/typescript
[vue-package]: https://www.npmjs.com/package/vue
[bulma-package]: https://www.npmjs.com/package/bulma

## Frontend project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Firebase Functions project setup

```
cd functions
npm install
```

### Compiles and starts debug server for development

```
npm run serve
```

### Compiles for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Deploys to Firebase

```
npm run deploy
```
