const flatagramAPI = "http://localhost:3000/images/1"
const cardTitle = document.querySelector("#card-title")
const cardImage = document.querySelector("#card-image")

// add likes
const likeCount = document.querySelector("#like-count")

const commentsList = document.querySelector("#comments-list")
const form = document.querySelector("#comment-form")
const likeButton = document.querySelector("#like-button")
let likesCount = {likes: 0}

// add event listener to like button
likeButton.addEventListener("click", () => {
    likesCount.likes += 1
    likeCount.textContent = `${likesCount.likes} likes`
})

// make fetch request
fetch(flatagramAPI)
.then((r) => r.json())
.then(renderFlatagram)

function renderFlatagram(dataObj) {
    likesCount.likes = dataObj.likes

    cardTitle.textContent = dataObj.title
    cardImage.src = dataObj.image
    likeCount.textContent =`${dataObj.likes} likes`
 
    renderComments(dataObj.comments)
}

function renderComments(comments) {
    commentsList.innerHTML = ""
    comments.forEach(renderCommentsToPage)
}

function renderCommentsToPage(comment) {
    const li = document.createElement("li")
         
    commentsList.append(li)
    li.textContent = comment.content
}
