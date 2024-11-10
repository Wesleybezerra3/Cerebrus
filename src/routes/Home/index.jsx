import {Link} from 'react-router-dom'
import { Contador } from './components/contador/Contador'
import { Header } from './components/Header/Header'
import styles from './style.module.css'
export function Home(){

    return(
        <>
        <Header/>
        <h1 className={styles.h1} >Conhecimentos Gerais</h1>
        <Contador/>
        {/* <Link to='QuizOne'>Jogar</Link> */}
        </>
    )
}