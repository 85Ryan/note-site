---
title: 使用 Git Hooks 将 Hexo 站点自动部署到云服务器
date: 2019-09-10 14:51:57
url: auto-deploy-hexo-site-to-cloud-servers-using-git-hooks
categories:
  - hexo
tags:
  - hexo
  - git hook
  - 阿里云
---

[Hexo](https://hexo.io/) 是一个快速、简洁且高效的静态博客框架，一般情况下，我们可以很方便地将 Hexo 站点部署到 [Github Pages](https://pages.github.com) 等托管平台，如果你有一台 VPS 服务器，可按照下面的方法将站点自动部署到自己的服务器中。

<!-- more -->

## 准备工作

- 服务器环境：CentOS Linux / Nginx / Git

- 本地环境：Node.js / Hexo / hexo-cli / Git

## 创建仓库

在服务器上使用 `--bare` 参数创建裸仓库：

```bash
mkdir site.git
cd site.git
git init --bare
```

## Hexo 配置

修改本地站点目录下的 `_config.yml` 中的部署配置：

```yml _config.yml
deploy:
	type: git
	repo: user@xx.xxx.xx.xxx:/home/user/site.git
	# 如果使用了自定义ssh端口:
	repo: ssh://user@xx.xxx.xx.xxx:port/home/user/site.git

# user: 登录服务器的用户，需要进行必要的授权
# xx.xxx.xx.xxx: 服务器 IP 地址
# /home/user/site.git: 上一步中创建的 Git 仓库路径
```

## 自动部署

本地的 deploy 命令将静态文件提交到 Git 仓库时，触发 git hook，执行设定好的 bash 命令将文件拷贝到站点目录。

首先，进入到 Git 仓库的 Hooks 目录，并创建钩子 `post-receive`：

```bash
cd site.git/hooks
touch post-receive
vi post-receive
```

然后，输入下面的脚本：

```bash
#!/bin/bash -l

GIT_REPO=/home/user/site.git
TMP_GIT_CLONE=/tmp/site
PUBLIC_WWW=/www/site

rm -rf ${TMP_GIT_CLONE}
git clone $GIT_REPO $TMP_GIT_CLONE
cd $TMP_GIT_CLONE
rm -rf ${PUBLIC_WWW}/*
cp -rf ${TMP_GIT_CLONE}/* ${PUBLIC_WWW}

# /home/user/site.git: 仓库路径
# /www/site: 站点目录路径
# /tmp/site: 临时目录
```

上述脚本的目的为先将文件拉到临时目录 `/tmp/site`，然后再将所有文件拷贝到站点目录 `/www/site`。

{% note warn 注意%}
这里需要注意相关文件的权限问题！
{% endnote %}

## 运行

完成上述操作后，就可以测试一下了，运行以下命令：

```js
hexo clean && hexo d
```

如果最后输出以下结果就说明部署成功了：

```bash 
...
INFO  Deploy done: git
```
