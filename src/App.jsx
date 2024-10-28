// App.tsx
import { useState } from 'react';
import ProductList from './ProductList';
import Carousel from './Carousel';
import './App.css';

const App = () => {
  const [products] = useState([
    { id: 89, images: ['P1.png','P2.png'], title: 'Iphone 12 Pro Max', description: '128GB Bateria Original 82%', price: '600.000', category: 'electrodomesticos' },  
      { id: 0, images: ['A34 FRENTE.png','A 34 DORSO.png'], title: 'Samsung A34 Verde Limon', description: 'Camara 48 MP menos de un año de uso 128GB', price: '350.000', category: 'electrodomesticos' },  
      { id: 59, images: ['ventila1-removebg-preview.png','ventila2-removebg-preview.png'], title: 'Ventilador Industrial', description: '3 Velocidades como nuevo', price: '250.000', category: 'electrodomesticos' },  
      { id: 89, images: ['banco1-removebg-preview.png','banco_incli-removebg-preview.png','banco2-removebg-preview.png','pesas-removebg-preview.png'], title: 'Banco Gym Multiangular', description: 'Apto gimnasio soporta 200kg', price: '150.000', category: 'deportes' },  
      { id: 78, images: ['negras_running1-removebg-preview.png','negrass_rgg2-removebg-preview.png'], title: 'Zapatillas Adidas', description: 'Negras Running ', price: '30.000', category: 'indumentaria' },  

      { id: 18, images: ['xbox1-removebg-preview.png','xbox2-removebg-preview.png','xbox4-removebg-preview.png','xbox5-removebg-preview.png','xbox6-removebg-preview.png'], title: 'Xbox Series S', description: '6 meses de uso. nuevisima ', price: '700.000', category: 'electrodomesticos'},
      { id: 4, images: ['botines1pr-removebg-preview.png','botines2pr-removebg-preview.png','botines3pr-removebg-preview.png','botines4pr-removebg-preview.png','botines5pr-removebg-preview.png'], title: 'Botines Adidas Predator Talle 43', description: 'Futsal - Muy poco uso.', price: '80.000', category: 'deportes'},
      { id: 17, images: ['kinder1-removebg-preview.png','kinder2-removebg-preview.png','kinder3-removebg-preview.png'], title: 'Kindle Amazon E-Book', description: 'E-Book Libros', price: '100.000', category: 'electrodomesticos'},
      { id: 33, images: ['sillon2-removebg-preview.png','sillon3-removebg-preview.png','silloncama-removebg-preview.png','sillon4-removebg-preview.png'], title: 'Sillon Cama ', description: 'Color celeste', price: '40.000', category: 'indumendaria' },  

      { id: 1, images: ['iphone 6.png', 'iphone_parte_trasera-removebg-preview.png','iphone_pantalla-removebg-preview.png','iphone_btn-removebg-preview.png'], title: 'Iphone 6s', description: '64GB- Color Gold - Bateria Original 72%', price: '50.000', category: 'electrodomesticos' },

      { id: 2, images: ['cooler.png','Cooler_en_caja-removebg-preview.png','cooler1-removebg-preview.png','cooler.png','cooler_parte_atras-removebg-preview.png'], title: 'Cooler AM4 AMD NUEVO', description: 'Nuevo sin uso en caja ', price: '30.000', category: 'electrodomesticos'},

      { id: 5, images: ['barra dominadas.png','barra_vertical-removebg-preview.png','barra_marca_1-removebg-preview.png','barra_lateral-removebg-preview.png'], title: 'Barra de Dominadas NUEVO', description: 'Barra para pared sin uso. Viene con todos los accesorios', price: '35.000', category: 'deportes'},
      { id: 8, images: ['Auriculares-removebg-preview.png'], title: 'Auriculares Motorola Xt120', description: 'Como nuevos practicamente sin uso', price: '45.000', category: 'electrodomesticos'},
      { id: 9, images: ['Bolso.png','jackie_adentro_1-removebg-preview.png'], title: 'Bolso Jackie Smith', description: 'Amplio espacio porta computadoras', price: '60.000', category: 'indumentaria'},
      { id: 10, images: ['Zapatillas.png'], title: 'Zapatillas Nike Talle 40', description: 'Buen estado - Deportivas', price: '20.000', category: 'indumentaria'},
      { id: 12, images: ['Jabra auriculares.png'], title: 'Auriculares Jabra', description: 'Microfono incluido Control de volumen', price: '43.000', category: 'electrodomesticos'},
      { id: 13, images: ['Maquina_Coser1-removebg-preview.png','Maquina_Coser2-removebg-preview.png','Maquina_Coser3-removebg-preview.png','Maquina_Coser4-removebg-preview.png','Maquina_Coser5-removebg-preview.png','Maquina_Coser6-removebg-preview.png','Maquina_Coser7-removebg-preview.png'], title: 'Maquina de Coser', description: 'Excelente estado', price: '650.000', category: 'electrodomesticos'},
      { id: 14, images: ['Zapatillas_negras-removebg-preview.png','Zapatillas_negras_frente-removebg-preview.png'], title: 'Zapatillas Topper Negras Talle 42', description: 'Excelente estado menos de un año de uso', price: '30.000', category: 'indumentaria'},
      { id: 15, images: ['snow_frente-removebg-preview.png', 'snow_atras-removebg-preview.png','swno_adentro-removebg-preview.png'], title: 'Mochila Casual Snow Travel', description: 'Mochila azul y negra', price: '10.000', category: 'indumentaria'},
      { id: 16, images: ['MOchila_arcoires_frente-removebg-preview.png', 'mochila_arocites_atras-removebg-preview.png','mochila_arcoiris_adentro-removebg-preview.png'], title: 'Mochila Vans Arcoiris', description: 'Mochila', price: '10.000', category: 'indumentaria'},
      { id: 19, images: ['air_max1-removebg-preview.png','airmax2-removebg-preview.png','airmax3-removebg-preview.png','airmax4-removebg-preview.png'], title: 'Zapatillas Nike Air max Talle 40 ', description: 'muy buen estado  ', price: '50.000', category: 'deportes'},
      { id: 20, images: ['campera_negra_1-removebg-preview.png','campera_negra_2-removebg-preview.png','camera_negra_3-removebg-preview.png'], title: 'Campera negra  ', description: 'muy buen estado  ', price: '20.000', category: 'indumentaria'},
      { id: 21, images: ['botines_amarillos1-removebg-preview.png','botines_amarillos2-removebg-preview.png','botines_amarillos3-removebg-preview.png'], title: 'Botines futsal talle 42  ', description: 'muy buen estado  ', price: '70.000', category: 'deportes'},
      { id: 22, images: ['joystick_xbox-removebg-preview.png','joystick1-removebg-preview.png'], title: 'Joysticks Xbox Series  ', description: 'muy buen estado  ', price: '100.000', category: 'electrodomesticos'},
      { id: 3, images: ['computadora.png','notebook_i7-removebg-preview.png'], title: 'Computadora Samsung REPUESTO', description: 'Pantalla a reparar. 6GB- Placa integrada', price: '200.000', category: 'electrodomesticos' },
      { id: 7, images: ['Pizarra futsal.jpeg'], title: 'Pizarra Magnetica Futsal', description: 'Excelente casi sin uso', price: '35.000', category: 'deportes'},


    
  
  ]);

  const [selectedImages, setSelectedImages] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState('all');


  const handleAddToCart = () => {
    window.open('https://www.instagram.com/leennyleo', '_blank');
  };

  const handleImageClick = (images) => {
    setSelectedImages(images);
  };

  const handleCloseModal = () => {
    setSelectedImages([]);
  };

  return (
    <div className="App">
      <header className="header">
        <div className="header-content">
          { <img src="VTV__3_-removebg-preview (1).png"alt="Icono de la página" className="header-icon" /> }
          <h1>Vendo todo Vendo</h1>
          <select onChange={(e) => setSelectedCategory(e.target.value)} className="filter-select">
          <option value="all">Filtrar</option>
          <option value="deportes">Deportes</option>
          <option value="electrodomesticos">Electronica</option>
          <option value="indumentaria">Indumentaria</option>
        </select>
        </div>
      </header>
      <ProductList products={products} onAddToCart={handleAddToCart} onImageClick={handleImageClick}  selectedCategory={selectedCategory} />

      {selectedImages.length > 0 && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <Carousel images={selectedImages} />
          </div>
        </div>
      )}
    </div>

  );
};

export default App;
