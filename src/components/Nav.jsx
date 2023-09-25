import React from "react";

const Nav = () => {
  return (
    <>
      <header className="p-3 text-bg-dark shadow">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/index" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              <img className="bi mr-2" width="40" height="32" role="img" src="/public/images/iconoLogin.png" alt="Logo" />
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><a href="/index" className="nav-link px-2 text-secondary">Home</a></li>
              <li><a href="/informes/views" className="nav-link px-2 text-white">Informes</a></li>
              <li><a href="/ver/personas" className="nav-link px-2 text-white">Personas</a></li>
              <li><a href="/view/usuarios" className="nav-link px-2 text-white">Usuarios</a></li>
              <li><a href="#" className="nav-link px-2 text-white">About</a></li>
            </ul>

            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" />
            </form>

            <div className="text-end">
              <div className="dropdown d-flex justify-content-end pt-2 mb-2">
                <a href="#" className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="/public/images/perfil.png" alt="Perfil de usuario" width="32" height="32" className="rounded-circle me-2" />
                  <strong>Admin</strong>
                </a>
                <ul className="dropdown-menu text-small">
                  <li><a className="dropdown-item" href="#">Modificar</a></li>
                  <li><a className="dropdown-item" href="#">Perfil</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/closeSesion">Cerrar sesión</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;
