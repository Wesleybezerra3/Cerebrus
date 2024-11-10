import logo from '../../../../assets/logo.svg'
import styles from './style.module.css'
export function Header(){

    return(
        <>
         <nav className={styles.nav}>
          <img src={logo} alt="" />
         </nav>
        </>
    )
}