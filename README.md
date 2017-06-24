# react-native-workshop

This project is for demo purpose only. It provides: 
- Best practices structure to setup React Native app
- Theme system with [react-native-mdcore](https://github.com/henrytao-me/react-native-mdcore)
- Useful npm scripts
- OTA update with codepush 
- Persist model to store with [redux-persist-model](https://github.com/henrytao-me/redux-persist-model)


## How to run this project? 

1. Setup `react-native` project with Native Code here [[Getting Started]](http://facebook.github.io/react-native/docs/getting-started.html).
2. Run `npm install`.
3. For Android, open project on Android Studio and sync project. Make sure all dependencies are resolved correctly. 
4. For iOS, make sure Xcode and Simulator are ready. 
5. Open terminal 1, run `npm start`.
6. Open terminla 2, run `react-native run-android` (for Android) or `react-native run-ios` (for iOS).
7. Enjoy.


## Where are demo apps? 

1. For Android, download here [RNAirbnb.apk](docs/rnairbnb.apk).
2. For iOS, build your own (Sorry).


## How does the demo look like? 

![RNAirbnb Screenshot](docs/rnairbnb.jpg)


## Usages

### About app version

- For Android, `version_name` and `version_code` are updated dynamically based on `version` in `package.json`. There are gradle tasks in [./android/app/build.gradle](android/app/build.gradle) and [./android/app/versioning.gradle](android/app/versioning.gradle) that are highly recommmended to take a look. 
- For iOS, they are currently set as static values in project properties. 

### About app data

- App data is serving on [https://jsonstub.com](https://jsonstub.com)
- Change JSONSTUB credentials as your preference at [./src/modules/ApiModule/HttpService.js](src/modules/ApiModule/HttpService.js)

### Create release builds 

- For Android, run `npm run assembleRelease` and get the apk at `./android/app/build/outputs/apk/app-release.apk`
- For iOS, check out react-native document [[Running On Device]](http://facebook.github.io/react-native/docs/running-on-device.html)

### Running your own CodePush

- Current CodePush key is `7sD-01j0oMP9f_9I4JfOszN1CqYe6619df66-73b7-426b-96e9-0474ec5306c8`.
- Find and change CodePush key as your preference. 
- CodePush works with following app version format `[major].[minor].[patch]`. Major, minor and patch must be numbers. Make sure you know what app version you are currently running before sending CodePush.
- Make some changes in the code. Ex: change some UIs. 
- Run `npm run patch`. It will create a patch in directory `./patch`.
- Run `npm run codePushSilent`. It will deploy your patch to CodePush server and push to client properly. Make sure CodePush version is correct in `package.json`. The script looks like this `code-push release RNAirbnb patch '<0.1.1' -d Production --mandatory --des '{\"mandatoryInstallMode\": 1}'`.
- Kill the app and re-open it to see updates. 
- There are many strategies to use CodePush. In this app, there is a really useful react native component that allow to handle many strategies. As you can see on `codePushSilent` npm script, it uses `description` parameter to inject configurations that are used later in [Downloader React Native Component](src/containers/downloader/index.js).

## Q&A

- Stateless function in Redux? => Works [./src/containers/explore/recommand/index.js].(src/containers/explore/recommand/index.js) and [./src/components/ActivityItemStateless.js](src/components/ActivityItemStateless.js).
- Performance in React Native? => Depending on how components are rendered and how their states are managed. Rule: split component as small as possible. 
- Integrate React Native with Three.js? => Should create native implementations and bridges for React Native.
- React Native VS NativeScript? => Can't compare.

## References

- http://facebook.github.io/react-native/docs/getting-started.html
- http://facebook.github.io/react-native/docs/running-on-device.html
- https://github.com/facebook/prop-types
- https://github.com/vhpoet/react-native-styling-cheat-sheet
- https://github.com/henrytao-me/react-native-mdcore
- https://github.com/henrytao-me/redux-persist-model
- http://redux.js.org/docs/recipes/
- https://reactnavigation.org/docs/intro/
- https://facebook.github.io/immutable-js/
- https://material.io/guidelines/material-design/introduction.html
- https://github.com/oblador/react-native-vector-icons
- https://github.com/rt2zz/redux-persist
- https://github.com/wildlifela/redux-persist-migrate
- https://jsonstub.com
- http://frontendinsights.com/stateless-functional-components/
- https://expo.io/


## License

    Copyright 2017 "Henry Tao <hi@henrytao.me>"

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.