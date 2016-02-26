function GetRepos(username, callback) {
  var http = new XMLHttpRequest()
  http.addEventListener("load", callback)
  http.open("GET", "https://api.github.com/users/" + username + "/repos")
  http.send()
}
