import React from 'react'
import {
Container,
Panel,
Column,
Galeria,
Decription

} from "./styles";

export const Producto = () => {
  return (
   <Container>
     <Panel>
       <Column>
       <Galeria>
         <img src="https://http2.mlstatic.com/D_NQ_NP_697482-MLA31028188383_062019-O.webp" alt="producto" width="75%"/>
       </Galeria>
       <Info/>
       </Column>
       <Column>
       {/* <ProductoVenta/>
       <InfoVendedor/>
       <Galeria/> */}
       </Column>
     </Panel>
   </Container>
  )
}
const Info =()=>{
  return(
    <Decription>
      <h4>Description</h4>
      <p>4KRC S.A. - Especialistas en Hardware Gamer. Más de 20 años de experiencia.
Más de 100.000 operaciones nos avalan. Mercadolider Platinum.

Nos encontramos en el barrio de Palermo. En la zona de las Cañitas. 9 a 20HS.

Envio Express Gratuito en el día a todo Capital Federal y Gran Bs As!
Envio Gratuito por camión a todo el País ! Con sistema Track&Trace !
Emitimos Factura A y B. Todos nuestros productos cuentan con Garantía Oficial.</p>
<br>
</br>
<p>NO PIERDAS TIEMPO! Y COMPRA LA MEJOR PC GAMER DE MERCADOLIBRE!!!
JUGA EN ULTRA a : ARK / PUBG / AC Syndicate / BTF1 / DOOM / GTA V / Overwatch!!!
VEA NUESTRO VIDEO PROMOCIONAL CON LOS MEJORES JUEGOS!!!</p>
<br>
</br>
<p>* Importante : La pc se entrega con Video Geforce GTX 1050 Ti 4Gb Gddr5 debido a la falta de placas de video en el mercado Argentino, de cualquier forma, la misma tiene un rendimiento similar a la anterior, y funcionan perfectamente todos los juegos en 1080p
</p>
<br>
</br>
<p>
MICRO: AMD RYZEN 5 2600 3.6Ghz CON COOLER BOX...
<br>
</br>
VIDEO: NVIDIA GEFORCE GTX 1050 Ti 4GB DDR6 OC HDMI BOX...
<br>
</br>
MOTHER: ASROCK/ECS/BIOSTAR/MSI A320 (entrega segun stock)
<br>
</br>
DISCO RIGIDO: 1000GB 7200RPM SATA3 SEAGATE/WD...
<br>
</br>
MEMORIA RAM: 8GB 2666MHZ DDR4...
<br>
</br>
GABINETE: SENTEY MEDIUM TOWER X10 RGB...
<br>
</br>
FUENTE: SENTEY SNP550w...
<br>
</br>
SISTEMA OPERATIVO: WINDOWS 10 64 Trial...</p>
<br>
</br>

ENVIOS GRATUITOS A TU DOMICILIO A TODO EL PAIS!!!
<br>
</br>
ACEPTAMOS TODAS LAS TARJETAS DE CREDITO POR MERCADOPAGO!!!
<br>
</br>
ENCONTRA TODAS LAS MARCAS Y MODELOS DEL MERCADO EN 4KRC!!!
<br>
</br>
NO INCLUYE: MONITOR, NI DVD, NI KIT...

<br></br>
-------------------------------------------------------------------
<br>
</br>
<p>
<span>CÓMO COMPRAR EN NUESTRA TIENDA OFICIAL:</span>
<br>
</br>
1. Selecciona la cantidad que deseas adquirir y hacé Click en comprar.
*Verificá la cantidad máxima disponible al principio de esta publicación.
<br>
</br>
2. Gestioná el Envío: cargá la dirección completa del domicilio donde querés recibir tu compra.
<br>
</br>
3. Elegí la forma de pago: contamos con todos los métodos que ofrece Mercado Pago.
</p>

<p>¿ACEPTAN MERCADOPAGO?
<br>
</br>
Podes Pagar con:
<br>
</br>
- Tarjeta de crédito / débito: hasta 12 cuotas sin interés y clickea en mercado pago para ver todas 
   las tarjetas que acepta.
<br>
</br>
- Efectivo; Rapipago o Pago Fácil.
<br>
</br>
- Transferencia o déposito bancario: Link o Banelco.</p>


<p>
  ¿FACTURAS?
  <br>
</br>
Realizamos Factura A y B electronica.
<br>
</br>
<br>
</br>
¿PAGOS?<br>
</br>
Tu pago está protegido por el servicio de Mercado Pago.<br>
</br>
¡Aprovechá las múltiples opciones que te ofrece de forma fácil, rápida y segura!<br>
</br>
* Conocé todas las promociones vigentes de pago a través de mercadopago en este link: https://www.mercadopago.com.ar/promociones
<br>
</br>
<br>
</br>
¿CÓMO SE SI HAY STOCK DEL PRODUCTO?<br>
</br>

Realiza tu pregunta las 24hs los 365 días del año y en minutos te confirmaremos.
<br>
</br>
<br>
</br>
¿CÓMO SABER CUÁNDO LLEGA?<br>

</br>
Tu pedido será despachado por correo mediante MercadoEnvíos; y a las 48 hs hábiles de acreditado el pago recibirás un código de seguimiento para saber dónde se encuentra la mercadería.
<br>
</br>
<br>
</br>
¿CUÁNTO CUESTA EL ENVÍO Y CUÁNTO TARDA?<br>
</br>
El tiempo de envío depende del domicilio de entrega.<br>
</br>
El costo es gratuito!<br>
</br>
¡Hacemos envíos a todo el país!<br>
</br>
<br>
</br>
¿LOS PRODUCTOS SON ORIGINALES?<br>
</br>
Sí, estás comprando en la Tienda Oficial de 4KRC SA. Los productos son 100% originales.<br>
</br>

Soy el titular de la cuenta de mercadolibre ¿Que debo llevar al momento del retiro?<br>
</br>
Si sos el titular sólo debes traer tu DNI.<br>
</br>

¿Puede retirar otra persona que no sea el titular?<br>
</br>
Si, debe tener una autorizacion escrita o por mensaje privado de mercadolibre (EXCLUYENTE) y acreditar identidad con DNI.
<br>
</br>
¡Gracias por confiar en nosotros!<br>
</br>
TIENDA OFICIAL 4KRC SA
</p>

Preguntas y respuestas
    </Decription>
  )
}