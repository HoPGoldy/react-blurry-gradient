import React, { FC, useMemo } from 'react';
import {
  random,
  randomBorderRadius,
  randomGradientColor,
  randomPercent,
  randomTransform,
} from './random';
import './styles.css';
import { BlurryGradientItemProps, BlurryGradientProps } from './types';

interface BlurryGradientItem {
  style: React.CSSProperties;
}

const DEFAULT_ITEM_WIDTH = [60, 80];
const DEFAULT_ITEM_HEIGHT = [60, 80];
const DEFAULT_ITEM_TOP = [20, 60];
const DEFAULT_ITEM_LEFT = [20, 60];
const DEFAULT_ITEM_SPEED = [50, 80];

export const BlurryGradient: FC<BlurryGradientProps> = (props) => {
  const {
    itemNumber = 10,
    itemWidth = DEFAULT_ITEM_WIDTH,
    itemWidthUnit = '%',
    itemHeightUnit = '%',
    itemHeight = DEFAULT_ITEM_HEIGHT,
    itemTop = DEFAULT_ITEM_TOP,
    itemLeft = DEFAULT_ITEM_LEFT,
    itemSpeed = DEFAULT_ITEM_SPEED,
  } = props;

  const itemDetailList = useMemo(() => {
    const getItemStyle = (item: BlurryGradientItemProps): BlurryGradientItem => {
      return {
        style: {
          '--width': item.width ?? random(itemWidth[0], itemWidth[1]) + itemWidthUnit,
          '--height': item.height ?? random(itemHeight[0], itemHeight[1]) + itemHeightUnit,
          '--speed': item.speed ?? random(itemSpeed[0], itemSpeed[1]) + 's',
          '--color': item.color,
          '--top': item.top ?? randomPercent(itemTop[0], itemTop[1]),
          '--left': item.left ?? randomPercent(itemLeft[0], itemLeft[1]),
          '--border-radius': randomBorderRadius(),
          '--transform-from': item.transformFrom ?? randomTransform(),
          '--transform-to': item.transformTo ?? randomTransform(),
        } as React.CSSProperties,
      };
    };

    if (props.colors) {
      const colorItems = Array.from({ length: itemNumber }).map(() => {
        return {
          color: randomGradientColor(props.colors as string[]),
        };
      });

      const list = colorItems.map(getItemStyle);
      return list;
    }

    if (!props.items) {
      return [];
    }

    const list = props.items.map(getItemStyle);
    return list;
  }, [
    props.colors,
    props.items,
    itemWidth,
    itemWidthUnit,
    itemHeight,
    itemHeightUnit,
    itemSpeed,
    itemTop,
    itemLeft,
    itemNumber,
  ]);

  const renderItem = (item: BlurryGradientItem, index: number) => {
    return <div key={index} className='blurry-gradient-block' style={item.style}></div>;
  };

  return (
    <div
      className={`${props.className} blurry-gradient-container`}
      style={
        {
          ...(props.style || {}),
          '--blur': props.blur,
        } as React.CSSProperties
      }
    >
      {itemDetailList.map(renderItem)}
    </div>
  );
};
