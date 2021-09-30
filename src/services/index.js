import axios from "axios";

export function requestGetUser(id = 1) {
  console.log("api called with : ", id);
  return axios.request({
    method: "get",
    url: `https://jsonplaceholder.typicode.com/users/${id}`
  });
}
