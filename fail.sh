#/usr/bin/env zsh

frida -l ./test-frida/inject.js --runtime v8 --debug -f './test-app/Build/Products/Debug/test.app/Contents/MacOS/test'
