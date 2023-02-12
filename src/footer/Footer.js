import React from 'react'
import style from './Footer.module.css';
import styleContainer from '../common/styles/Container.module.css'


function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerBlock}`}>
                <h2>Anny Sadovskaya</h2>
               <div className={style.footer}>
                   <div className={style.form}>
                </div>
                  <div className={style.form}>
                </div>
                  <div className={style.form}>
                </div>
                  <div className={style.form}>
                </div>
                  <div className={style.form}>
                </div>

            </div>

                <p className={style.color}>© 2021 All Rights Reserved.</p>
            </div>
        </div>
    );
}

export default Footer;