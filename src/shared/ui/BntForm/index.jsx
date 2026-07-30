import styles from "./Btn.module.css"

export default  function BntForm({children,...props}){
    return(
        <button  {...props} className={styles.btn_form}>
          {children}
        </button>
    )
}