---
id: getting_started
title: Getting Started
---

## VxNavigator

VxNavigator is based on navigator 2.0 for app and web. It provides many useful methods and send params easily.

## Getting started

Import routing management in the main.dart file and configure routing

```dart
void main() {
  runApp(MyApp());
}

class MyApp extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  final _routerDelegate = VxNavigator(
    notFoundPage: (uri, params) => MaterialPage(
      key: ValueKey('not-found-page'),
      child: Builder(
        builder: (context) => Scaffold(
          body: Center(
            child: Text('Page ${uri.path} not found'),
          ),
        ),
      ),
    ),
    routes: {
      '/': (uri, params) => MaterialPage(child: HomePage()),
      '/test/todo': (uri, params) =>
          MaterialPage(child: TestPage(uri)),
      '/result': (uri, params) => MaterialPage(child: ResultPage()),
      '/login': (uri, params) => MaterialPage(child: LoginPage()),
    },
  );

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      title: 'VxNavigator',
      routerDelegate: _routerDelegate,
      routeInformationParser: VxInformationParser(),
    );
  }
}
```

:::note
The routes field:

key is url

Value is the function to return to the page, uri is the route parameter, and params is the page parameter, which is passed according to the parameter type.
:::

## Methods

:::tip
`VxNavigator.of(context)` can be used as `context.vxNav` or vice-versa.
:::

1.`push(Uri uri, {dynamic params})`

Route jump method, support routing parameter transfer and custom data type transfer parameter

```dart
context.vxNav.push(Uri(path: '/test/todo', queryParameters: {'limit': '12'}));
context.vxNav.push(Uri(path: '/test/todo'), params: your model);
```

2.`replace(Uri uri, {dynamic params})`

Replace the current route.

```dart
context.vxNav.replace(Uri(path: '/test/todo'));
```

3.`pop()`

Return to the previous page, if you want to return the reference, please use `returnAndPush`

```dart
context.vxNav.pop();
```

4.`clearAndPush(Uri uri, {dynamic params})`

Clear the routing stack and reset the home page, such as a login scenario

```dart
context.vxNav.clearAndPush(Uri(path: '/login'));
```

5.`pushAll(List<Uri> uris, {List<dynamic> params})`

Set multiple uris at once and jump to the last route

```dart
context.vxNav.pushAll([Uri(path: '/test/todo', queryParameters: {'limit': '12'}), Uri(path: '/test/todo')]);
```

6.`clearAndPushAll(List<Uri> uris, {List<dynamic> params})`

Clear the routing stack and jump (set multiple uri)

```dart
context.vxNav.clearAndPushAll(Uri(path: '/test/todo', queryParameters: {'limit': '12'}));
```

7.`waitAndPush(Uri uri, {dynamic params})`

Jump to wait for the result

```dart
context.vxNav.waitAndPush(Uri(path: '/test/todo', queryParameters: {'limit': '12'}));
```

8.`returnAndPush(dynamic value)`

Jump to return result

```dart
context.vxNav.returnAndPush(your value);
```

9.`popToRoot()`

The routing stack only keeps the home page

```dart
context.vxNav.popToRoot();
```

10.`removeUri(Uri uri)`

Delete the specified route

```dart
context.vxNav.removeUri(Uri(path: '/test/todo'));
```

11.`removeLastUri()`

Delete the route at the top of the stack

```dart
context.vxNav.removeLastUri();
```
