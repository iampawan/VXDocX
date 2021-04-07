---
id: string
title: String Extensions
---

VelocityX gives you powerful extensions for Strings.

## Common Operations

> **First letter uppercase**

**`firstLetterUpperCase()` returns first letter of the string as Caps eg -> Flutter**

```dart
 "{string}".firstLetterUpperCase()

 Eg: "velocityx".firstLetterUpperCase()
 Output: "VelocityX"
```

#### Remove character

> **Remove first character**

**`eliminateFirst` removes first element**

```dart
 "{string}".eliminateFirst

 Eg: "velocityx".eliminateFirst
 Output: "elocityx"
```

> **Remove last character**

**`eliminateLast` removes last element**

```dart
 "{string}".eliminateLast

 Eg: "velocityx".eliminateLast
 Output: "velocity"
```

> **Empty or null**

**`isEmptyOrNull` returns a bool(true or false) if the string is null or empty**

```dart
 "{string}".isEmptyOrNull

 Eg: "".isEmptyOrNull
 Output: true
```

> **Check if String is Right to Left Language**

**`isRtlLanguage()` returns a bool(true or false)**

```dart
 "{string}".isRtlLanguage()
```

> **Returns the string if it is not `null`, or the empty string otherwise** > **`orEmpty` returns a string**

**`orEmpty()` returns a bool(true or false)**

```dart
 "{string}".orEmpty
```

> **if the string is empty perform an action**

**`ifEmpty(action)` returns a string**

```dart
 "{string}".ifEmpty(()=>{})
```

> **Capitalize all words inside a string**

**`allWordsCapitilize()` returns a string**

```dart
 "{string}".allWordsCapitilize()
```

> **Returns a String without white space at all**

**`removeAllWhiteSpace()` returns a string**

```dart
 "{string}".removeAllWhiteSpace()

 Eg - "hello world" // helloworld
```

> **Returns true if string is neither null, empty nor is solely made of whitespace characters.**

**`isNotBlank` returns a bool**

```dart
 "{string}".isNotBlank
```

> **Hide partial values of a string**

**`hidePartial([Optional Params])` returns a bool**

```dart
 "{string}".hidePartial()
```

> **Format numeric currency**

**`numCurrency` returns a string**

```dart
 "{string}".numCurrency


```

> **Format numeric currency with provided locale**

**`numCurrencyWithLocale()` returns a string**

```dart
 "{string}".numCurrencyWithLocale()
```

---

## Validations

### Email Validation

**`validateEmail()` returns a bool(true or false) if the email id is valid or not**

```dart
 "{string}".validateEmail()

 Eg: "mtechviral@gmail.com".validateEmail()
 Output: true

 Eg: "pawan kumar".validateEmail()
 Output: false
```

---

### Credit/Debit Card Validation

**`isCreditCardValid()` returns a bool(true or false) if the card is valid or not**

```dart
 "{string}".isCreditCardValid()

 Eg: "5454545454545454".isCreditCardValid()
 Output: true

 Eg: "1234567890123456".isCreditCardValid()
 Output: false
```

---
