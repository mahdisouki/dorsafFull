import React, { useState } from 'react';
import '../../CSS/NouveauOffre.css';
import axios from 'axios';
import Cookies from "js-cookie"
import Map from './Map';
const NouveauOffre = () => {
  const [data , setData] = useState({});
  const [title, setTitle] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [domain, setDomain] = useState('Etudiant');
  const [community, setCommunity] = useState('livres 3eme années');
  const [type, setType] = useState('Vendre');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [offer , setOffer] = useState({nom :"", description:"", prix:"", quantityDispo:"" ,communauté:"" , adresse:"" , images:[] , status:"" , numtel:""})
  const token = Cookies.get('token');
  const handleImageChange = (e) => {
    const newImage = URL.createObjectURL(e.target.files[0]);
    setOffer(prevOffer => ({
      ...prevOffer,
      images: [...prevOffer.images, newImage]
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(Cookies.get('token'))
    console.log(offer)
    try {
      const res = await axios.post('http://localhost:5000/product' , offer , { headers : {Authorization: `Bearer ${token}`}});
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="share-offer">
      <h2>Partager un nouveau offre</h2>
      <form onSubmit={handleSubmit}>
        
          <label className="lbl-info-g">
            Titre:
            <input  className="inpt-info-g" type="text" value={offer.nom} onChange={(e) => setOffer({...offer , nom:e.target.value})} />
          </label>
        <label className="lbl-info-g">
          Téléphone:
          <input className="inpt-info-g" placeholder=' +216..'  type="text" value={offer.numtel} onChange={(e) => setOffer({...offer , numtel:e.target.value})} />
        </label>
        <label className="lbl-info-g">
          Adresse:
          <input className="inpt-info-g"  type="text" value={offer.adresse} onChange={(e) =>setOffer({...offer , adresse:e.target.value})} />
        </label>
        <div className="right-accueil">
    <Map/>
        </div>
        <label className="lbl-info-g">
          type:
          <select value={offer.status} onChange={(e) => setOffer({...offer , status:e.target.value})}>
            <option value="echange">echange</option>
            <option value="don">don</option>
            <option value="vente">vente</option>
          </select>
        </label>
        <label className="lbl-info-g">
          Communauté:
          <select value={offer.communauté} onChange={(e) => setOffer({...offer , communauté:e.target.value})}>
            <option value="livres 3eme années">livres 3eme années</option>
            <option value="livres 4eme années">livres 4eme années</option>
            <option value="livres 5eme années">livres 5eme années</option>
            <option value="livres 6eme années">livres 6eme années</option>
            {/* Add more options as needed */}
          </select>
        </label>
        <br/>
        <div className='deux-ona'>
         
          <label className="lbl-info-g">
          Prix:
          <input  style={{width:"20rem",margin:"0px 20px" }}  className="inpt-info-g"  type="text" value={offer.prix} onChange={(e) => setOffer({...offer , prix:e.target.value})} />
          </label>
        </div>  
        <label  className="lbl-info-g">
          Description:
          <textarea  value={offer.description} onChange={(e) => setOffer({...offer , description:e.target.value})}></textarea>
        </label>
        <label className="lbl-info-g">
          Images:
          <input className="inpt-info-g"  type="file" onChange={handleImageChange} />
          <div className="image-preview">
            {images.map((image, index) => (
              <img key={index} src={image} alt={`Preview ${index}`} />
            ))}
          </div>
        </label>
        <div className='deux-butt'>
          <button  type="submit">Partager</button>
          <button  type="button" onClick={() => { /* handle cancel logic */ }}>Annuler</button>
        </div>
      </form>
    </div>
  );
};

export default NouveauOffre;
