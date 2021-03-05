import React from 'react';
import { Link } from 'react-router-dom'
import classes from './styles.module.css'

function GlobalMenu() {
    return (
        <nav className={classes.navBar}>
            <Link to="/">Página Principal</Link>
            <Link to="/filmsList">Lista de Filmes</Link>
            <Link to="/register">Cadastro de Usuário</Link>
        </nav>
    );
}

export default GlobalMenu;