fetch('https://jsonplaceholder.typicode.com/todos')
    .then(result => result.json())
  .then((res) => {
    createCard(res);
  })
.catch(err => console.log(err))

function createCard(result) {
  for (var i = 0; i < result.length; i++) {

    var list = document.getElementById('todoCards');
    //var create = document.createElement('ul');
    //var li = document.createElement('li');

    list.innerHTML += "<ul>" + "<li><span>User ID: </span>" + result[i].userId + "</li>" + "<li><span>ID: </span>" + result[i].id + "</li>" + "<li><span>Title: </span>" + result[i].title + "</li>" + "<li><span>Completed: </span>" + result[i].completed + "</li>" + "</ul>";
  }
}
