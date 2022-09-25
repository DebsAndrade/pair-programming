import { createGlobalStyle } from "styled-components";
import HurmeGeometricSans1 from "../assets/fonts/HurmeGeometricSans1.otf";
import HurmeGeometricSans1SemiBold from "../assets/fonts/HurmeGeometricSans1SemiBold.otf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Hurme Geometric Sans1';
    src: url(${HurmeGeometricSans1}) format('otf');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Hurme Geometric Sans1';
    src: url(${HurmeGeometricSans1SemiBold}) format('otf');
    font-weight: bold;
    font-style: normal;
  }

  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
    list-style: none;
    font-family: 'Hurme Geometric Sans1' Roboto;
  }
`;