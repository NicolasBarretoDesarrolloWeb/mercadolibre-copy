import styled from "styled-components";

export const Container = styled.header`
width: 100vw;
background-color: var(--yellow);
height:100px;
`
export const Wrapper = styled.nav`
max-width:1200px;
padding: 8px 8px;
margin-left:350px;
float:left;
height: 91px;
img{
   width:134px;
   heigth:33px; 
}


`
export const Wrapper2 = styled.div`

    transition: left .15s ease-out;
    position: absolute;
    left: 530px;
    top: 10px;
    right: 45px;
    height: 50px;
    padding: 8px 0;
    width:300px;
   
}
.busqueda{
   width:600px;
   height: 50px;
   color:red;
}
.lupa{
   width:598px;
   height: 39px;
   color:red;
   size:300;
}


}
button.nav-search-btn, button.nav-search-btn:focus {
top: 0;
height: 50px;
padding: 0;
width: 48px;
background: 0 0;
border: none;
font-size: 22px;
color: #666;
line-height: 1em;}
`
export const Row = styled.div`
>a{
font-size: 14px;
text-decoration: none;
color: var(--blue3);
padding: 2.5px ;
transition: all 300ms ease-in-ot;


& + a{
    padding-left:10px;
    marging-left:10px;
    border-left:1px solid var(--border);
   top:50px;
}
a:hover{
    color: var(--blue2);
}



`