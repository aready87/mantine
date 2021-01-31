import React from 'react';
import cx from 'clsx';
import { DefaultProps } from '@mantine/types';
import useStyles from './Loader.styles';

interface LoaderProps extends DefaultProps, React.HTMLProps<HTMLDivElement> {
  size?: number;
}

export default function Loader({ className, size = 36, style, ...others }: LoaderProps) {
  const classes = useStyles();

  return (
    <div
      {...others}
      className={cx(classes.loader, className)}
      style={{
        ...style,
        width: size,
        height: size,
        borderWidth: Math.max(Math.round(size / 6), 2),
      }}
    />
  );
}

Loader.displayName = '@mantine/core/Loader';
