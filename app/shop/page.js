'use client';

import { useState, useEffect } from 'react';
import styles from './shop.module.css';

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', imageFile: null, category: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    try {
      const userLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
      setIsLoggedIn(userLoggedIn);

      const savedProducts = localStorage.getItem('products');
      if (savedProducts) {
        setProducts(JSON.parse(savedProducts));
      }
    } catch (error) {
      console.error("Erreur lors du chargement des produits :", error);
    }
  }, []);

  useEffect(() => {
    try {
      if (products.length > 0) {
        localStorage.setItem('products', JSON.stringify(products));
      }
    } catch (error) {
      console.error("Erreur lors de la sauvegarde des produits :", error);
    }
  }, [products]);

  const handleLogin = () => {
    if (username === 'Test' && password === 'Test') {
      localStorage.setItem('userLoggedIn', 'true');
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError("Nom d'utilisateur ou mot de passe incorrect.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('userLoggedIn');
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && ['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (reader.result) {
          setNewProduct({ ...newProduct, imageFile: reader.result });
        }
      };
      reader.onerror = () => alert("Erreur lors du chargement de l'image !");
    } else {
      alert("Format d'image non valide !");
    }
  };

  const addProduct = (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price || !newProduct.imageFile || !newProduct.category) {
      alert("Veuillez remplir tous les champs !");
      return;
    }
    const updatedProducts = [...products, { ...newProduct, id: Date.now(), price: parseFloat(newProduct.price), imageUrl: newProduct.imageFile }];
    setProducts(updatedProducts);
    setNewProduct({ name: '', price: '', imageFile: null, category: '' });
    closeModal();
  };

  const deleteProduct = (id) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
  };

  const filteredProducts = filter ? products.filter(product => product.category === filter) : products;

  return (
    <div className={styles.shopContainer}>
      <div className={styles.loginContainer}>
        {!isLoggedIn ? (
          <div className={styles.loginForm}>
            <input type="text" placeholder="Nom d'utilisateur" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin} className={styles.loginButton}>Se connecter</button>
            {loginError && <p className={styles.errorMessage}>{loginError}</p>}
          </div>
        ) : (
          <button onClick={handleLogout} className={styles.logoutButton}>Se déconnecter</button>
        )}
      </div>

      <h1>Bienvenue dans notre boutique !</h1>
      {isLoggedIn && <button onClick={openModal} className={styles.addButton}>Ajouter un produit</button>}

      <select onChange={(e) => setFilter(e.target.value)} className={styles.filterSelect}>
        <option value="">Toutes les catégories</option>
        <option value="figurines">Figurines</option>
        <option value="jeux">Jeux</option>
        <option value="consoles">Consoles</option>
      </select>

      {isModalOpen && isLoggedIn && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <button className={styles.close} onClick={closeModal}>X</button>
            <h2 className={styles.modalTitle}>Ajouter un produit</h2>
            <form onSubmit={addProduct} className={styles.productForm}>
              <label>Nom:</label>
              <input type="text" name="name" value={newProduct.name} onChange={handleInputChange} required />
              <label>Prix:</label>
              <input type="number" name="price" value={newProduct.price} onChange={handleInputChange} required />
              <label>Catégorie:</label>
              <select name="category" value={newProduct.category} onChange={handleInputChange} required>
                <option value="">Sélectionner une catégorie</option>
                <option value="figurines">Figurines</option>
                <option value="jeux">Jeux</option>
                <option value="consoles">Consoles</option>
              </select>
              <label>Image:</label>
              <input type="file" accept="image/jpeg, image/jpg, image/png" onChange={handleFileChange} required />
              <button type="submit">Ajouter</button>
            </form>
          </div>
        </div>
      )}

      <div className={styles.productList}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <img src={product.imageUrl} alt={product.name} className={styles.productImage} />
              <h3>{product.name}</h3>
              <p>{product.price} €</p>
              {isLoggedIn && <button onClick={() => deleteProduct(product.id)} className={styles.deleteButton}>Supprimer</button>}
            </div>
          ))
        ) : (
          <p>Aucun produit disponible.</p>
        )}
      </div>
    </div>
  );
};

export default ShopPage;
