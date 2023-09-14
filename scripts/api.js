export const getAllData = () => {
  return fetch('http://jservice.io/api/random?count=10')
    .then((res) => res.json())
    .then((data) => data);
};

export const getDataByCount = (count) => {
  return fetch(`http://jservice.io/api/random?count=${Number(count)}`)
    .then((res) => res.json())
    .then((data) => data);
};

//https://webdev-hw-api.vercel.app/api/todos/error
// async function getAllData () {
//     const response = await fetch('http://jservice.io/api/random?count=10')
//     const data = await response.json();
//     return data;
// }

// const getAllData = async () => {
//     const response = await fetch('http://jservice.io/api/random?count=10')
//     const data = await response.json();
//     return data;
// }
