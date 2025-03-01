#!/usr/bin/env zsh

# frida -l main.js --runtime v8 --debug -f '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
frida -l main.js --runtime v8 --debug -f '/Users/bytedance/Library/Developer/Xcode/DerivedData/test-djwvtaojcybbnibrvrnvzdltexcf/Build/Products/Debug/test.app/Contents/MacOS/test'