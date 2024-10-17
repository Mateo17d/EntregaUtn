import React from 'react'
import { Footer, Header } from '../../Components'
import './Home.css' 




const Home = () => {


  return (
    <>
    
    <div className="header"> <Header /> </div>
        <main className='main'>
          
          <div className='KONGO'>
            <h1>
              KING OF THE KONGO <br />
            </h1>

              <h3 className='eslogan'>LOS MEJORES EN TECNOLOGIA</h3>
          <div className='envios'>
            <p>// ENVIOS A TODO EL PAIS //</p>
          </div>
          </div>


          
          <div className='conteiner-home'>
              <img src="/oferta.jpg" alt="" />
            </div>
        </main>
        <div className="footer"> <Footer /></div>

    </>
  )
}

export default Home