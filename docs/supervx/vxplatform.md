---
id: vxplatform
title: VxPlatform
---

> VelocityX gives you <b>VxPlatform</b> that makes it easy to override different platforms widgets with a single widget. Super useful if you want to have a widget which looks different on Android, iOS and web. Like material on android, cupertino on iOS and custom on web.

:::note
Use VxPlatform only if you want to have different widgets for different platforms.
:::

## Using VxPlatform

> Extend any widget using VxPlatform<A,I,W>

**Example:**

```dart



class PlatformBar
    extends VxPlatform<AppBar, CupertinoNavigationBar, BottomAppBar> {
  @override
  AppBar createAndroidWidget(BuildContext context) {
    return AppBar(
      title: "Hello World".text.make(),
    );
  }

  @override
  CupertinoNavigationBar createIosWidget(BuildContext context) {
    return CupertinoNavigationBar(
      leading: "Hello World".text.make(),
    );
  }

  @override
  BottomAppBar createWebWidget(BuildContext context) {
    return BottomAppBar(
      child: BottomNavigationBar(
        items: [
          const BottomNavigationBarItem(
            label: "Chat",
            icon: Icon(Icons.chat),
          ),
          const BottomNavigationBarItem(
            label: "History",
            icon: Icon(Icons.history),
          )
        ],
      ),
    );
  }
}

```
