import React from 'react';
import Layout from '../components/layout/Layout.js'
import BurgerBuilder from './burgerBuilder/BurgerBuilder'
import './App.css'
function App() {
  return (
    <div className="container">
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
