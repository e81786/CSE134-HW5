async function httpPost(e) {
  const http = document.getElementById("http");
  const output = document.getElementById("response");
  const request = await fetch("https://httpbin.org/post", {
    method: "POST",
    body: new FormData(http),
  });

  output.innerHTML = await request.text();
  output.style = "white-space: pre;";

  e.preventDefault();
}

async function httpGet(e) {
  const http = document.getElementById("http");
  const formData = new FormData(http);
  const data = [...formData.entries()];
  const asString = data
    .map((x) => `${encodeURIComponent(x[0])}=${encodeURIComponent(x[1])}`)
    .join("&");
  const output = document.getElementById("response");
  const request = await fetch(`https://httpbin.org/get?${asString}`, {
    method: "GET",
  });

  output.innerHTML = await request.text();
  output.style = "white-space: pre;";

  e.preventDefault();
}

async function httpPut(e) {
  const output = document.getElementById("response");
  const http = document.getElementById("http");
  const request = await fetch("https://httpbin.org/put", {
    method: "PUT",
    body: new FormData(http),
  });

  output.innerHTML = await request.text();
  output.style = "white-space: pre;";

  e.preventDefault();
}

async function httpDelete(e) {
  const output = document.getElementById("response");
  const http = document.getElementById("http");
  const request = await fetch("https://httpbin.org/delete", {
    method: "DELETE",
    body: new FormData(http),
  });

  output.innerHTML = await request.text();
  output.style = "white-space: pre;";

  e.preventDefault();
}

window.addEventListener("DOMContentLoaded", () => {
  const postBtn = document.getElementById("post");
  const getBtn = document.getElementById("get");
  const putBtn = document.getElementById("put");
  const deleteBtn = document.getElementById("delete");

  postBtn.addEventListener("click", httpPost);
  getBtn.addEventListener("click", httpGet);
  putBtn.addEventListener("click", httpPut);
  deleteBtn.addEventListener("click", httpDelete);
});
