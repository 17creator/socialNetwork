import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img className={s.img}
                 src="https://cr-mp.ru/forum/uploads/monthly_2019_07/2.thumb.png.4bf6d70498bfc47585ccc6bc94d3390b.png"
                 alt="userAva"/>
            {props.message}
            <div>
                <span>Like {props.countLike}</span>


            </div>
        </div>
    );
}

export default Post;