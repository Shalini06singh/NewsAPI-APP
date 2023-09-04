export const getNewsByApi = async (category = "all") => {
  let response = await fetch(
    `https://newsapi.org/v2/everything?q=${category}&apiKey=21561d99a5564d8ebaedfbae78634e72`
  );
  let data = await response.json();
  return data.articles;
};
