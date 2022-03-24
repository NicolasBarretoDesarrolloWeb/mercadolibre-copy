import styled from "styled-components";

export const Container = styled.header`
width: 100vw;
background-color: var(--yellow); 
height:100px;
`
export const Wrapper = styled.div`
{
max-width:1200px;
padding: 10px;
left:350px;
position:relative;
height: 60px;


.logo{
   width:134px;
   heigth:33px; 
   float:left;
}
imgLogo{
   
   width:134px;
   heigth:33px; 
}
.buscador{

float:left
   box-sizing:border-box;
}
.lupa{
   
   width:598px;
   height: 40px;
   box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
   left:50px;
   position:relative;
   size:400;
   font-size:16px;
   padding:8px;
   float:left  ;
   
}
.disney{
   width:134px;
   heigth:33px; 
   float:left  ;

   padding-left:60px; 
}
.imgDisney{
   width:380px;
   
   heigth:78px; 
}

  



`
export const Wrapper2 = styled.div`

   {
 
   height: 40px;
   max-width:1200px;
   padding: 10px 15px;
   left:530px;
   position:relative;

   }
   


`
export const Row = styled.div`
>a{
   font-size: 16px;
   text-decoration: none;
   color: var(--menu);
   opacity: 60%;
   
   padding: 2.5px 5px;
   transition: all 300ms ease-in-ot;
   
   
   & + a{
       padding-left:10px;
       marging-left:10px;
       border-left:1px solid var(--border);
   }
   }
   a:hover{
       color: var(--menu)
       opacity: 100%;
   }
  


`