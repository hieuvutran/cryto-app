import './App.css';
import React from 'react';
import {Routes,Route,Link} from 'react-router-dom';
import {Layout,Typography,Space} from 'antd';
import {Navbar,Homepage,Cryptocurrencies,CryptoDetails} from "./components"

function App() {
  return (
    <div className="app">
      <div className='navbar'>
        <Navbar/>
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'> 
            <Routes>
              <Route  path='/' element={<Homepage/>}/>
              <Route  path='/cryptocurrencies' element={<Cryptocurrencies simplified/>}/>
              <Route  path='/crypto/:coinId' element={<CryptoDetails/>}/>
            </Routes>
          </div>
        </Layout>
      <div className='footer'>
        <Space>
          <Link to='/'>Home</Link>
          <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
        </Space>
      </div>
      </div>
    </div>
  );
}

export default App;