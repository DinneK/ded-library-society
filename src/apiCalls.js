const checkResponse = (res) => {
  if (!res.ok) {
    console.log(res.status)
    console.log(res.status.text)
    
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
    console.log(error)
    // return `Uh-Oh! That's a 404 Error`
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
    const response = await fetch(`https://openlibrary.org/search.json?q=${inputValue}`);
    const data = await checkResponse(response);
    return data;
  } catch (error) {
    return error;
  }
};

export { fetchTrending, fetchSingleBook, fetchSearch };
