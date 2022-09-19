//XHR
// const postData = (reqMethod, reqUrl) => {
//   const request = new XMLHttpRequest();
//   request.open(reqMethod, reqUrl);
//   request.setRequestHeader("Content-type", "application/json; charset=utf-8");
//   request.responseType = "JSON";
//   request.send();

//   request.addEventListener("load", () => {
//     console.log(JSON.parse(request.response));
//   });
// };

//VAR 2 - Minin ex
// const postData = (reqMethod, reqUrl) => {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();

//     xhr.open(reqMethod, reqUrl);

//     xhr.onload = () => {
//       if (xhr.status >= 400) {
//         reject(xhr.response);
//       } else {
//         resolve(xhr.response);
//       }
//     };

//     xhr.onerror = () => {
//       reject(xhr.response);
//     };

//     xhr.send();
//   });
// };

//VAR 3 - FETCH
const postData = async (url, data = null) => {
  const postSettings = {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  };

  const req = await fetch(url, data ? postSettings : null);
  if (!req.ok) {
    throw new Error(`Could not fetch ${url}, receive status ${req.status}`);
  }
  return await req.json();
};
export default postData;
