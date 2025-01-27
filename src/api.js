import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID c35sLKTwD1GdDkyUUzLSSuojt5Q5K9QglOeV6Wivy7g',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
