import React, { useEffect, useState } from "react";
import '../CSS/Tabl.css';
import axios from 'axios'
function GestionBooks() {
  const [offre , setOffre] = useState();
useEffect(()=>{
  const getAllUsers = async()=>{
    try {
      const res = await axios.get('http://localhost:5000/product');
      console.log(res.data)
      setOffre(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  getAllUsers();
},[])

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
                <h2 className="new-price">Gestion Books</h2>
              </div>

              <div className="card-body">
                <div className="table-responsive">
                  <table className="table" id="table1">
                    <thead>
                      <tr>
                        <th>Nom</th>
                        <th>Description</th>
                        <th>Prix</th>
                        <th>communauté</th>
                        <th>status</th>
                       
                      </tr>
                    </thead>
                    <tbody>
                      {offre?.map((item)=>(
                        <tr>
                        <td>
                         {item.nom} 
                        </td>
                        <td>{item.description}</td>
                        <td>{item.prix}dt</td>
                        <td>{item.communauté} </td>
                        <td>{item.status}</td>
                      </tr>
                      ))}
                      
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

export default GestionBooks;
