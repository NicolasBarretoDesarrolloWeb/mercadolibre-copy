import React from 'react'
import { Container, Wrapper, Wrapper2, Row} from "./styles";
export const Header = () => {
  return (

<Container>

  <Wrapper>
    <img src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.9/mercadolibre/logo__large_plus.png" alt="logo"/>
  </Wrapper>
  
  <Wrapper2 className='busqueda'>
  
  <input type="search" action="https://www.mercadolibre.com.ar/jm/search" className='lupa' placeholder='Buscar productos, marcas y más...'/>
  <Row className='botonera'>
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
