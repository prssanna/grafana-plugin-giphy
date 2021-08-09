import React, { useState } from 'react';
import { PanelProps } from '@grafana/data';
import { SearchOptions } from 'types';
import { css, cx } from 'emotion';
import { stylesFactory } from '@grafana/ui';
import { SearchBar } from 'components/SearchBar';
import { GiphyResults } from 'components/GiphyResults';
import { Loading } from 'components/Loading';
import { Error } from 'components/Error';
import { getGifs } from 'utils/api';

interface Props extends PanelProps<SearchOptions> {}

export const App: React.FC<Props> = ({ options, data, width, height }) => {
  const styles = getStyles();

  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoadingState] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const searchGifs = (text: string) => {
    // only search when text has changed
    text = text.trim().toLowerCase();
    if (searchTerm !== text) {
      setError(null);
      setSearchTerm(text);
      setResults([]);
      setLoadingState(true);
      getGifs(text, options.limit)
        .then(data => {
          setResults(data);
          setLoadingState(false);
        })
        .catch(err => {
          console.warn(err);
          setSearchTerm('');
          setLoadingState(false);
          setError(err.message);
        });
    }
  };

  return (
    <div
      className={cx(
        styles.wrapper,
        css`
          width: ${width}px;
          height: ${height}px;
        `
      )}
    >
      <SearchBar onSearch={searchGifs} />
      {loading && <Loading text="" />}
      {error && <Error message={error} />}
      {results && <GiphyResults gifs={results} />}
    </div>
  );
};

const getStyles = stylesFactory(() => {
  return {
    wrapper: css`
      position: relative;
      overflow: auto;
    `,
  };
});
