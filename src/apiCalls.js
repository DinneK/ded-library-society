const checkResponse = (res) => {
  if (!res.ok) {
    throw new Error(`Status: ${res.status} StatusText: ${res.status.text}`);
  }
  return res.json();
};

const fetchTrending = async () => {
  try {
    const response = await fetch("https://openlibrary.org/trending/daily.json");
    const data = await checkResponse(response);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchSingleBook = async (id) => {
  try {
    const response = await fetch(`https://openlibrary.org/works/${id}.json`);
    const data = await checkResponse(response);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchSearch = async (inputValue) => {
  try {
    const response = await fetch(
      `https://openlibrary.org/search.json?title=${inputValue}&limit=20`
    );
    const data = await checkResponse(response);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { fetchTrending, fetchSingleBook, fetchSearch };
