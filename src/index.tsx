import * as React from "react";
import { render } from "react-dom";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Editor } from "./pages/editor";

const GrobalStyle = createGlobalStyle`
body * {
  box-sizing: border-box;
}
`

const Main = (
  <>
    <GrobalStyle />
    <Editor />
  </>
)
render(Main, document.getElementById('app'))
