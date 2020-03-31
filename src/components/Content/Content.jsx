import React from "react";
import s from "./Content.module.css";
import Posts from "./Posts/Posts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.photoPuppies}>
                <img src="https://wallpaperaccess.com/full/1101026.jpg" alt="image-puppies"/>
            </div>
            <div>
                ava + discription
            </div>
            <Posts />
        </div>
    );
}

export default Profile;