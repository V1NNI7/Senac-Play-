import React from 'react';
import GlobalMenu from '../../components/GlobalMenu'
import classes from './styles.module.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div className={classes.principalPage}>

                <img className={classes.imgLogo} src="./img/exampleImg.jpg" width="50" height="50" />
                <button type="button" className={classes.loginButton}><Link to="/login">Entrar</Link></button>

                <div className={classes.initialSection}>
                    <h4 class="mt-5">Tá afim de assistir um filme de ação? ou quem sabe um filme clássico? até mesmo uma comédia?</h4>
                    <h5>Crie sua conta no Senac Play e assista filmes de graça!</h5>
                    <button type="button" name="button" id="button" className={classes.registerButton}><Link to="/register">Criar conta</Link></button>
                </div>

            </div>
        </>
    );
}

export default Home;