import styled from "styled-components";
import { FlexColumn, FlexRow } from "../../../App.Styles";


export const HeroBox=styled(FlexRow)`
    justify-content: space-between;
    height: 620px;
`;

export const SideBox=styled(FlexColumn)`
    width: 40%;
    align-items:start;
    height: 100%;
`

export const HeroTitle=styled("h1")`
        font-size:60px;
        letter-spacing: 2.4px;
        color: #242424;
        text-transform: uppercase;
        opacity: 1;
`;