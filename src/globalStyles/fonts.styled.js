import styled from "styled-components";

export const EpilogueText = styled.div`
    font-family: Epilogue;
    font-style: ${props => props.fontStyle || "normal"};
    font-weight: ${props => props.fontWeight || "normal"};
    font-size: ${props => props.fontSize || "24px"};
    line-height: ${props => props.lineHeight || "15px"};
    text-align: ${props => props.align || "inherit"};
    letter-spacing: ${props => props.letterSpacing || "normal"};
    text-transform: ${props => props.textTransform || "none"};

    color: ${props => props.color || "#393B44"};
`;

export const DMMonoText = styled.div`
    font-family: DM Mono;
    font-style: ${props => props.fontStyle || "normal"};
    font-weight: ${props => props.fontWeight || "normal"};
    font-size: ${props => props.fontSize || "26px"};
    line-height: ${props => props.lineHeight || "20px"};
    text-align: ${props => props.align || "inherit"};
    letter-spacing: ${props => props.letterSpacing || "normal"};
    text-transform: ${props => props.textTransform || "none"};

    color: ${props => props.color || "#393B44"};
`;