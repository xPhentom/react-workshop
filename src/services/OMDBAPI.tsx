/* 
JavaScript used to have issues with loading data into your application. It would cause you to do nothing else until the data is loaded.
This has been changed by introducing async functions. Whatever is in the async function will not stop other code from doing their thing.
In here we just tell our code to wait for a response coming from the API, then convert it to json and return it as a response.
*/
export const callOMDBApi = async (movieTitle: string) => {
    let data = await fetch(`http://www.omdbapi.com/?s=${movieTitle}&type=movie&apiKey=bc3e1659`)
    let response = await data.json()
    return response
}