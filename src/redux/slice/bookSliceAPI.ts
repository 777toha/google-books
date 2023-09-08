const key: string = 'AIzaSyBhZaA02quSfoh0c_1I2oNrJGYUIMiD8yc';

export const fetchBooks = async (
  query: string,
  category: string,
  sorting: string,
) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&subject=${category}&orderBy=${sorting}&maxResults=30&key=${key}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    return response.json();
  } catch (error) {
    return error;
  }
};
