var comment = document.getElementById("comment");
var userName = document.getElementById("userName");
var submit = document.getElementById("submit");
var commentsDiv = document.getElementById("commentsDiv");
var classComments = [];

submit.addEventListener("click", function (e) {
  e.preventDefault();
  if (comment.value && userName.value) {
    var commentToPush = {
      personComment: comment.value,
      personName: userName.value,
    };

    comment.value = "";
    userName.value = "";
    classComments.push(commentToPush);
    appendCommentsToDom();
  } else {
    alert("Please enter a comment and a name");
  }
});

function appendCommentsToDom() {
  commentsDiv.innerHTML = "";

  for (let i = 0; i < classComments.length; i++) {
    var mainDiv = document.createElement("div");
    mainDiv.setAttribute("class", "columns ");
    var div = document.createElement("div");
    div.setAttribute("class", "column has-text-centered ");
    var h51 = document.createElement("h5");
    h51.textContent = "Comment: " + classComments[i].personComment;
    var h52 = document.createElement("h5");
    h52.textContent = "By: " + classComments[i].personName;
    var but = document.createElement("button");
    but.textContent = "Delete";
    but.setAttribute("class", "button is-danger");
    but.setAttribute("data-value", [i]);
    var hr = document.createElement("hr");
    mainDiv.appendChild(div);
    div.appendChild(h51);
    div.appendChild(h52);
    div.appendChild(but);
    div.appendChild(hr);

    commentsDiv.appendChild(div);
  }
}

document.body.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.matches("button") && e.target.getAttribute("id") !== "submit") {
    var index = e.target.getAttribute("data-value");

    classComments.splice(index, 1);
    appendCommentsToDom();
  }
});
