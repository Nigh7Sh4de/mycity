# Onboarding

Welcome!! ![Party time](https://cultofthepartyparrot.com/parrots/hd/parrot.gif)

## Install a bunch of stuff:

- Code editor (I use VS Code)
- Git
- NPM (with NodeJS - stable)
- Yarn (`npm i -g yarn`)
- Android Studio
  - SDK Tools
  - SDK Platform-tools
  - Virtualization (Intel HAXM)
  - Emulator
  - Platform (latest, with Google **Play** system image)
- Java **16** (jdk and jre)

## Environment Variables

|              |                                                |
| ------------ | ---------------------------------------------- |
| ANDROID_HOME | %LOCALAPPDATA%\Android\Sdk                     |
| PATH         | ..., %LOCALAPPDATA%\Android\Sdk\platform-tools |

## Finishing up

- Create a Android Virtual Device with a Google **Play** system image (if you don't already have one)
- Run `yarn` after to install dependencies
- Run `yarn android` to build and run

## Gotchas

- Versions of Java, Gradle, react-native-cli, and react-native must be compatible. Check [Gradle compatability matrix](https://docs.gradle.org/current/userguide/compatibility.html) first to determine the highest possible Java version you can use, if your installed version is outside the compatiblity matrix, you'll need to replace it. Find a [Gradle distribution](https://services.gradle.org/distributions/) that supports your installed Java version. Update _MyCity\android\gradle\wrapper\gradle-wrapper.properties_ `distributionUrl` to be whatever `-all.zip` version you need. If you encounter any errors that are a result of react-native-cli not supporting you chosen Gradle version, roll down until these errors cease.
