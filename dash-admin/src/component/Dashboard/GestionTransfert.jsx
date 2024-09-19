import React from "react";
import '../CSS/Tabl.css';

function GestionTransfert() {


  return (
    <div className="content-container">
      <div id="app">
        <div id="main">
          <header className="mb-3">
            <a href="#" className="burger-btn d-block d-xl-none">
              <i className="bi bi-justify fs-3" />
            </a>
          </header>
          <section className="section">
            <div className="card">
              <div className="card-header">
                <h2 className="new-price">Gestion Transfert</h2>
              </div>

              <div className="card-body">
                <div className="table-responsive">
                  <table className="table" id="table1">
                    <thead>
                      <tr>
                        <th>Nom</th>
                        <th>Firts User</th>
                        <th>Seconde User</th>
                        <th>Produit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                         Darsoufa 
                        </td>
                        <td>Mahdia</td>
                        <td>Soussa</td>
                        <td>Produit</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* Contextual classes end */}
        <footer>
          <div className="footer clearfix mb-0 text-muted"></div>
        </footer>
      </div>
    </div>
  );
}

export default GestionTransfert;
