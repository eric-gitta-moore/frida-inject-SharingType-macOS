setTimeout(() => {
  const allWindow = ObjC.chooseSync(ObjC.classes.NSWindow);

  console.log(
    "prev:",
    JSON.stringify(allWindow.map((e) => e.sharingType().toString()))
  );

  allWindow.forEach((window) => {
    // Process terminated
    window.setSharingType_(1);
  });

  console.log(
    "after:",
    JSON.stringify(allWindow.map((e) => e.sharingType().toString()))
  );
}, 3000);
