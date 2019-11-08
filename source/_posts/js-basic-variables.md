---
title: JavaScript 基础：变量
url: js-basic-variables
categories:
  - javascript
tags:
  - JS
  - 基础
  - 变量
  - JavaScript
  - 笔记
date: 2019-11-08 12:11:23
cover:
---

## TL;DR

- **变量**是数据存储的容器。每个变量包含变量名、值和类型三个属性。JavaScript 是**动态类型语言**，会根据存储的数据自动推断数据的类型。
- 使用关键字`let`声明变量，关键字`const`声明常量（初始值不会变化）。
- 使用**赋值运算符**（`=`）为变量赋值。
- 变量的**作用域**是变量在程序中的有效范围。用`let`和`const`声明的是块级作用域变量。代码块是被一组花括号（`{...}`）包围。
- **表达式**是一组代码的集合，它返回一个值。
- 表达式可以嵌入到反引号（\`...\`）限定的字符串中，这类字符串称为**模板字面量**。
- 类型转换可以在程序执行时**隐式转换**，也可以使用命令`Number()`和`String()`进行**显式转换**。
- 命令`prompt()`和`alert()`处理信息输入并以对话框形式显示。
- 尽可能使用描述性的命名，让代码更易读。建议使用**驼峰式**命名规范。

<!-- more -->

## 什么是变量

计算机程序使用变量存储数据。变量是数据存储的容器，可以把它想象成一个可以放东西的盒子！

变量有三个主要属性：

- 变量名：可以包含大写和小写字母、数字（不能以数字开头）、下划线（`_`）、美元符号（`$`）。
- 值：存储在变量中的数据。
- 类型：确定变量的作用与可用动作。

{% note tip %}
JavaScript 是动态类型语言，会根据存储的数据自动推断数据的类型，所以不必在 JavaScript 中显式定义变量类型。
{% endnote %}

## 声明变量

JavaScript 使用关键字`let`加变量名的形式来声明变量：

```js
let a;
console.log(a);
// undefined
```

变量`a`因为没有值，控制台返回`undefined`。`undefined`是一个特殊的值，表示“未定义”。

{% note danger %}
在之前版本中 JavaScript 使用关键字`var`来声明变量，ES6 新增了`let`命令，`let`声明的变量只在它所在的代码块有效，`var`声明的变量全局有效。
{% endnote %}

## 变量赋值

程序运行时，变量的值可以改变。使用赋值运算符（`=`）为变量重新分配一个值。

```js
let a;
a = 3.14;
console.log(a);
// 3.14
```

也可以使用一行命令同时声明变量并为其赋值：

```js
let a = 3.14;
console.log(a);
// 3.14
```

## 声明常量

程序运行时，初始值不会变化的变量称为常量。使用关键字`const`来声明常量：

```js
const a = 3.14;
```

常量不能被重新赋值。

## 数值递增

`+=`和`++`运算符可以使变量数值增加。`++`称为递增运算符，每次增加`1`。

```js
let a = 0;
a += 1;
//相当于 a = a + 1;
// a = 1;
a++;
// a = 2;
```

## 变量作用域

变量的作用域是变量在程序中的有效范围。用`let`和`const`声明的是块级作用域变量：仅在声明它们的代码块（以及每个子块）。代码块是被一组花括号（`{...}`）包围。JavaScript 默认形成一个代码块。

```js
let num1 = 0;
{
  num1 = 1; // OK; num1 在父级代码块中声明
  const num2 = 0;
}
console.log(num1); // OK; num1 在当前代码块中声明
console.log(num2); // Error; num2 在当前块无效
```

## 表达式

表达式是一组代码的集合，它返回一个值。通过组合变量、值与运算符来创建表达式。

```js
const c = 3; // 3
let d = c; // d=3
d = d + 1; // d=4
```

表达式的运算优先级与算术运算相同，也可以使用圆括号来改变优先级。

```js
let e = 3 + 2 * 4; // 3+8=11
e = (3 + 2) * 4; // 5*4=20
```

表达式可以嵌入到反引号（\`...\`）限定的字符串中，这类字符串称为**模板字面量**。在模板字面量中的表达式语法为：`${expression}`。

```js
const country = 'China';
console.log(`I live in ${country}`); // I live in China.
const x = 5;
const y = 6;
console.log(`${x} + ${y} = ${x + y}`); // 5 + 6 = 11.
```

## 类型转换

在进行表达式求值时可以导致数据类型的转换，这被称为**隐式转换**，因为它们无需程序员干预自动进行。例如，字符串与数字相加（`+`）会将两者拼接成一个新的字符串：

```js
const num = 100;
const str = 'Variable num contains the value ';
console.log(str + num); // Variable v contains the value 100
```

如果数据类型无法被转换为数字，则将得到结果 NaN（非数字）：

```js
const g = 'five' * 2;
console.log(g); // NaN
```

强制将数据转换为其他类型，称为**显式转换**。使用命令`Number()`和`String()`可以数值强制转换为数字和字符串。

```js
const h = '5';
console.log(h + 1); // 51

const i = Number(h);
console.log(i + 1); // 5+1=6
```

## 用户交互

### 信息输入

```js
const name = prompt('请输入您的姓名：');
```

`prompt()`可以弹窗提醒用户输入一条字符串信息。

### 显示内容

`console.log()`和`alert()`都可以向用户显示内容，`console.log()`显示信息时不会中断程序执行，并且可同时显示多条内容。

```js
const temp1 = 36.9;
const temp2 = 37.6;
const temp3 = 37.1;
console.log(temp1, temp2, temp3); //输出：36.9 37.6 37.1
```

### 输入数字

`prompt()`命令会返回一个字符串，如果用于数值表达式中，必须使用`Number()`命令将内容转换为数字。

```js
const input = prompt('请输入一个数字：');
const nb = Number(input);
```

也可以将上述代码合并为一行：

```js
const nb = Number(prompt('请输入一个数字：'));
```

## 命名规范

正确的命名可以使代码更简洁、更易于理解。尽可能使用描述性的命名，让代码更易读。不要用只有开发者能理解的缩写，也不要通过砍掉几个字母来缩写单词。

每一个 JavaScript [关键字](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#关键字)都是一个保留名称，不能使用它们命名。

为每个元素（变量、函数、类…）赋予一个反映其意义的特定名称，遵循以下命名规范：

- 名称以**小写字母**开头。
- 名称包含多个单词时，每个单词的第一个字母（第一个单词除外）均为**大写**。
- 函数和方法的名称需包含一个**行为动词**。
- 为了与其他编程语言一致，类名以**大写字母**开头。
- 由于数组可能包含多个元素，因此数组以**复数**命名或名称添加`list`后缀。
- 为了区分其他变量，DOM 元素需添加`Element`后缀（类数组变量`Elements`）。

{% note danger %}
JavaScript 命名**区分大小写**，`myVariable`与`myvariable`是两个不同的变量。
{% endnote %}
