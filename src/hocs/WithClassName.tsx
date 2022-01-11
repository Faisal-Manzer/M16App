import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, StyleProp } from 'react-native';

import { t } from 'helpers';
import { ClassName } from 'interfaces/application';
import { Text } from 'components/atoms/typography';


interface HasStyle {
  style?: any;
}

export interface ExtendedProps<T extends HasStyle> {
  className?: ClassName;
  style?: T['style'];
}

export interface Params<T, S> extends ExtendedProps<S> {
  Component: React.ComponentType<T>;
}

function WithClassName<T extends HasStyle>(Component: React.ComponentType<T>, { className: dClassName, style: dStyle }: ExtendedProps<T> = {}) {
  type PropsWithClassName = T & ExtendedProps<T>;
  const WrappedComponent: React.FC<PropsWithClassName> = ({
    className,
    style,
    ...extraProps
  }: PropsWithClassName) => (
    <Component
      {...extraProps as T}
      style={{
        ...t(dClassName),
        ...(dStyle || {}),
        ...t(className),
        ...(style || {}),
      }}
    />
  );

  return WrappedComponent;
}

export default WithClassName;
