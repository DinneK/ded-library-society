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

// const fetchDescriptions = async () => {
//   try {
//     const response = await fetch('https://openlibrary.org/works/OL17590212W.json');
//     const data = await response.json();
//     if (!response.ok) {
//       console.log('error');
//     }
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }

export { fetchTrending };