#!/bin/sh
case $1 in
    "lib")
        cd scraperlib
        rm -rf build
        echo "\e[1;34mBuilding the scraperlib library... "
        tsc
        cd ..
    ;;
    "extension")
        echo "\e[1;34mRemoving previous build if any... "
        rm -rf build
        cd smartprivacyassistant
        echo "\e[1;34mLoading scraperlib in the project... "
        yarn add ../scraperlib/
        echo "\e[1;34mInstalling all extension dependencies... "
        yarn install
        echo "\e[1;34mDeveloping build for the extension... "
        yarn build-complete
        echo "\e[1;34mMoving build to root folder... "
        mv build ..
        cd ..
    ;;
    "short")
        echo "\e[1;34mRemoving previous build if any... "
        rm -rf build
        cd smartprivacyassistant
        echo "\e[1;34mDeveloping build for the extension... "
        yarn build-complete
        echo "\e[1;34mMoving build to root folder... "
        mv build ..
        cd ..
    ;;
    *)
        cd scraperlib
        rm -rf build
        echo "\e[1;34mBuilding the scraperlib library... "
        tsc
        cd ..
        echo "\e[1;34mRemoving previous build if any... "
        rm -rf build
        cd smartprivacyassistant
        echo "\e[1;34mLoading scraperlib in the project... "
        yarn add ../scraperlib/
        echo "\e[1;34mLoading ml-xgboost in the project... "
        yarn add ../ml-xgboost/
        echo "\e[1;34mInstalling all extension dependencies... "
        yarn install
        echo "\e[1;34mDeveloping build for the extension... "
        yarn build-complete
        echo "\e[1;34mMoving build to root folder... "
        mv build ..
        cd ..
    ;;
esac
