const fetchTrending = async () => {
  try {
    const response = await fetch('https://openlibrary.org/trending/daily.json');
    const data = await response.json();
    if (!response.ok) {
      console.log('error');
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchSingleBook = async (id) => {
  try {
    const response = await fetch(`https://openlibrary.org/works/${id}.json`);
    const data = await response.json();
    if (!response.ok) {
      console.log('error');
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { fetchTrending, fetchSingleBook };