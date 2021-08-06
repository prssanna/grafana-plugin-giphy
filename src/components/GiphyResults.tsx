import React from 'react';
import { stylesFactory } from '@grafana/ui';
import { css } from 'emotion';
import { GiphyImage } from 'components/GiphyImage';
interface Props {
  gifs: any[];
}

export const GiphyResults: React.FC<Props> = ({ gifs }) => {
  const styles = getStyles();
  return (
    <div className={styles.gifResultContainer}>
      {gifs.map(({ title, url, images }) => {
        return <GiphyImage title={title} url={images.fixed_height_downsampled.url} link={url} />;
      })}
    </div>
  );
};

const getStyles = stylesFactory(() => {
  return {
    gifResultContainer: css`
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-gap: 15px;
      padding: 30px 10px;
    `,
  };
});
