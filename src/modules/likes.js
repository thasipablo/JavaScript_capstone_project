const LIKES_API_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/I11ph9MsLdYF8zFhvLLF/likes/';

const fetchLikes = async () => {
  try {
    const response = await fetch(LIKES_API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching likes:', error);
    return [];
  }
};

export default fetchLikes;
