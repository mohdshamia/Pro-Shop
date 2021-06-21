import styled from "styled-components";

export const MainContainer = styled("main")`
  max-width: 1920px;
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  flex-direction: column;

  @media screen and (min-width: 1920px) {
    margin: 0 auto;
  }
`;

export const Typography = styled("p")`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
`;

export const Hr = styled("div")`
  width: 100%;
  height: 1px;
  background-color: #707070;
  opacity: 0.3;
  margin-bottom: 30px;
`;

export const FlexBox = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  background: ${(props) => props.color};
`;

export const FlexRow = styled(FlexBox)`
  flex-direction: row;
`;

export const FlexColumn = styled(FlexBox)`
  flex-direction: column;
`;

export const InnerSection = styled(FlexColumn)`
  max-width: 1640px;
  width: 100%;
  margin: 0 auto;
`;
