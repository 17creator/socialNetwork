import React from "react";
import s from "./Content.module.css";

const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.photoPuppies}>
                <img src="https://wallpaperaccess.com/full/1101026.jpg" alt="image-puppies"/>
            </div>
            <div>
                ava + discription
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        Post1
                    </div>
                    <div className={s.item}>
                        Post2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;