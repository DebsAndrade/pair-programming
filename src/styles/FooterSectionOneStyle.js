import styled from "styled-components";

export const Box = styled.section`
height:39.80vw;
background-color:#DFE4DE;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
color:#373737;
`

export const Title = styled.h2`
font-weight: 500;
`

export const Text = styled.p`
padding-bottom: 2vw;
`

export const Input = styled.input`
width:35vw;
height:5vw;
text-indent:10%;
border:none;
background-color:#EFF1EE;
`

export const Button = styled.button`
width:9vw;
height:3.5vw;
border: solid #373737;
background-color:#DFE4DE;
margin-top:2vw;
&:hover{
    width:10vw;
    height:4vw;
    tranform: scale(105%);
    transition: ease-in-out 0.5s;
}
`