import React from 'react'
import style from './Responses.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Response from "./Response";
import s from "../projects/project/Project.module.scss";



function Responses() {
    return (
        <div className={style.responseBlock}>
            <div className={`${styleContainer.container} ${style.responseContainer}`}>
                <Response title={"Considering remote work options"}
                />
                <button className={style.viewBtn}><a href={''}>Response</a></button>
            </div>
        </div>
    );
}

export default Responses;