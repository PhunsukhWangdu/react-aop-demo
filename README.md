# HOC组件 允许对有状态react组件渲染劫持 在其内部方法中加入切片或重写

# 用法： #

```jsx
import aop from './src/aop';
import Tab from 'component-tab';

const usages = [
  {
  jointPoint: 'after',//方法注入时机 after before act
  advice: function getFilterConfig () {},//具名方法
  }
];

const MyContainer = aop(Tab, usages);
//Mycontainer即为注入了切片后的组件

```