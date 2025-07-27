import Styles from "./Footer.module.css"
export default function Footer({CompletedTodos,Total}){
    return   <div className={Styles.footer}>
    <span className={Styles.item}>No. of Completed Task:{CompletedTodos}</span><span className={Styles.item}>Total : {Total}</span>
    </div>
}