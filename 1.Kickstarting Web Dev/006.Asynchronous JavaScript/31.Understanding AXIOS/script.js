const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");
const putBtn = document.getElementById("put-btn");
const deleteBtn = document.getElementById("delete-btn");

getBtn.addEventListener("click", getTodos);
postBtn.addEventListener("click", postTodo);
putBtn.addEventListener("click", putTodo);
deleteBtn.addEventListener("click", deleteTodo);

function getTodos() {
  // Write your code here
  axios
    .get(
    //url
      "https://crudcrud.com/api/060974a1b91c44c484446dacdc644397",
  )
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
}

function postTodo() {
  // Write your code here
  axios
    .post(
    //url
      "https://crudcrud.com/api/060974a1b91c44c484446dacdc644397",
    {
      title: "Learn Axios",
      completed: "false"
    }
  )
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error));
}

function putTodo() {
  // Write your code here
  axios
    .put(
      //url // /id
      "https://crudcrud.com/api/060974a1b91c44c484446dacdc644397",
      {
        title: "Learn Axios",
        completed: "true"
      }
    )
}

function deleteTodo() {
  // Write your code here
  axios
    .delete(
      //url
      "https://crudcrud.com/api/060974a1b91c44c484446dacdc644397",
    )
}