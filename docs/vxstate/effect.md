---
id: vxeffects
title: VxEffects
---

This is very similar to Redux Thunk or Redux Saga. You execute one mutation and based on its result you execute something else. A simple example will be, you make an API call, if it succeeds you parse it and update store otherwise show a SnackBar with error message.

This pattern is to organize mutations as your app grows.

Structure of a VxEffects is like this:

```dart
mixin VxEffects<ON> {
  dynamic fork(ON result);
}
```

If a mutation extends a `VxEffects` instance, after execution of `peform` in the mutation the result is given to the `fork` of the Vx effect. Based on the implementation of this mixin behaviour can be defined.

## Example - HTTP API Call

```dart
import 'package:http/http.dart' as http;

abstract class HttpEffects implements VxEffects<http.Request> {
  @override
  Future<void> fork(http.Request result) async {
    final response = await http.Response.fromStream(await result.send());

    if (response.statusCode == 200) {
      success(response);
    } else {
      fail(response);
    }
  }

  void success(http.Response response) {}
  void fail(http.Response response) {}
}

class FetchNews extends VxMutation<AppStore> with HttpEffects {
  String err = "";

  http.Request perform() {
    store.news = [];
    store.isFetchingNews = true;

    return http.Request("GET", Uri.parse("https://google.com"));
  }

  success(http.Response response) {
    store.isFetchingNews = false;
    store.news = parseNews(response.body);
  }

  fail(http.Response response) {
    store.isFetchingNews = false;
    err = "Couldn't fetch. Error ${response.statusCode}.";
  }

  onException(e, StackTrace s) {
    store.isFetchingNews = false;
    err = "Unexpected error occurred.";
    // print exception and trace
    super.exception(e, s);
  }
}
```
