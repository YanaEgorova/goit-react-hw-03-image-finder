import axios from 'axios';

const fetchImagesWithQuery = (searchQuery, page = 1) => {


  const key = '13248585-0966523de6c8b046532b25512';
  const perPage = 12;


  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=${perPage}`,
    )
    .then(response => response.data.hits);

}

export default {
  fetchImagesWithQuery,
};