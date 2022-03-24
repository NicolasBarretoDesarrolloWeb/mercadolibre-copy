import styled from "styled-components";

export const Container =styled.div`
padding-top: 12px;
display: flex;
justify-content: space-between;
background-color:var(--body);
`
export const Row = styled.div`
>a{
font-size: 14px;
text-decoration: none;
color: var(--blue3);
padding: 2.5px ;
transition: all 300ms ease-in-ot;
margin-top:200px;

& + a{
    padding-left:10px;
    marging-left:10px;
    border-left:1px solid var(--border);
}
}
a.volver{
    color: var(--text1);
}
a:hover{
    color: var(--blue2);
}
.botonera{
    background-color:red;
}
`