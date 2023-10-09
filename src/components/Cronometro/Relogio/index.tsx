import React from "react";
import style from "./Relogio.module.scss"
export default function Relogio(){
    return (
        <React.Fragment /* Isso burla a necessidade de uma tag pai, e ainda a mesma não é exibida */>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioNumero}>0</span>
        </React.Fragment>
    )
}