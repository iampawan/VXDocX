---
id: text
title: Text
---

VelocityX provides text with super powers.

:::important
When you are done with the text properties then use .make() to complete it as a widget.
:::

:::note
Text, SelectableText and RichText works the same just replace text with selectableText or richText.
:::

> Below are some examples of differet text styles using the VelocityX text properties and widget.

<img src="https://lh3.googleusercontent.com/k_ItQnN2lWGmBhCj8GawQWNLazgs_Q3ELk0-fQ6SlS6Qpts9psmb2kTPnQtv935-mAtqiQmkvDPcgyp0RblNO-b8r8j7O0yuSS9PSVL9qXfuZc8a9Gdj6wv2U9QBjid_ts7BEp54x7KlsSwjGcFzan09O0ok67HzXSzgowXZNCfOEJHfHhV6asm5jAfgZh0z4vJAlJyTBbn5Axv4MVm7dHRHL-ndNQvYsgRomBRxWIg0s06pclOph5g2MtHpP_IeU5GYZKA8x8mm5ROnvzGwYC2B4yFaEhe3O6VxXx8mAd5wM-hjiqXuGBlcIW5gkMYOZ7kAOta_KondSbi800itmq_jDRh2txz7UQmqnfwIMUCGjI1tq1xFfdaQaN1ozkDY3ReBULYCZo8dFVkb2R4LdcecySWzIKl7VzVg6p-UzNybIQLtqibgZWEq4eB72wyRxB2wHEd29qEVUQKUdWs9AaPBAL4f6duWS9aLma0kfMs9E54iuRpTvy6yr1Smn8FlNPwfPsrLnOez-8K_BRWQg7FYnYDb0acZA2iZ5y72Eq-CHxFmOvGi_oTYncZI59eODVEMPada-rLQ88XAeUE09pOInGtYmXrFZBU9tdYfQQrnUjBC3oboGL0SR1NIwZN17YUnm5dyfrvqxs1naybEYc0Ct_TFzsF8kbpSd2lZ6s6NxiUBZZ4mVhx-RtUU5-MHPbyXbDuVwc4u_DgaQ384UoXz=w429-h952-no?authuser=0" height="500"/>

> You can use any string and convert it to a text widget.

```dart
{string}.text.make()

eg: 'Pawan'.text.make()

It will produce a text with String as Pawan
```

> You can use velocityx text with the Text widget itself.

```dart
TextWidget.text

eg: Text('pawan').text.red500.make()

It will produce a text with String as pawan and color as red.
It will also override any text property if you specify again.
```

## Useful Methods
