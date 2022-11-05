const checkResponse = (res) => {
  if (!res.ok) {
    throw new Error(
      `Status: ${res.status} StatusText: ${res.status.text}`
    );
  }
  return res.json();
};

const fetchTrending = async () => {
  try {
    const response = await fetch('https://openlibrary.org/trending/daily.json');
    const data = await checkResponse(response);
    return data;
  } catch (error) {
    console.log(error);
  };
};

const fetchSingleBook = async (id) => {
  try {
    const response = await fetch(`https://openlibrary.org/works/${id}.json`);
    const data = await checkResponse(response);
    return data;
  } catch (error) {
    console.log(error);
  };
};

const fetchSearch = async (inputValue) => {
  try {
<<<<<<< Updated upstream
    const response = await fetch(`https://openlibrary.org/search.json?q=${inputValue}`);
    const data = await checkResponse(response);
=======
    const response = await fetch(`https://openlibrary.org/search.json?q=${inputValue}&limit=25`);
    const data = await response.json();
    if (!response.ok) {
      console.log('error');
    }
>>>>>>> Stashed changes
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { fetchTrending, fetchSingleBook, fetchSearch };