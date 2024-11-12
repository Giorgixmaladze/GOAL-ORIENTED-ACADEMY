const main = document.querySelector("main")


function fetchData(){
    const data = fetch('https://dummyjson.com/posts')
    data
        .then(res => res.json())
        
        .then(res => renderInfo(res.posts))
}


function renderInfo(info){
    info.forEach(post => {
        main.innerHTML +=`
        <div >
            <h2>Title: ${post.title}</h2>
            <hr>
            <p>body: ${post.body}
            <hr>
            <p> Views: ${post.views}
            <hr>
            <p>Likes: ${post.reactions.likes}
            <hr>
            <p>Dislikes ${post.reactions.dislikes}

        </div>
        `
        console.log(post)
    });
}

fetchData()

    
