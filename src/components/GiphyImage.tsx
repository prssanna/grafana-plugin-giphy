import React, { useState } from 'react';
import { stylesFactory, LoadingPlaceholder } from '@grafana/ui';
import { css, cx } from 'emotion';

interface Props {
  title: string;
  url: string;
  link: string;
}

export const GiphyImage: React.FC<Props> = ({ title, url, link }) => {
  const styles = getStyles();
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className={styles.gifImageContainer}>
      {loading && (
        <div className={styles.imgLoading}>
          <LoadingPlaceholder text="" />
        </div>
      )}
      <img
        className={cx(styles.gifImage, loading && styles.imgHidden)}
        alt={title}
        src={url}
        onClick={() => window.open(link, '_blank')}
        onLoad={handleImageLoad}
      />
    </div>
  );
};

const getStyles = stylesFactory(() => {
  return {
    imgLoading: css`
      position: absolute;
      transform: translate(-50%, -50%);
      left: 50%;
      top: 50%;
    `,
    gifImageContainer: css`
      height: 200px;
      position: relative;
    `,
    gifImage: css`
      object-fit: cover;
      height: 100%;
      width: 100%;
      cursor: pointer;
      opacity: 1;
    `,
    imgHidden: css`
      opacity: 0;
    `,
  };
});
