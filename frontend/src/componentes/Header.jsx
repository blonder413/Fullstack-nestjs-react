import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <header className="header-area">
            <div className="top-header-area">
                <div className="container h-100">
                    <div className="row h-100 align-items-center justify-content-between">
                        <div className="col-12 col-sm-6">
                            <div className="breaking-news">
                                <div id="breakingNewsTicker" className="ticker">
                                    <ul>
                                        <li>
                                            <a href="mailto:info@recetarioflaite.cl">
                                                info@recetarioflaite.cl
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6">
                            <div className="top-social-info text-right">
                                <a href="https://mastodon.la/@blonder413">
                                    <i
                                        className="fa fa-mastodon"
                                        aria-hidden="true"
                                    ></i>
                                </a>
                                <a href="https://blonder413.wordpress.com/">
                                    <i
                                        className="fa fa-wordpress"
                                        aria-hidden="true"
                                    ></i>
                                </a>
                                <a href="https://www.linkedin.com/in/blonder413/">
                                    <i
                                        className="fa fa-linkedin"
                                        aria-hidden="true"
                                    ></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="delicious-main-menu">
                <div className="classy-nav-container breakpoint-off">
                    <div className="container">
                        <nav
                            className="classy-navbar justify-content-between"
                            id="deliciousNav"
                        >
                            <NavLink to='/' className="nav-brand">
                                <img
                                    src="/img/core-img/logo2.png"
                                    alt="logo"
                                    style={{ width: 144, height: 65 }}
                                />
                            </NavLink>

                            <div className="classy-navbar-toggler">
                                <span className="navbarToggler">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                            </div>

                            <div className="classy-menu">
                                <div className="classycloseIcon">
                                    <div className="cross-wrap">
                                        <span className="top"></span>
                                        <span className="bottom"></span>
                                    </div>
                                </div>

                                <div className="classynav">
                                    <ul>
                                        <li>
                                            <NavLink to="/">Home</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/nosotros">
                                                Sobre Nosotros
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/recetas">
                                                Recetas
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/contacto">
                                                Contacto
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/registro">
                                                Registro
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/login">
                                                Login
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};
