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

// const fetchCovers = async (id) => {
//   try {
//     const response = await fetch(`https://covers.openlibrary.org/b/id/${id}-M.jpg`);
//     const data = await response;
//     if (!response.ok) {
//       console.log('error');
//     }
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

export { fetchTrending };