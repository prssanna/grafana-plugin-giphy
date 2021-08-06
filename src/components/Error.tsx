import React from 'react';
import { stylesFactory } from '@grafana/ui';
import { css } from 'emotion';

interface Props {
  message: string;
}

export const Error: React.FC<Props> = ({ message }) => {
  const styles = getStyles();
  return (
    <div className={styles.errorContainer}>
      <p>{message}</p>
    </div>
  );
};

const getStyles = stylesFactory(() => {
  return {
    errorContainer: css`
      font-size: 20px;
      display: flex;
      justify-content: center;
      padding: 30px;
      align-items: center;
      height: 70%;
    `,
  };
});
