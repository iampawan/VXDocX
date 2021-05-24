---
id: vxstatewidgets
title: VxState Widgets
---

## VxBuilder

A helper widget built on top of `StreamBuilder` to rebuild a small part of the screen after execution of given mutations.

```dart
@override
Widget build(BuildContext context) {
    return VxBuilder<AppStore>(
        mutations: {Increment},
        builder: (context,store, status) => Text("${store.count}"),
    );
}
```

## VxNotifier

A helper widget to get callbacks after execution of mutations. Useful for handling actions connected to context such as showing SnackBar or navigating to a route etc.

```dart
class CallmeBack extends VxMutation<AppStore> {
  String message;

  perform() {
    message = "Hello from callback";
  }
}

...

@override
Widget build(BuildContext context) {
  return Scaffold(
    body: VxNotifier(
      mutations: {
        CallmeBack: (ctx, mut) {
          final message = (mut as CallmeBack).message;
          Scaffold.of(ctx).showSnackBar(
            SnackBar(content: Text(message)),
          );
        }
      },
      child: ...,
    ),
  );
}
```

## VxConsumer

A helper widget which is nothing but a combination of `VxBuilder` and `VxNotifier` if you need both of them together. The only difference is that `VxNotifier` mutations are here `notifications`.

```dart
@override
Widget build(BuildContext context) {
    return VxConsumer<AppStore>(
        mutations: {Increment},
        notifications: {
        CallmeBack: (ctx, mut) {
          final message = (mut as CallmeBack).message;
          Scaffold.of(ctx).showSnackBar(
            SnackBar(content: Text(message)),
          );
        }
      },
        builder: (context, store, status) => Text("${store.count}"),
    );
}
```

:::important

VxStatus is mostly useful with VxEffects or async operations otherwise you can ignore it.

:::
