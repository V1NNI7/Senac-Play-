import React from 'react';
import { useFormik } from 'formik';
import GlobalMenu from '../../components/GlobalMenu'
import * as Yup from 'yup';
import classes from './styles.module.css';
import { Link } from 'react-router-dom';

const Register = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            user: '',
            password: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required(' Obrigatório'),
            email: Yup.string().email(' E-mail inválido').required('Obrigatório'),
            user: Yup.string().required(' Obrigatório'),
            password: Yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                "Senha Fraca").required(' Obrigatório'),
        }),

        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    return (
        <>


            <nav className={classes.leftArrow}>
                <Link to="/" className={classes.backButton}><i class="fas fa-arrow-circle-left fa-3x"></i></Link>
            </nav>
            <div className={classes.totalPage}>
                <div className={classes.page}>
                    <h1 className={classes.title}>Cadrasto</h1>
                    <form onSubmit={formik.handleSubmit}>
                        <div className={classes.registerPage}>
                            <div className={classes.name}>
                                <label htmlFor="name">Nome completo: </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Seu nome"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.name}
                                />
                                {formik.touched.name && formik.errors.name ? <label htmlFor="name" className={classes.error}>{formik.errors.name}</label> : null}
                            </div>
                            <div className={classes.email}>
                                <label htmlFor="email">E-mail: </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="text"
                                    placeholder="Email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                />
                                {formik.touched.email && formik.errors.email ? <label htmlFor="email" className={classes.error}>{formik.errors.email}</label> : null}
                            </div>
                            <div className={classes.user}>
                                <label htmlFor="user">Usuário: </label>
                                <input
                                    id="user"
                                    name="user"
                                    type="text"
                                    placeholder="Usuário"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.user}
                                />
                                {formik.touched.user && formik.errors.user ? <label htmlFor="user" className={classes.error}>{formik.errors.user}</label> : null}
                            </div>
                            <div className={classes.password}>
                                <label htmlFor="password">Senha: </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Sua senha deve conter 8 caracteres sendo eles números, letra maiúscula, minúscula e 1 caracter especial"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                />
                                {formik.touched.password && formik.errors.password ? <label htmlFor="password" className={classes.error}>{formik.errors.password}</label> : null}
                            </div>
                        </div>
                        <button className={classes.button} type="submit" name="submit" id="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </>
    );
};


export default Register;