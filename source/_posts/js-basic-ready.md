---
title: JavaScript 基础：准备
url: javascript-basics-ready
categories:
  - javascript
tags:
  - js
  - 基础
  - 准备
  - 笔记
date: 2019-09-28 21:35:36
---

[JavaScript(JS)](https://developer.mozilla.org/docs/Web/JavaScript) 是一种具有函数优先的轻量级，解释型或即时编译型的编程语言，是一种基于原型编程、多范式的动态脚本语言，并且支持面向对象、命令式和声明式（如函数式编程）风格。

<!-- more -->

## 运行机制与使用场景

### 浏览器

![JavaScript run in Browsers](/assets/images/javascript/js-run-in-browser.png 'JavaScript 在浏览器中的运行机制')

- 几乎所有浏览器都支持
- 与 HTML、CSS 搭配，可以构建网页或网页程序

### 服务器端

![JavaScript run in Server](/assets/images/javascript/js-run-in-server.png 'JavaScript 在服务器端的运行机制')

- 使用 node 创建服务器级别的程序
- 创建服务器、命令行、数据处理

### 客户端

![JavaScript run in Native](/assets/images/javascript/js-run-in-native.png 'JavaScript 在客户端中的运行机制')

- 使用框架将 HTML、CSS、JS 包装成本地 APP
- 桌面客户端、手机端 APP

### 数据通信标准

![JSON Protocol](/assets/images/javascript/json-in-protocol.png 'JavaScript 数据通信标准')

JSON(JavaScript Object Notation)：现在 Rest API 的主流数据格式。
部分新型数据库使用 JSON 作为数据格式。

## JavaScript 与 Java

JavaScript 语言类似 Java 但是并没有 Java 的静态类型和强类型检查特性。JavaScript 遵循了 Java 的表达式语法，命名规范以及基础流程控制。

<!-- prettier-ignore -->
| JavaScript | Java |
| --- | --- |
| 面向对象。不区分对象类型。通过原型机制继承，任何对象的属性和方法均可以被动态添加。 | 基于类系统。分为类和实例，通过类层级的定义实现继承。不能动态增加对象或类的属性或方法。 |
| 变量类型不需要提前声明(动态类型)。 | 变量类型必须提前声明(静态类型)。 |
| 不能直接自动写入硬盘。 | 可以直接自动写入硬盘。 |

## ECMAScript 规范

由 ECMA（前身为欧洲计算机制造商协会）在标准 ECMA-262 中定义的脚本语言规范，至今为止共发表有九个 ECMA-262 版本。

![ECMA-262 各版本差异](/assets/images/javascript/ecma-262-history.png 'ECMA-262 各版本差异')
