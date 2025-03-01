const AppDelegate = ObjC.classes.AppDelegate;

const applicationDidFinishLaunching =
  AppDelegate["- applicationDidFinishLaunching:"];

Interceptor.attach(applicationDidFinishLaunching.implementation, {
  onEnter: function (args) {
    console.log("[*] applicationDidFinishLaunching: is called!");

    const self = new ObjC.Object(args[0]);
    const window = self.window();
    console.log("[*] sharingType:", window.sharingType().toString());
    
    // succeed
    const res = window?.setSharingType_(0); // NSWindowSharingNone = 0
    console.log("[*] applicationDidFinishLaunching: returns:", res);
    console.log("[*] sharingType:", window.sharingType().toString());
  },
  onLeave: function (retval) {
    console.log("[*] applicationDidFinishLaunching: returns:", retval);
  },
});
