---
id: getting_started
title: Getting Started
---

## VxNavigator

VxNavigator is based on navigator 2.0 for Flutter apps. It provides many useful methods and send params easily.

## Getting started

Import routing config in the main.dart file and configure routing

### Initialize routing management

```dart
void main() {
  /// Setting Path Url Strategy for Web
  Vx.setPathUrlStrategy();

  runApp(MyApp());
}

// First way to monitor changes in the routing stack:
class MyObs extends VxObserver {
  @override
  void didChangeRoute(Uri route, Page page, String pushOrPop) {
    print("${route.path} - $pushOrPop");
  }

  @override
  void didPush(Route route, Route? previousRoute) {
    print('Pushed a route');
  }

  @override
  void didPop(Route route, Route? previousRoute) {
    print('Popped a route');
  }
}

class MyApp extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {


  final navigator = VxNavigator(
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
    observers: [MyObs()],

    /// Use VxRoutePage for transition
    routes: {
      '/': (uri, params) => MaterialPage(child: HomePage()),
      '/test/todo': (uri, params) =>
          MaterialPage(child: TestPage(uri)),
      '/result': (uri, params) => VxRoutePage(pageName: "DemoList", child:ResultPage()),
      '/login': (uri, params) => MaterialPage(child: LoginPage()),
      /// Regex example
      RegExp(r"^\/nav\/[a-zA-Z0-9]+$"): (uri, param) => MaterialPage(
          child: Nav4(
            pathParam: uri.pathSegments[1],
            queryParams: uri.queryParametersAll,
          ),
        ),

      /// Transition example
       "/page1": (uri, param) => VxRoutePage(
        child: Page1(),
        pageName: "page1",
        transition: (animation, child) => ScaleTransition(
              alignment: Alignment.bottomLeft,
              scale: Tween(
                begin: 0.0,
                end: 1.0,
              ).animate(
                CurvedAnimation(
                  parent: animation,
                  curve: Curves.easeInOut,
                ),
              ),
              child: child,
            )),
    },
  );

  /// Second way to monitor changes in the routing stack:
  navigator.addListener(() {
    print(navigator.currentConfiguration!.path);
  });

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      title: 'VxNavigator',
      routerDelegate: navigator,
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

## Guarded routes

```dart
 '/safe_route': (uri,_) {
  if (!isLoggedIn()) return VxRoutePage(pageName: "Home", child: HomePage());
  return LoginPage();
}
```

## Navigate without a context

main.dart

```dart
final navigator = VxNavigator(
  routes: {
    "/": (uri, param) => VxRoutePage(pageName: "DemoList", child: DemoList()),
    "/demo": (uri, param) => VxRoutePage(pageName: "Demo", child: Demo()),
);

MaterialApp.router(
  routerDelegate: navigator,
  routeInformationParser: const VxInformationParser(),
)
```

my_widget.dart

```dart
import 'main.dart';

void onTap() {
  _navigator.routeManager.push(Uri.parse("/demo"));
}
```

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

## Custom Animation

```dart
/// Transition example
       "/page1": (uri, param) => VxRoutePage(
        child: Page1(),
        pageName: "page1",
        transition: (animation, child) => ScaleTransition(
              alignment: Alignment.bottomLeft,
              scale: Tween(begin: 0.0,end: 1.0,
              ).animate(
                CurvedAnimation(
                  parent: animation,
                  curve: Curves.easeInOut),
              ),
              child: child,
            )),
```

## Url Strategy

```dart
Vx.setPathUrlStrategy();
```

## Page monitoring

There are two ways to monitor changes in the routing stack:

```dart
vxNavigator.addListener(() {
  if (vxNavigator.currentConfiguration == Uri(path: '/')) {
    /// To do
  }
}
```

Second way (Navigation observers)

```dart
class MyObs extends VxObserver {
  @override
  void didChangeRoute(Uri route, Page page, String pushOrPop) {
    print("${route.path} - $pushOrPop");
  }

  @override
  void didPush(Route route, Route? previousRoute) {
    print('Pushed a route');
  }

  @override
  void didPop(Route route, Route? previousRoute) {
    print('Popped a route');
  }
}

class MyApp extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  final navigator = VxNavigator(
    observers: [MyObs()],
    routes: {
    "/": (uri, param) => VxRoutePage(pageName: "DemoList", child: DemoList()),
    "/demo": (uri, param) => VxRoutePage(pageName: "Demo", child: Demo()),
  );
```

## VxNavigator so far

1. [x] Upgrade Flutter v2 to support null safety
1. [x] Url strategy
1. [x] Custom animation routing
1. [x] Regex support
1. [] Nested routing
