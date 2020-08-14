var count = 0;

function like() {
  let likeCount = document.querySelector("#like");
  count++;
  likeCount.innerHTML = count;
}
function Dislike() {
  let DislikeCount = document.querySelector("#Dislike");
  count++;
  DislikeCount.innerHTML = count;
}

function Comment() {
  let inpvalue = document.querySelector("#inp").value;
  let clonevalue = document.querySelector("#placeComment").cloneNode(true);

  clonevalue.innerHTML = inpvalue;
  let commentDiv = document.querySelector("#commentDiv");

  commentDiv.insertBefore(clonevalue, commentDiv.firstChild)
}