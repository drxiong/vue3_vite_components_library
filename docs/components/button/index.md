# Button 按钮
常用操作按钮

## 基础用法

基础的函数用法

:::demo 使用`size`、`color`、`pain`、`round`属性来定义 Button 的样式。

```vue
<template>
 <div style="margin-bottom:20px;">
  <IButton color="blue">主要按钮</IButton>
  <IButton color="green">绿色按钮</IButton>
  <IButton color="gray">灰色按钮</IButton>
  <IButton color="yellow">黄色按钮</IButton>
  <IButton color="red">红色按钮</IButton>
 </div>
 <div style="margin-bottom:20px;">
  <IButton color="blue" icon="search">搜索按钮</IButton>
  <IButton color="green" icon="edit">编辑按钮</IButton>
  <IButton color="gray" icon="check">成功按钮</IButton>
  <IButton color="yellow" icon="message">提示按钮</IButton>
  <IButton color="red" icon="delete">删除按钮</IButton>
 </div>
 <div style="margin-bottom:20px;">
  <IButton color="blue" icon="search"></IButton>
  <IButton color="green" icon="edit"></IButton>
  <IButton color="gray" icon="check"></IButton>
  <IButton color="yellow" icon="message"></IButton>
  <IButton color="red" icon="delete"></IButton>
 </div>
</template>
```
:::

## 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

:::demo 设置 icon 属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用 i 标签即可，可以使用自定义图标。

```vue
<template>
 <div class="flex flex-row">
  <IButton icon="edit" plain></IButton>
  <IButton icon="delete" plain></IButton>
  <IButton icon="share" plain></IButton>
  <IButton round plain icon="search">搜索</IButton>
 </div>
</template>
```
