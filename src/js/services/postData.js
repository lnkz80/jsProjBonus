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

const postData = (reqMethod, reqUrl) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(reqMethod, reqUrl);

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };

    xhr.onerror = () => {
      reject(xhr.response);
    };

    xhr.send();
  });
};

export default postData;
