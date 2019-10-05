---
title: 一行命令让 Mac 迅雷清爽起来
date: 2019-09-18 21:18:58
url: make-xunlei-for-mac-refreshing
categories:
  - utilities
tags:
  - 工具
  - 迅雷
  - 命令行
---

![一行命令让 Mac 迅雷清爽起来](/assets/images/utilities/make-xunlei-for-mac-refreshing.png)

迅雷是我们日常使用的下载工具，但其 macOS 客户端冗余的功能插件却让人非常头疼，下面这个小技巧可以很轻松地屏蔽掉这些多余的插件。

<!-- more -->

迅雷插件的存放目录为：

```
/Applications/Thunder.app/Contents/PlugIns
```

在这个目录下，我们可以看到迅雷有多达 27 个插件，并且这些插件名称以 `.xlplugin` 结尾，我们可以使用终端工具给将这些插件的执行权限去掉：

```bash
sudo chmod a-x *.xlplugin
```

这样迅雷的所有插件就都被禁用了，虽然世界清净了，不过还有一些插件是我们需要用到的，很简单，将用得到的插件再赋予执行权限就可以了。下面是我用到的一些插件：

```bash
sudo chmod a+x applications.xlplugin        #应用界面
sudo chmod a+x details.xlplugin             #下载详情
sudo chmod a+x downloadhistory.xlplugin     #下载记录
sudo chmod a+x myvip.xlplugin               #会员中心
sudo chmod a+x preferences.xlplugin         #设置界面
sudo chmod a+x searchtask.xlplugin          #任务搜索
sudo chmod a+x userlogin.xlplugin           #用户登录
sudo chmod a+x viprenew.xlplugin            #会员续费
sudo chmod a+x viptask.xlplugin             #会员任务
```

当然，可以根据自己的实际需要选择要使用的插件！

{% note tip Notice%}
这种方法，每次软件更新后都需要重新设置！
{% endnote %}
