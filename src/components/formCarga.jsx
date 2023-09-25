import React from "react";


const FormCarga = ()=>{

    return (
    <main className="col-10 ">
        <div className="bgForm py-2">
                <div className="card shadow">
                  <div className="card-body ">
                    <div className="container d-flex ">
                      <h4>Cargar Informes</h4>
                    </div>
                  </div>
                </div>
            <br />
                <div className="card  shadow">
                  <div className="card-body">
                    <div className=" form-cargar">
                      <form action="" className="row g-3 needs-validation" id="formNuevoInforme" enctype="multipart/form-data">
                          <div className="col-md-3 position-relative">
                              <label for="validationTooltip04" className="form-label"><b>Departamento</b></label>
                              <select className="form-select input" id="selecDepartamento" required>
                                <option value="1">Formosa</option>
                                <option value="2">Pilcomayo</option>
                                <option value="3">Pilagás</option>
                                <option value="4">Laishí</option>
                                <option value="5">Pirané</option>
                                <option value="6">Patiño</option>
                                <option value="7">Bermejo</option>
                                <option value="8">Ramon Lista</option> 
                                <option value="9">Matacos</option>
                              </select>
                            </div>
                            <div className="col-md-3 position-relative">
                              <label for="validationTooltip04" className="form-label"><b>Localidad</b></label>
                              <select className="form-select input" id="selecLocalidad" required>
                                <option selected disabled>Selecciona una opción</option>
                              </select>
                              <div className="invalid-tooltip">
                                Please select a valid state.
                              </div>
                            </div>
                            <div className="col-md-3 position-relative">
                              <label for="validationTooltip04" className="form-label"><b>Tipo</b></label>
                              <select className="form-select input" id="tipo" required>
                                <option value="1">Política</option>
                                <option value="2">Institucional</option>
                                <option value="3">Educación</option>
                                <option value="4">Religioso</option>
                                <option value="5">Proselitismo</option>
                                <option value="6">Salud</option>
                                <option value="7">Seguridad</option>
                                <option value="8">Eventos Climáticos</option>
                                <option value="9">Hídricos</option>
                              </select>
                            </div>
                          <div className="col-md-2 position-relative">
                            <label for="validationTooltip02" className="form-label"><b>Fecha</b></label>
                            <input type="date" className="form-control input" id="fecha" value="" required />
                          </div>
                          <div className="col-md-3 position-relative">
                            <label for="validationTooltipUsername" className="form-label"><b>Titulo</b></label>
                            <div className="input-group has-validation">
                              <input type="text" className="form-control input" id="titulo" aria-describedby="validationTooltipUsernamePrepend" required/>
                            </div>
                          </div>
                          <div className="col-md-3 position-relative">
                              <label className="input-group-text " for="inputGroupFile01"><b>Imagenes</b></label>
                              <input type="file" className="form-control input" id="rutaImagen" name="rutaImagen" />
                            </div>   
                            <div className="col-md-3 position-relative">
                              <label for="validationTooltipUsername" className="form-label" ><b>Observaciones</b></label>
                              <div className="input-group has-validation">
                                <input type="text" className="form-control input" id="observaciones" aria-describedby="validationTooltipUsernamePrepend" required />
                              </div>
                            </div>           
                            <div className="mb-1">
                              <label for="exampleFormControlTextarea1" className="form-label"><b>Informe</b></label>
                              <textarea className="form-control input" id="informe" rows="3" ></textarea>                
                              <div className="mb-1" id="seccionPersonas">
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalCategoryCreate" >
                                  Personas
                                </button>
                                <div>
                                  <div className="container">
                                    <div className="row" id="formPeople">
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="modal fade" id="modalCategoryCreate" tabindex="-1" aria-labelledby="modalCategoryCreateLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h1 className="modal-title fs-5" id="modalCategoryCreateLabel">Personas</h1>
                                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                      <form action="" id="formPerson">
                                        <div className="mb-3">
                                          <label for="dni" className="form-label">DNI</label>
                                          <input type="text" className="form-control" id="dni" name="dni" placeholder="41176787" />
                                        </div>
                                        <div className="mb-3">
                                          <label for="lastName" className="form-label">Apellido</label>
                                          <input type="text" className="form-control" id="lastName" name="lastName" />
                                        </div>
                                        <div className="mb-3">
                                          <label for="firstName" className="form-label">Nombres</label>
                                          <input type="text" className="form-control" id="firstName" name="firstName" />
                                        </div>
                                        <div className="mb-3">
                                          <label for="address" className="form-label">Domicilio</label>
                                          <input type="text" className="form-control" id="address" name="address" />
                                        </div>
                                        <div className="mb-3">
                                          <label for="description" className="form-label">Observaciones</label>
                                          <textarea className="form-control" id="description" name="description"></textarea>
                                        </div>
                                      </form>
                                    </div>
                                    <div className="modal-footer">
                                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                      <button  id="guardarPersona" className="btn btn-primary">Guardar</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              

                              <button className="btn btn-primary" type="submit">Cargar Informe</button>
                              <button className="btn btn-secondary" type="reset">Borrar campos</button>
                              
                            </div>                                        
                        </form>
                        
                  </div>
                  
                  </div>
                  
                </div>
          </div>
          </main>

    )};


export default FormCarga;