---
title: JavaScript 基础：函数
url: js-basic-functions
categories:
  - javascript
tags:
  - JS
  - 基础
  - 函数
  - JavaScript
  - 笔记
date: 2020-02-10 15:00:30
cover:
---

## TL;DR

- **函数**是一组执行特定任务的语句。JavaScript 函数使用关键字 `function` 创建。
- 由几个简短且重点突出的函数组成的程序通常比一整体复杂的程序更容易理解和模块化。
- 调用函数会触发执行函数主体中的代码，完成后，程序的调用的地方恢复。
- 在函数内部声明的变量仅限于函数主体内有效，这些变量称为**局部变量**。
- 函数主体中的 `return` 语句定义了函数的返回值。
- 一个函数可以接受零个、一个或多个**参数**才能起作用。对于特定的调用，提供给参数的值称为**隐式参数**（arguments，实参）
- 创建函数有多种方法，第一种就是**函数声明**。
- 创建函数的另一种方法中使用**函数表达式**。可以将函数表达式分配给变量，因为在 JavaScript 中，变量的值可以是函数。函数表达式通常用于创建**匿名函数**（无名称的函数）。
- 创建匿名函数的第三种方法是最近引入的**箭头函数**。
- 无法使用何种方法创建函数，每个函数都应该有清晰的目的和精心选择的名称（通常名手动作动词）。JavaScript 提供了许多满足各种需求的预定义函数。

<!-- more -->

## 函数简介

函数是 JavaScript 工具集的核心部分，是程序的主要“构建模块”。

函数使该段代码可以被调用很多次，而不需要写重复的代码。

### 声明函数

函数的声明使用关键字 `function`，后面加**函数名称**和一组**圆括号**。构成函数的语句称为**函数主体**，这些语句使用一组**花括号**（`{...}`）包括起来并向右缩进。

```js
function functionName() {
  // 函数主体
}
```

### 调用函数

在函数名称后添加一对圆括号来调用函数：

```js
//...
funnctionName();
//...
```

调用函数会触发执行函数主体中的代码，完成后，程序的调用的地方恢复。

### 函数的实用性

- 几个简短的、功能与重点突出的程序比一整个复杂的程序更容易理解与更新。
- 函数可以解决代码重复的问题。无需在多个位置重复代码，只需要将一段代码集中在一个函数中，并在需要时从任何地方调用。

## 函数内容

### 返回值

```js
//声明函数
function myFunction() {
  //...
  return value;
}

//获取函数返回值

const result myFunction();

```

关键字 `return` 表示函数将返回一个值，该返回值在紧随关键字之后指定。返回值可以被调用取回。

返回值可以是任一数据类型，但是，一个函数只能返回一个值。

如果尝试取回一个未定义的函数返回值，将返回 `undefined`。

函数在执行 `return` 语句后，将立即停止执行，不再运行其他语句。

### 局部变量

在函数主体中声明的变量称为**局部变量**，其使用范围仅限于此函数主体内。

{% note info %}
可以在不同的函数中声明的变量具有相同的名称。
{% endnote %}

### 参数传递

**参数**（Parameter，形参）是函数运行所需的信息，在函数名后面的圆括号中来定义参数，之后就可以在函数主体中来使用参数值。

在调用函数时赋予参数的值称为隐式参数（argument，实参）。

```js
function myFunction(param1, param2, ...) {
  //...
  //函数主体
  //...
}

//调用函数
myFunction(arg1, arg2, ...);
```

{% note info %}

- 一个函数的参数数量是没有限制的，但如果超过三个几乎没有用。
- 如果局部变量一样，参数的有效范围也仅限于函数主体内。
- 调用函数时，参数的数量与顺序至关重要。

{% endnote %}

### 匿名函数

```js
//将匿名函数分配给变量 myFunc
const myFunc = function(param1, param2, ...) {
  //Statements using param1, param2, ...
};

//调用匿名函数
myFunc(arg1, arg2, ...);
```

上例中，将函数分配给变量`myFunc`，该变量的值是一个函数，使用该变量调用函数。这是一个**函数表达式**：在一个表达式中或另一个语法结构中创建的函数。

上例中创建的函数没有命名，因此称为**匿名函数**。

另一种创建匿名函数更简洁的方式：

```js
const myFunc = (param1, param2, ...) => {
  //Statements using param1, param2, ...
};
//调用匿名函数
myFunc(arg1, arg2, ...);
```

这种方式称为**箭头函数**。在一些特殊情况下，箭头函数可以进行简化：

- 当函数主体中只有一条语句时，所有内容都可以写在同一行而无需花括号。`return` 语句被省略 、隐藏。
- 当函数只接受一个参数时，可以省略圆括号。

箭头函数极简化例子：

```js
const hello = name => `Hello, ${name}!`;

console.log(hello('Kate')); // 'Hello, Kate!'
```

## 函数编程指南

### 灵活构建函数

函数可以包含一个程序能用到的所有元素：变量、条件、循环等等，函数可以相互调用，从而为程序员提供了极大的自由来构建函数。

但是，函数最好能够简短、且关注重点内容，以限制其依赖关系并增强程序易读性。

### 利用 JavaScript 预定义函数

应充分利用 JavaScript 提供的预定义函数：`prompt()`、`alert()`、`Math.min()`、`Math.random()`等等。

### 限制函数的复杂性

函数主体必须保持简洁，或者分为几个子函数。

{% note tip %}
根据经验，对于非特殊情况，一个函数最多包含 30 行代码。
{% endnote %}

### 函数及其参数的命名

函数的命名应该选择清楚表达该函数的功能、目的，并遵循命名规范。

{% note warn %}
如果很难为一个函数取一个好的名字，那么它的目的可能并不清晰，这时应该考虑这个函数是否应该存在。
{% endnote %}

## Coding Time

### Say Hello

提醒用户输入 First Name 与 Last Name，然后向用户说 Hello.

```js
function sayHello(firstName, lastName) {
  const message = `Hello, ${firstName} ${lastName}!`;
  return message;
}

const firstName = prompt('Enter Your First Name:');
const lasttName = prompt('Enter Your Last Name:');

alert(sayHello(firstName, lastName));
```

### 平方数

- 使用声明函数与箭头函数两种方式，写一个求平方数的函数。
- 显示 0 到 10 之间每个数的平方。

```js
//声明函数
function square_1(x) {
  return x * x;
}

//箭头函数
const square_2 = x => x * x;

for (i = 0; i <= 10; i++) {
  //使用函数 square_1
  console.log(square_1(i));
  //使用函数 square_2
  console.log(square_2(i));
}
```

### 两个数中的最小数

- 写一个函数输出两个数中的最小数。
- 假设预设函数 `Math.min()` 不存在。

```js
function min(nub1, nub2) {
  let result;
  if (nub1 <= nub2) {
    result = nub1;
  } else {
    result = nub2;
  }
  return result;
}

console.log(min(3.6, 5)); //3.6
```

### 计算器

写一个函数，使其能完成两个数字的基本四则运算：加、减、 乘、除。

```js
function calculate(nub1, operator, nub2) {
  let result;
  switch (operator) {
    case '+':
      result = nub1 + nub2;
      break;
    case '-':
      result = nub1 - nub2;
      break;
    case '*':
      result = nub1 * nub2;
      break;
    case '/':
      result = nub1 / nub2;
      break;
    default:
      result = 'err';
  }
  return result;
}
```

### 圆的周长与面积

- 写一个包含两个函数的程序，根据用户输入的半径，计算圆的周长与面积。
- π（Pi）的值使用预设函数 `Math.PI` 获得。
- 指数运算符：`**`。

```js
//定义周长函数
const circum = radius => 2 * Math.PI * radius;
//定义面积函数
const area = radius => Math.PI * radius ** 2;

//提示用户输入半径
const radius = Number(prompt('请输入圆的半径（r）：'));

//调用函数计算结果
alert(`圆的周长是 ${circum(radius)}\n圆的面积是 ${area(radius)}`);
```
