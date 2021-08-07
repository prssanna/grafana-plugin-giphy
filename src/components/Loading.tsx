import React from 'react';
import { stylesFactory, LoadingPlaceholder } from '@grafana/ui';
import { css } from 'emotion';
interface Props {
  text: string;
}

export const Loading: React.FC<Props> = ({ text }) => {
  const styles = getStyles();
  return (
    <div className={styles.loadingContainer}>
      <LoadingPlaceholder text={text} />
    </div>
  );
};

const getStyles = stylesFactory(() => {
  return {
    loadingContainer: css`
      font-size: 35px;
      height: 70%;
      padding: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #771c77;
    `,
  };
});
