// import axios from "axios";

// const BASE_URL = "http://localhost:4000/";

// var Axios = axios.create({
//   withCredentials: true,
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${localStorage.token}`,
//   },
// });

// export default {
//   async get(endpoint, data) {
//     console.log(endpoint, data);
//     return ajax(endpoint, "get", data);
//   },
//   async post(endpoint, data) {
//     return ajax(endpoint, "post", data);
//   },
//   async put(endpoint, data) {
//     return ajax(endpoint, "put", data);
//   },
//   async delete(endpoint, data) {
//     return ajax(endpoint, "delete", data);
//   },
// };

// // async function ajax(endpoint, method = "get", data = null) {
// //   console.log(BASE_URL, endpoint, method, data, `Bearer ${localStorage.token}`);
// //   console.log({ Authorization: `Bearer ${localStorage.token}` });

// //   try {
// //     const res = await Axios({
// //       url: `${BASE_URL}${endpoint}`,
// //       method,
// //       data,
// //     });
// //     return res.data;
// //   } catch (err) {
// //     console.log(
// //       `Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: ${data}`
// //     );
// //     console.dir(err);
// //     if (err.response && err.response.status === 401) {
// //       //   history.push("/");
// //     }
// //     throw err;
// //   }
// // }
