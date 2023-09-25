import React from "react";

const Aside = ()=>{

    return (
        <div className="col-2 m-0">
                  <div className="row bgForm m-0">
                    
                    <div className=" border border-top-0" id="aside">
                      
                      <aside className="col-md-2 d-flex flex-column justify-content-between aside" style={{bottom:"1;"}} >
                        <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" >
                          <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                          </a>
                          <hr />
                          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            
                            <li className="nav-item dropdown ">
                              <a className="nav-link dropdown-toggle mx-2" href="/index" data-bs-toggle="dropdown" role="button" aria-expanded="false" >
                                <img src="/public/images/analisis.png" className="iconos"  alt="" /> Dashboard
                              </a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item "  href="/index">Departamentos</a></li>
                                <li><a className="dropdown-item "  href="/informes/graficos/localidades">Localidades</a></li>
                                <li><a className="dropdown-item " href="/informes/graficos/fecha">Por fecha</a></li>
                                <li><a className="dropdown-item " href="/informes/graficos/titulo">Por Titulo</a></li>
                                <li>
                                  <hr className="dropdown-divider" />
                                </li>
                              </ul>
                            </li>
                            
                            <li className="nav-item dropdown ">
                                <a className="nav-link dropdown-toggle mx-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  <img src="/public/images/formulario-de-llenado.png" alt="" className="iconos" /> Informes
                                </a>
                                <ul className="dropdown-menu">
                                  <li><a className="dropdown-item"  href="/informes/create">Cargar</a></li>
                                  <li><a className="dropdown-item" href="/informes/views">Filtros</a></li>
                                  <li>
                                    <hr className="dropdown-divider" />
                                  </li>
                                </ul>
                              </li>
                            <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle mx-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="/public/images/persona-de-pie.png" alt="" className="iconos" /> Personas
                              </a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/ver/personas">Buscar</a></li>
                                <li>
                                  <hr className="dropdown-divider" />
                                </li>
                              </ul>
                            </li>
                            <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle mx-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="/public/images/personas.png" alt="" className="iconos"/> Usuarios
                              </a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/view/usuarios">Ver</a></li>
                                <li>
                                  <hr className="dropdown-divider" />
                                </li>
                              </ul>
                            </li>
                          </ul>
                          <hr />
                        </div>
                        </aside>
                    </div>
        </div>
        </div>
    )};

export default Aside;