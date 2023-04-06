import React from 'react'
import style from './Response.module.scss';
import s from "../projects/project/Project.module.scss";

function Response(props) {
    return (<div>
            <div className={style.response}>
                <p className={style.proTitle}>{props.title}</p>
            </div>
        </div>
    );
}

export default Response;
