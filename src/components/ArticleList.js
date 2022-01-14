import React from "react";
import Article from "./Article";

function ArticleList({posts}){
    const articleItems= posts.map((post)=>(
        <Article
            key={post.id}
            title={post.title}
            date={post.date}
            preview={post.preview}
            mins={post.minutes}
        />
    ))
    return (
        <main>
            {articleItems}
        </main>
    )
}

export default ArticleList;