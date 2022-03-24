import React from 'react'
import { Container, Wrapper, Wrapper2, Row} from "./styles";
export const Header = () => {
  return (

<Container>

  <Wrapper>
    <div className='logo'><img className='imgLogo' src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.9/mercadolibre/logo__large_plus.png" alt="logo"/></div>
    <div className='buscador'>
    <input type="search" action="https://www.mercadolibre.com.ar/jm/search" className='lupa' placeholder='Buscar productos, marcas y más...'/></div>
    <div className='disney'><img className='imgDisney' src="https://http2.mlstatic.com/D_NQ_788302-MLA49129922681_022022-OO.webp" alt="disney"/></div>
  </Wrapper>
  
  <Wrapper2 >
  
 
  <Row>
    
      <a href="#">Catalogo</a>
      <a href="#">Ofertas</a>
      <a href="#">Historial</a>
      <a href="#">Supermercado</a>
      <a href="#">Moda</a>
      <a href="#">Vender</a>
      <a href="#">Ayuda</a>
      
    </Row>
  </Wrapper2> 
  
  
</Container>

  )
}
