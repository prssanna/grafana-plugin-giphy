import React, { useState } from 'react';
import { stylesFactory, Icon } from '@grafana/ui';
import { css } from 'emotion';

interface Props {
  onSearch: Function;
}

export const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const styles = getStyles();

  const handleInputChange = (e: any) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const disabled = Boolean(searchTerm.match(/^ *$/));

  return (
    <form className={styles.searchBarContainer}>
      <input
        className={styles.searchInput}
        type="search"
        placeholder="Search GIFs"
        value={searchTerm}
        onChange={handleInputChange}
      ></input>
      <button type="submit" className={styles.searchButton} onClick={handleSubmit} disabled={disabled}>
        <Icon name="search" />
      </button>
    </form>
  );
};

const getStyles = stylesFactory(() => {
  return {
    searchInput: css`
      color: #1f272e;
      background: white;
      width: 50%;
      padding: 5px 10px;
      &:focus {
        outline: none;
      }
    `,
    searchBarContainer: css`
      display: flex;
      justify-content: center;
      height: 30px;
      margin: 30px;
    `,
    searchButton: css`
      background: #982d98;
      padding: 5px 10px;
      border: none;
      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    `,
  };
});
