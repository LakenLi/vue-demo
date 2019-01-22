## computed和watcher

### computed属性
在模板中使用表达式是非常方便直接的，然而这只适用于简单的操作。在模板中放入太多的逻辑，会使模板过度膨胀和难以维护。例如：

```html
<div id="example">
  {{ message.split('').reverse().join('') }}
</div>
```
在这个地方，模板不再简洁和如声明式直观。你必须仔细观察一段时间才能意识到，这里是想要显示变量 message 的翻转字符串。当你想要在模板中多次引用此处的翻转字符串时，就会更加难以处理。

这就是为什么对于所有复杂逻辑，你都应该使用 computed 属性(computed property)。