import React, { useState ,useEffect} from 'react'
import millify from 'millify'
import { Link, useLocation } from 'react-router-dom'
import { Card,Row,Col,Input } from 'antd'
import { useGetCryptosQuery } from '../services/cryptoApi'
import Loader from './Loader'

const Cryptocurrencies = ({simplified}: any) => {
  const location = useLocation();

  const count = location.pathname === "/cryptocurrencies" ? 100 : 10
  const {data:cryptosList,isFetching} = useGetCryptosQuery(count);
  const [cryptos,setCryptos] = useState([]);
  const [searchTerm,setSearchTerm] = useState('');
  useEffect(()=>{
    if (cryptosList && cryptosList.data && cryptosList.data.coins) 
    {
      const filteredData = cryptosList.data.coins.filter((coin: any)=>coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
      setCryptos(filteredData);
    }
  
  },[cryptosList,searchTerm])


  if(isFetching) {return <Loader/>};

  return (
    <>
      { count === 100 && (
        <div className='search-crypto'>
          <Input style={{borderRadius:"8px"}} placeholder='Search Cryptocurrency' onChange={(e)=>setSearchTerm(e.target.value)}/>
        </div>
      )}
      <Row gutter={[32,32]} className="crypto-card-container">
        {cryptos.map((currency: any) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
            <Link to={`/crypto/${currency.uuid}`}>
              <Card
                style={{borderRadius:"8px"}}
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className='crypto-image' src={currency.iconUrl} alt=""/>}
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.change)}%</p>
              </Card>
            
            </Link>
          
          </Col>
        ))

        }

      </Row>
    </>
  )
}

export default Cryptocurrencies