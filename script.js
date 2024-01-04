document.querySelector("#submit").addEventListener("click", function () {
    var cont = document.querySelector("#caption").value;
    if (cont.length > 0) {
        console.log(cont);
        var post = document.createElement("p");
        post.classList.add("container-style");
        post.textContent = cont;
        document.querySelector("#container").appendChild(post);
    } else {
        alert("Write something to post !");
    }
});