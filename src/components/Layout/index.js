import React from 'react'
import { Header } from "../Header";
import { BodyC } from "../BodyC";
import { Producto } from "../Producto";

import {
    Container,
    Wrapper
} from "./styles";


export const Layout = () => {
  return (
    <Container>
     <Header />
     <Wrapper>
         <BodyC/>
         <Producto />  
     </Wrapper> 
    </Container>
  );
};