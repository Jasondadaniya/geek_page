# 极客屋需求文档

## 说明
> `极客屋`是极客们的社区。在这里大家能够多多分享自己正在做的有趣事物、最近的学习、交流想法，在这里找到朋友认识更多有趣的人。极客屋致力于打造一流开源技术社区！

## 极客屋功能模块
> 目前大致分为以下几种模块，后期如有好的idea在添加。

1. 首页
2. 开源
3. 博客
4. 问与答
5. 标签节点
6. 登陆（包含第三方登陆）、注册、个人设置
7. 快捷操作（包含：问与答、博客、开源）

### 1. 首页展示
> 首页包含以下几种功能模块，后期可能扩展更多：

1.1 滚动栏
1.2 热搜标签
1.3 热门文章
1.4 问与答
1.5 今日热议
1.6 专题学习
1.7 开源排行

#### 1.1 滚动栏
主要用于显示特别好玩得`开源项目`，`有趣得专题`,`热门文章`等。

#### 1.2 热搜标签
用于显示用户查看最多得`30`个标签，点击标签可以直接查询相关内容，如：开源项目，问与答，博客文章等。

#### 1.3 热门文章
用于显示近期被收藏/浏览/评论数量最多得`8`篇文章。【加载更多】按钮点击跳转到博客文章列表页面。根据不用分类查询文章。根据用户技术选择推荐文章。文章可被分享到其他平台。

#### 1.4 问与答
用于显示最近提问的`6`条数据。点击条目可进入问题描述详情页。用户讨论信息带分页效果。

#### 1.5 今日热议
显示今天讨论最激烈得`10`条数据。根据浏览数量和评论数量`排名显示`。点击条目可进入问题描述详情页。用户讨论信息带分页效果。

#### 1.6 专题学习
用于显示`12`条被收藏最多得专题栏目。点击进去可查看专题详情。

#### 1.7 开源排行
用于展示用户近期投得最有趣得`10`个开源项目。点击进入开源详情页面。

### 2. 开源
> 用于显示不同分类下的开源项目，帮助用户`推广`和`发现`更多有趣得项目。包含以下功能模块：

2.1 开源类别的获取
2.2 切换类别tab，动态数据，列表分页。
2.3 本类推荐
2.4 点击查看开源详情页
2.5 评论回复，收藏，分享功能

#### 2.1 开源类别的获取
动态获取开源类别，组装tab显示。点击`更多`tab按钮，可查看更多开源分类信息。

#### 2.2 切换类别tab，动态数据，列表分页。
点击tab选项动态获取开源列表信息分页展示。

#### 2.3 本类推荐
每个开源类别下推荐`4`个开源项目。根据`收藏数量`。

#### 2.4 点击查看开源详情页
点击查看开源详情信息。

#### 2.5 评论回复，收藏功能
在开源项目详情页可以评论回复讨论，并且用户可收藏，分享该项目。


### 6. 登陆（包含第三方登陆）、注册、个人设置
6.1 注册
6.2 登陆
6.3 集成第三方登陆
6.4 个人设置

#### 6.1 注册
用户名密码作为空判断。用户名不能重复，重复提醒用户修改。添加验证码，防止恶意注册操作。







