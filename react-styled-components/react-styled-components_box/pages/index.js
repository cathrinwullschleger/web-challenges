import styled from "styled-components";

import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "@/components/BoxWithClassName/BoxWithStyledComponents.js";

export default function HomePage() {
  return (
    <Flexcontainer>
      <BoxWithClassName />
      <BoxWithClassName isBlack />

      <BoxWithStyledComponents />
      <BoxWithStyledComponents $isBlack />
    </Flexcontainer>
  );
}

const Flexcontainer = styled.section`
  display: flex;
  flex-wrap: wrap;
`;
