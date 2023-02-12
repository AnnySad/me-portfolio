import React from 'react'
import style from './Responses.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Response from "./Response";



function Responses() {
    return (
        <div className={style.responseBlock}>
            <div className={`${styleContainer.container} ${style.responseContainer}`}>
                <Response title={"Рассматриваю варианты удаленной работы"}
                />
                <button><a href={''}>Response</a></button>
            </div>
        </div>
    );
}

export default Responses;