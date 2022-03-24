import{ createGlobalStyle }from "styled-components";
export default createGlobalStyle`
  :root{
      --fondo: #edededed;
      --black:#000;
      --white:#fff;

      --text1: rgba(0,0,0,0.8);
      --text2: rgba(0,0,0,0.45);
      --text3: #666;

      --green: #00a650;
      --blue1: #1e6dff;
      --blue2: #2968c8;
      --blue3: #3483fa;
      --yellow: #fff159;
      --border: #ededed;
      --family: "Proxima Nova", -apple-system, "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;
      --panel: 0 1px 3px 0 rgba(0, 0, 0, .3);
      --reputacion1: #ffe7e6;
      --menu: #333333;
      --body: #ededed;


  
*{

padding:0 auto;
box-sizing: border-box;

}
h1, h2, h3, h4, h5, h6{
    color: var(--text1);
    font-weight: inherit;

}
html{
    min-height: 100%;
    background-color: var(--fondo);

}
*; button; input{
    border: 0;
    background-color: none;
    font-family: var(--family);
}
body{
    background-color: var(--body);  
}

`