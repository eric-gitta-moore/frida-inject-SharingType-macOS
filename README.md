# frida-inject-SharingType-macOS
frida dynamic inject SharingType to macOS App

> External dynamic modification of `NSWindow.SharingType` causes the program to exit incorrectly.
> 
> So what way can be better solved. I want to modify this field of the electron program from an external injection.

step 0:
install frida with python
```sh
bash ./prepare-env.sh
```

step 1:
xcode open the [test-app](./test-app)

step 2:
click xcode menu "product" -> "build"

step 3:
find the build file, named `test-app.app`

step 4:
Change the path in the fail.sh file to your own path.

e.g. `./test-app/Build/Products/Debug/test.app/Contents/MacOS/test` to `/Users/bytedance/Library/Developer/Xcode/DerivedData/test-djwvtaojcybbnibrvrnvzdltexcf/Build/Products/Debug/test.app/Contents/MacOS/test`

step 5:
```sh
chmod +x fail.sh
chmox +x success.sh
```

step 6:
```sh
./fail.sh
```
Theoretically failed.

step 7:
```sh
./success.sh
```
In theory it will work.