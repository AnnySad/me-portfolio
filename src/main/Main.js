import React from 'react';
import s from "./Main.module.css"
import style from "../common/styles/Container.module.css"
import TypedReactDemo from "./text";

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={style.container}>
            <div className={s.text}>
                <span>Hi There</span>
                <h1>I am Anny Sadovskaya</h1>
                <p>
                    <TypedReactDemo
                        strings={[
                            'Frontend Developer.',
                            'React Developer.',
                            'летим...',
                            'Frontend Developer.',
                            'React Developer.',
                            'Just do it...'
                        ]}
                    />
                </p>

            </div>
            <div className={s.photo}><img /></div>
            </div>
        </div>
    );
};
