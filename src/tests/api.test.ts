import { getGifs } from 'utils/api';

test('should return gifs with valid search term', () => {
  return getGifs('happy birthday').then(data => {
    expect(data.items).not.toBeUndefined();
  });
});

test('should return error with invalid search term', () => {
    const invalidSearchTerm = 'awadbkhbsfsdgfds';
    return getGifs(invalidSearchTerm).catch(err => {
        expect(err).toMatch(`No Results found for ${invalidSearchTerm}`);
    });
});