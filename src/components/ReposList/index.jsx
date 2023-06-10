import { useEffect, useState } from "react";

import styles from './ReposList.module.css';

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    const [deuErro, setDeuErro] = useState(false);

    useEffect(() => {
        setEstaCarregando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false);
                setRepos(resJson);
            }, 2000);
        })
        .catch(e => {
            setDeuErro(true);
            console.log(e);
        })
    }, [nomeUsuario])

    if (deuErro) {
        return  (
            <div className="container">
                <h1>Erro ao carregar os repositórios, cheque o nome de usuário novamente.</h1>
            </div>
        )
    }

    return (
        <div className="container">
            {estaCarregando ? (
                <h1>Carregando...</h1>
            ) : (
                <ul className={styles.list}>
                    {repos.map(({ id, name, language, html_url}) => (
                        <li className={styles.listItem} key={id}>
                            <div className={styles.itemName}>
                                <b>Nome:</b> {name} <br />
                            </div>
                            <div className={styles.itemLanguage}>
                                <b>Linguagem:</b> {language} <br /> 
                            </div>               
                            <a className={styles.itemLink} target="_blank" href={html_url} rel="noreferrer">Visitar no Github</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default ReposList;