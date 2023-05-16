import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark align-items-center">
            <div className="container">
                <Link className="navbar-brand" to="/">React Futs</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <Link className="nav-a text-white mx-2" to="/">Home</Link>
                        <Link className="nav-a text-white mx-2 item-hover" to="/partidas">Partidas</Link>
                        <Link className="nav-a text-white mx-2" to="/times">Times</Link>
                        <Link className="nav-a text-white mx-2" to="/jogadores">Jogadores</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;