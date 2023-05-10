import axios from "axios";

async function getData(num) {
  let users = async (num) => {
    let { data } = await axios(
      "https://jsonplaceholder.typicode.com/users/" + num
    );
    console.log(data);
  };

  let posts = async (num) => {
    let { data } = await axios(
      "https://jsonplaceholder.typicode.com/posts?id=" + num
    );
    console.log(data);
  };

  const userId = await users(num);
  const postUser = await posts(num);
  return userId + postUser;
}

export default getData(1);
