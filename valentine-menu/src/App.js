import './App.css';

import photo from './media/valentine_photo.jpg';
function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className="header">
          <div className='table-container'>
            <div className='child-one'>
              <h1>Dinner Menu</h1>
              <hr></hr>
              <p>February 15, 2025</p>
              <p>Matt + Trish</p>
            </div>
            <div className='child-two'>
              <img src={photo} alt="Trish and Matt" />
            </div>
          </div>
        </div>
        <div className="body">
          <div className='item'>
            <div className='left'>
              <h2>Starter</h2> 
            </div>
            <div className='right'>
              <h3>Bluefin Kinilaw</h3>
              <p>The Filipino counterpart to ceviche. Bluefin tuna is "cooked" in vinegar and combined with chilis, onions, 
              and ginger. A coconut cream sauce is added to mellow out the sharp flavors.</p>
            </div>
          </div>
          <br></br>
          <br></br>
          <div className='item'>
            <div className='left'>
              <h2>Main</h2> 
            </div>
            <div className='right'>
              <h3>Chicken Kare-Kare</h3>
              <p>Drawing inspiration from Hong Kong-style chicken steak with black pepper sauce,
              this take on a Filipino classic combines the familiar flavors of kare-kare and bagoong
              with a crispy pan-seared chicken thigh.</p>
            </div>
          </div>
          <br></br>
          <br></br>
          <div className='item'>
            <div className='left'>
              <h2>Dessert</h2> 
            </div>
            <div className='right'>
              <h3>Milk Tea Leche Flan</h3>
              <p>Smoky and floral dahongpao oolong balances out the sweetness of a traditional leche flan.</p>
            </div>
          </div>
          <br></br>
          <br></br>
          <div className='item'>
            <div className='left'>
              <h2>Drink</h2> 
            </div>
            <div className='right'>
              <h3>Calamansi Chu-Hi</h3>
              <p>Citron soju, sparkling water, and calamansi come together to create a refreshing cocktail that cuts through the rich kare-kare.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
