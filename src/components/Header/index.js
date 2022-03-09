import React from 'react'
import { Container, Wrapper, Wrapper2} from "./styles";
export const Header = () => {
  return (

<Container>

  <Wrapper>
    <img src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.9/mercadolibre/logo__large_plus.png" alt="logo"/>
  </Wrapper>
  <Wrapper2>
  
  <input type="search" action="https://www.mercadolibre.com.ar/jm/search" className='lupa' placeholder='Buscar productos, marcas y más...'/>
  
  </Wrapper2> 
</Container>
  )
}
