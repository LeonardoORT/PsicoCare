function addPost() {
    const postContent = document.getElementById('postContent').value;
    if (postContent.trim() !== "") {
        const postsList = document.getElementById('postsList');
        const newPost = document.createElement('li');
        newPost.innerHTML = `
            <p>${postContent}</p>
            <button onclick="showReplyForm(this)">Responder</button>
            <div class="reply-form" style="display:none;">
                <textarea rows="2" placeholder="Escribe tu respuesta..."></textarea>
                <button onclick="addReply(this)">Enviar</button>
            </div>
            <ul class="replies"></ul>
        `;
        postsList.appendChild(newPost);
        document.getElementById('postContent').value = "";
    }
}

function showReplyForm(button) {
    const replyForm = button.nextElementSibling;
    replyForm.style.display = replyForm.style.display === "none" ? "block" : "none";
}

function addReply(button) {
    const replyContent = button.previousElementSibling.value;
    if (replyContent.trim() !== "") {
        const repliesList = button.parentElement.nextElementSibling;
        const newReply = document.createElement('li');
        newReply.textContent = replyContent;
        repliesList.appendChild(newReply);
        button.previousElementSibling.value = "";
        button.parentElement.style.display = "none";
    }
}
