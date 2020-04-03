import React from "react";
import s from "./Posts.module.css";
import Post from "./Post/Post";

const Posts = () => {
    return (
        <div>
            <Post message='Hi, how old are you?' countLike='40'/>
            <Post message='Its my first post' countLike='20' />
        </div>

    );
}

export default Posts;