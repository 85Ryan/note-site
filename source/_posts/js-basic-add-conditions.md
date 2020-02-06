---
title: JavaScript 基础：添加条件
url: js-basic-add-conditions
categories:
  - javascript
tags:
  - JS
  - 基础
  - 条件
  - JavaScript
  - 笔记
cover:
---

## TL;DR

- 使用关键字 `if` 定义**条件**语句，只有当条件满足（值为`true`）时执行相关的代码块。
- 条件是一个结果为**布尔值**（`true`或`false`）的**表达式**。
- 与 `if` 关联的代码块使用一组**花括号**（`{...}`）包围，为了提高代码可读性，通常将花括号内代码向右**缩进**。
- **比较运算符** `===`、`!==`、`<`、`<=`、`>`、`>=` 用于比较条件内的数字，返回一个**布尔值**。
- `else` 语句可以与 `if` 语句关联，以表示替代方案。根据条件的值，执行`if`关联的代码块或`else`关联的代码块，不会同时执行。条件嵌套的深度没有限制。
- 可以使用**逻辑运算符**（`&&`、`||`、`!`）创建复杂的条件。
- `switch`语句用于执行多个代码块中的一个代码块，具体取决于表达式的值。

<!-- more -->

## 什么是条件

### if 语句

`if`语句语法：

```js
if (condition) {
  // 条件为 true 时执行代码
}
```

{% note warn %}
当只有一句条件语句时，可以省略花括号（`{...}`），但对初学者来说，应该始终使用花括号。
{% endnote %}

### 条件

条件（Condition）是一个表达式，其结果为 `true` 或 `false`，称为布尔（Boolean）值。布尔值是 JavaScript 的另一种数据类型，它只有两个可能值：`true` 或 `false`。

任何生产生布尔值的表达式都可以作为 `if` 语句的条件。如果该表达式的值为 `true`，则执行与其关联的代码块。

可以使用以下运算符来创建布尔表达式：

| 运算符 |   意义   |
| :----: | :------: |
|  ===   |   等于   |
|  !==   |  不等于  |
|   <    |   小于   |
|   <=   | 小于等于 |
|   >    |   大于   |
|   >=   | 大于等于 |

{% note info %}

- 等于和不等于运算符也可以写作 `==` 和 `!=`，但使用 `===` 和 `!==` 更加安全。
- 注意区分等于运算符（`===`）与赋值运算符（`=`）。

{% endnote %}

## 替代条件

### else 语句

当条件为 `true` 时，执行 `if` 语句，否则，执行 `esle` 语句：

```js
if (condition) {
  // 条件为 true 时执行代码
} else {
  // 条件为 false 时执行代码
}
```

### 嵌套条件

`else` 语句中可以再添加 `if` 语句：

```js
if (condition1) {
  // 满足 condition1 时执行语句
} else if (condition2) {
  // 满足 condition2 时执行语句
} else {
  // 其他情况时自执行语句
}
```

{% note info %}

- 初学时，最好为每个嵌套条件添加描述性注释。
- 条件嵌套的层数没有限制，但如果太多，会影响程序的执行。

{% endnote %}

## 添加其他逻辑

### &&（与）运算符

`&&`（与）运算符可以应用于两种类型的布尔值，只有两个条件的值都为 `true` 时，其结果才为 `true`，否则为 `false`：

```js
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
```

### ||（或）运算符

`||`（或）运算可以使参数运算的任意一个条件为 `true` 时，返回的结果就为 `true`，否则为 `false`：

```js
console.log(true && true); // true
console.log(true && false); // true
console.log(false && true); // true
console.log(false && false); // false
```

### !（非）运算符

`!`（非）运算将一个参数转化为布尔类型（`true`或`false`），并返回相反的值：

```js
console.log(!true); // false
console.log(!false); //true
```

## 多种选择

当程序需要根据表达式的值触发多个代码块时，可以使用 `switch` 语句。 `switch` 语句执行多个代码块只的一个，仅执行与相关条件匹配的代码块。

```js
switch (expression) {
  case value1:
    // expression 与 value1 匹配时执行
    break;
  case vaule2：
    // expression 与 value2 匹配时执行
    break;
  // ...
  default:
    // 所有条件都不匹配时执行
}
```

{% note info %}

- `default` 为可选语句，可以用来处理错误或意外值。
- `case` 后面的 `break;` 用来退出 `switch` 语句。

{% endnote %}
