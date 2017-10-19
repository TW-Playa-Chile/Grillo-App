# Pepe Grillo App
> App para gestionar seguimiento de habitos

## Incluye

* [React](https://github.com/facebook/react) & [React Native](https://github.com/facebook/react-native)
* [React Navigation](https://github.com/react-community/react-navigation)
* [Redux](https://github.com/reactjs/redux) & [Remote Redux DevTools](https://github.com/zalmoxisus/remote-redux-devtools) & [On Debugger](https://github.com/jhen0409/remote-redux-devtools-on-debugger)
* [Immutable](https://github.com/facebook/immutable-js)
* [Babel](https://github.com/babel/babel) & Plugins: [transform-decorators-legacy](https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy)

## Instalación

Ver [documentación de React Native](https://facebook.github.io/react-native/docs/getting-started.html) para instalar las herramientas requeridas.

```bash
$ npm install -g react-native-cli
$ npm install
```

## Desarrollo

#### Comenzar servidor local

```bash
$ npm start
```

#### iOS

Correr este comando para inicializar la app en el simulador de iOS

```bash
$ npm run ios
```

#### Android (5.0+)

Abrir el emulador de Android (recomendamos [Genymotion](https://www.genymotion.com)) y correr el comando:

```bash
$ npm run android
```
(O conectar un aparato real por USB)
 

## DevTools

En modo desarrollo puedes instalar [React Native Debugger](https://github.com/jhen0409/react-native-debugger) como el debugger por efecto. También puedes usar [Remote Redux DevTools](https://github.com/zalmoxisus/remote-redux-devtools) y [RemoteDev RN Debugger](https://github.com/jhen0409/remotedev-rn-debugger).

Por ejemplo puedes abrir el debbuger con: 

```bash
open "rndebugger://set-debugger-loc?host=localhost&port=8081"
```

or 

```bash
npm run remotedev && rndebugger-open
```

## Limpiar Caches

```bash
watchman watch-del-all && rm -rf node_modules/ && yarn cache clean && yarn install && yarn start -- --reset-cache
```

## Test

```bash
$ npm test
```

