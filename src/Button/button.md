# Button按钮
 按钮用于开始一个即时操作，响应事件
# 何时使用
标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

在 Ant Design 中我们提供了五种按钮。

主按钮：用于主行动点，一个操作区域只能有一个主按钮。 type属性为primary

默认按钮：用于没有主次之分的一组行动点。 type属性为default

虚线按钮：常用于添加操作。 type属性为Dashed

文本按钮：用于最次级的行动点。  type属性为text

链接按钮：用于作为外链的行动点。type属性为link

以及四种状态属性与上面配合使用。

危险：删除/移动/修改权限等危险操作，一般需要二次确认。直接加上danger

幽灵：用于背景色比较复杂的地方，常用在首页/产品页等展示场景。

禁用：行动点不可用的时候，一般需要文案解释。 直接加上disabled

加载中：用于异步操作等待反馈的时候，也可以避免多次提交。loading
上面就是常用的一些
如果我们要加上一些事件我们可以用onClick