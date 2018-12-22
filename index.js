axios
  .get("https://api.github.com/users/adenilson-santos")
  .then(function(response) {
    data(response);
  })
  .catch(function(error) {
    console.log(error);
  });

function data(object) {
  document.querySelector(".git").innerHTML = object.data.public_repos;
  console.log(object.data.public_repos);
}
