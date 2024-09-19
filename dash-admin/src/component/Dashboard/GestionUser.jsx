import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import '../CSS/Tabl.css';
import axios from 'axios';

Modal.setAppElement('#root');

function GestionUser() {
  const [users, setUsers] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const res = await axios.get('http://localhost:5000/user/all');
        setUsers(res.data.filter(user => user.role === 'client'));
      } catch (error) {
        console.log(error);
      }
    }
    getAllUsers();
  }, []);

  const openModal = (user) => {
    setSelectedUser(user);
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedUser(null);
  }

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:5000/user/${selectedUser.id}`, selectedUser);
      setUsers(users.map(user => (user.id === selectedUser.id ? selectedUser : user)));
      closeModal();
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedUser({ ...selectedUser, [name]: value });
  }
  const deleteLib = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/user/deleteusers/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.log(error);
    }
  }
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
                <h2 className="new-price">Gestion User</h2>
              </div>

              <div className="card-body">
                <div className="table-responsive">
                  <table className="table" id="table1">
                    <thead>
                      <tr>
                        <th>Nom</th>
                        <th>role</th>
                        <th>Email</th>
                        <th>modifier</th>
                        <th>supprimer</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((item) => (
                        <tr key={item.id}>
                          <td>{item.name}</td>
                          <td>{item.role}</td>
                          <td>{item.email}</td>
                          <td>
                            <button onClick={() => openModal(item)}>edit</button>
                          </td>
                          <td><button onClick={() => deleteLib(item.id)}>delete</button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
        <footer>
          <div className="footer clearfix mb-0 text-muted"></div>
        </footer>

        {/* Modal for Editing User */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Edit User"
          style={{
            content: {
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)'
            }
          }}
        >
          <h2>Edit User</h2>
          <form>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={selectedUser?.name || ''}
                onChange={handleChange}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={selectedUser?.email || ''}
                onChange={handleChange}
              />
            </label>
            <button type="button" onClick={handleSave}>Save</button>
            <button onClick={closeModal}>Cancel</button>
          </form>
        </Modal>
      </div>
    </div>
  );
}

export default GestionUser;
