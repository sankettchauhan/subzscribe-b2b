import React from 'react'
import LINKS from "../content/navbarLinks.json"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#deadlink">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        {LINKS.map((item, index) => (
                            <li className="nav-item" key={"navbar-link-" + item.name + "-" + { index }}>
                                <a className="nav-link" href="#deadlink"><span className={item.icon} />{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
