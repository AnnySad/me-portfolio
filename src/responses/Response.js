import React from 'react'
import style from './Response.module.css';

function Response(props) {
    return (<div>
            <div className={style.response}>
                <p>{props.title}</p>
            </div>
        </div>
    );
}

export default Response;
