# react-blurry-gradient

![](./assert/banner.gif)

实现动态毛玻璃渐变背景特效的 React 组件。

## 使用方法

```bash
npm install react-blurry-gradient
```

```tsx
import { BlurryGradient, COLORS } from 'react-blurry-gradient';
import 'react-blurry-gradient/style.css';

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <BlurryGradient colors={COLORS.BLUE} />
    </div>
  );
}
```

其中 `COLORS` 是一套预设好的渐变颜色组，可以直接使用。你也可以随意自定义颜色。

注意，`BlurryGradient` 组件的父元素需要有一个明确的高度，不然可能无法正常显示。

## 组件参数

`BlurryGradient` 组件接受以下参数：

### 1. 基本配置

| 参数       | 类型                                                                                                                          | 必填 | 默认值  | 说明                                                          |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------- | ---- | ------- | ------------------------------------------------------------- |
| colors     | `string[]`                                                                                                                    | 否   |         | 背景色配置，会随机从中选取对应的颜色                          |
| items      | [`BlurryGradientItemProps[]`](https://github.com/HoPGoldy/react-blurry-gradient/blob/master/src/blurry-gradient/types.ts#L82) | 否   |         | 精确控制每个色块的配置，当该属性有值时，`colors` 参数将被忽略 |
| blur       | `string`                                                                                                                      | 否   | `100px` | 模糊程度，为 0 则完全不模糊                                   |
| itemNumber | `number`                                                                                                                      | 否   | `10`    | 渐变色块的数量                                                |

### 2. 随机范围配置

| 参数           | 类型               | 必填 | 默认值     | 说明                                 |
| -------------- | ------------------ | ---- | ---------- | ------------------------------------ |
| itemWidth      | `[number, number]` | 否   | `[60, 80]` | 随机生成的色块宽度上下限             |
| itemWidthUnit  | `string`           | 否   | `%`        | 色块宽度单位，配合 `itemWidth` 使用  |
| itemHeight     | `[number, number]` | 否   | `[60, 80]` | 随机生成的色块高度上下限             |
| itemHeightUnit | `string`           | 否   | `%`        | 色块高度单位，配合 `itemHeight` 使用 |
| itemTop        | `[number, number]` | 否   | `[20, 60]` | 随机生成的色块上边距上下限           |
| itemLeft       | `string`           | 否   | `[20, 60]` | 随机生成的色块左边距上下限           |
| itemSpeed      | `[number, number]` | 否   | `[50，80]` | 随机生成的色块移动速度上下限，单位秒 |

## License

本项目使用 [The MIT License (MIT)](https://mit-license.org/) 许可开源。
