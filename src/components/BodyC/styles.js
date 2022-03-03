import styled from "styled-components";

export const Container =styled.div`
padding-top: 12px;
display: flex;
justify-content: space-between;
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
}
}
a.volver{
    color: var(--text1);
}
a:hover{
    color: var(--blue2);
}
`