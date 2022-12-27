import axios from 'axios';

export const fetchImages = async (key, page) => {
  try {
    const { data } = await axios.get(
      `https://pixabay.com/api/?q=${key}&page=${page}&key=31495238-8710d87c3c0eb2a83465ec547&image_type=photo&orientation=horizontal&per_page=12`
    );
    return data;
  } catch (error) {
    return error.message;
  }
};
