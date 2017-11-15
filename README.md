# Pepe Grillo App [![Build Status](https://travis-ci.org/TW-Playa-Chile/Grillo-App.svg?branch=master)](https://travis-ci.org/TW-Playa-Chile/Grillo-App)
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

### Instalación Android

Debes descargar la plataforma [android studio](https://developer.android.com/studio/index.html), y luego instalarla en tu computadora. Luego de instalarla, debes correr el siguiente comando (Mac OS)

```bash
$ cd Grillo-App
$ export SDK_PATH=$HOME/Library/Android/sdk/tools/bin
$ cat android/sdk-dependencies.txt | while read f; do $SDK_PATH/sdkmanager $f; done
```

## Desarrollo

#### Comenzar servidor local

```bash
$ npm start
```

#### iOS

Ejecutar este comando para inicializar la app en el simulador de iOS

```bash
$ npm run ios
```

#### Android (5.0+)

Correndo el código en un aparato conectado por usb

```bash
$ npm run android
```

Correndo el código en un emulador

```bash
# crea el emulador
$ $SDK_PATH/avdmanager create avd -n test -k "system-images;android-25;google_apis;x86"
# correndo el emulador
$ $SDK_PATH/emulator @test
```
 

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
