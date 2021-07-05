import styled from "styled-components";
import { FlexColumn, InnerSection, Typography } from "../../../Global.Styles";

export const SpecificationContainer = styled(InnerSection)`
  display: flex;
  justify-content: start;
  align-items: start;
  background: #fff;
  opacity: 1;
  width: 100%;
  margin-bottom: 30px;
`;

export const HeroSection = styled(FlexColumn)`
  align-items: flex-start;
  justify-content: flex-start;
  height: auto;
  margin: 32px 0;
`;

export const Title = styled(Typography)`
  margin: 0 0 56px 0;
  font-size: 24px;
  justify-content: start;
`;

export const Image = styled("img")`
  object-fit: contain;
  width: 100%;
  border-radius: 16px;
`;

export const StyledFlexColumn = styled(FlexColumn)`
  width: 1134px;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 16px;
`;

export const RIcon = styled("span")`
  width: 48px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    border: 1px solid #fcdd06;
  }
`;
export const FlexColWhite = styled(FlexColumn)`
  align-items: flex-start;
  border: 1px solid #bcbcbc;
  padding: 0 51px 15px 51px;
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  height: 120px;
  margin: 20px 0;
  padding: 20px;

  resize: vertical;
`;
