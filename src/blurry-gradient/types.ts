/**
 * Props for the BlurryGradient component.
 */
export interface BlurryGradientProps {
  /**
   * Optional class name for the component.
   */
  className?: string;

  /**
   * Optional inline styles for the component.
   */
  style?: React.CSSProperties;

  /**
   * The amount of blur to apply to the gradient items.
   * Accepts any valid CSS filter blur value (e.g., '10px', '2em').
   * @default '100px'
   */
  blur?: string;

  /**
   * An array of color strings to be used in the gradient.
   */
  colors?: string[];

  /**
   * The number of gradient items to generate.
   * @default 10
   */
  itemNumber?: number;

  /**
   * The random width range for the gradient items.
   * @default [60, 80]
   */
  itemWidth?: [number, number];

  /**
   * The unit for the width of the gradient items (e.g., 'px', '%').
   * @default '%'
   */
  itemWidthUnit?: string;

  /**
   * The random height range for the gradient items.
   * @default [60, 80]
   */
  itemHeight?: [number, number];

  /**
   * The unit for the height of the gradient items (e.g., 'px', '%').
   * @default '%'
   */
  itemHeightUnit?: string;

  /**
   * The random top range of the generated gradient item on the screen.
   * @default [20, 60]
   */
  itemTop?: [number, number];

  /**
   * The random left range of the generated gradient item on the screen.
   * @default [20, 60]
   */
  itemLeft?: [number, number];

  /**
   * The random speed range for the gradient items' animation.
   * @default [50, 80]
   */
  itemSpeed?: [number, number];

  /**
   * An array of props for individual gradient items.
   * @notice If this prop is provided, the `colors` prop will be ignored.
   */
  items?: BlurryGradientItemProps[];
}

export interface BlurryGradientItemProps {
  /**
   * The color of the gradient item.
   * Accepts any valid CSS color value. including gradients. (e.g., 'linear-gradient(#FBF1F7, #B27CEE)')
   */
  color: string;
  /**
   * Optional css `top` for the gradient item.
   */
  top?: number | string;
  /**
   * Optional css `left` for the gradient item.
   */
  left?: number | string;
  /**
   * Optional css `width` for the gradient item.
   */
  width?: number | string;
  /**
   * Optional css `height` for the gradient item.
   */
  height?: number | string;
  /**
   * Optional css `animation-duration` for the gradient item.
   */
  speed?: string;
  /**
   * Optional css `transform` for the gradient item when animating starts.
   */
  transformFrom?: string;
  /**
   * Optional css `transform` for the gradient item when animating ends.
   */
  transformTo?: string;
}
