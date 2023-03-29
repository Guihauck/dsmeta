import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="Infelizmente a foto não existe!" />
                <h1>DSMeta</h1>
                <p>Desenvolvido por
                    <a href="https://www.instagram.com/guihauck1998/" target="_blank">@Guilherme Hauck</a>
                </p>
            </div>
        </header>

    )
}

export default Header;