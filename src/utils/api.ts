const key = 'LW96udbXhNkgPYfvF4UNBIEXyRziohOJ';
const params = `?api_key=${key}`;

export function getGifs(text: string, limit?: number) {
  let queryParams = `${params}&q=${text.replace(/\s/g, '+')}`;
  if (limit) {
    queryParams = `${queryParams}&limit=${limit}`;
  }

  return fetch(`http://api.giphy.com/v1/gifs/search${queryParams}`)
    .then(res => res.json())
    .then(gifs => {
      if (!gifs.data.length) {
        throw new Error(`No Results Found for ${text}`);
      }
      return gifs.data;
    });
}
