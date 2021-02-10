---
id: vxmutation
title: VxMutation
---

This is where the app's logic is written. Everything inside `perform` function is executed when you create an object of the class.

```dart
class Increment extends VxMutation<AppStore> {
  perform() => store.count++;
}
```

Execution can be async too. If you return a `Future` for `perform`, VxState will await that.

```dart
class ExportReport extends VxMutation<AppStore> {
  // This mutation will be notified to widgets
  // only after this is done.
  Future<void> perform() async {
    await MyFile().write(store.report);
  }
}
```

## Simple Chaining

To execute some other mutation after one is done you can use `next` call.

```dart
class ChangeAvatar extends VxMutation<AppStore> {
  perform() {
    final avatar = Image().crop();

    // This will be executed once ChangeAvatar is finished
    next(() => UploadAvatar(avatar));

    avatar.save();
  }
}
```

## Catching exceptions

If exceptions happen in `perform` they are caught and logged if app is in debug mode. To change the behaviour you can either override `onException` callback or create a custom `VxMutation` class with specific features such as reporting crash to third party service or showing a screen with crash details to the user etc.

```dart
class Divide extends VxMutation<AppStore> {
  perform() {
    store.count = store.count/store.factor;
  }

  onException(dynamic e, StackTrace s) {
    CrashReporting.report(e, s);
  }
}
```

## Listening

In your widget if you want to rebuild it after a mutation is executed call `listen` with list of mutations:

```dart
@override
Widget build(BuildContext context) {
  VxState.listen(context, to: [Increment]);

  return ...
}
```

If the same mutation happens multiple times in a very short span of time widgets will receive it only once. VxState just notifies that mutation has executed. Any data related to that should be stored and collected from the store.

This behaviour is similar to `setState` where you can call it multiple times but it will trigger only one rebuild in a render cycle.
