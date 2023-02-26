function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(posts=>dispalayPost(posts))
}

function dispalayPost(posts){
    const postContainer=document.getElementById('post-container')
    for(const post of posts){
        // console.log(post)
        const div=document.createElement('div')
        div.classList.add('post')
        div.innerHTML=`
        <h3>Post-id: ${post.id}</h3>
        <h4>Post-title: ${post.title}</h4>
        <h4>Post-description: ${post.body}</h4>`
        postContainer.appendChild(div)
    }
}
loadPost()