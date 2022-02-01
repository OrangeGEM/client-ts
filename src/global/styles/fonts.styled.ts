import styled from "styled-components";

interface Props {
    fontStyle?: string;
    fontWeight?: string;
    fontSize?: string;
    lineHeight?: string;
    textAlign?: string;
    letterSpacing?: string;
    textTransform?: string;
    textColor?: string;
    align?: string;
    opacity?: string;
}

/**
 * @param {string} fontStyle - normal | italic | oblique | inherit
 * @param {string} fontWeight - bold | bolder | lighter | normal | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
 * @param {string} fontSize - any number or any %
 * @param {string} lineHeight - any number or any %
 * @param {string} textAlign =  center | justify | left | right | start | end
 * @param {string} letterSpacing = any number | normal | inherit
 * @param {string} textTransform = capitalize | lowercase | uppercase | none | inherit
 * @param {string} textColor = HEX 
 */
export const EpilogueText = styled.div<Props>`
    font-family: Epilogue;
    font-style: ${props => props.fontStyle || "normal"};
    font-weight: ${props => props.fontWeight || "normal"};
    font-size: ${props => props.fontSize || "24px"};
    line-height: ${props => props.lineHeight || "15px"};
    text-align: ${props => props.align || "inherit"};
    letter-spacing: ${props => props.letterSpacing || "normal"};
    text-transform: ${props => props.textTransform || "none"};

    color: ${props => props.color || "#393B44"};
    opacity: ${props => props.opacity || "1"};
`;

/**
 * @param {string} fontStyle - normal | italic | oblique | inherit
 * @param {string} fontWeight - bold | bolder | lighter | normal | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
 * @param {string} fontSize - any number or any %
 * @param {string} lineHeight - any number or any %
 * @param {string} textAlign =  center | justify | left | right | start | end
 * @param {string} letterSpacing = any number | normal | inherit
 * @param {string} textTransform = capitalize | lowercase | uppercase | none | inherit
 * @param {string} textColor = HEX 
 */
export const DMMonoText = styled.div<Props>`
    font-family: DM Mono;
    font-style: ${props => props.fontStyle || "normal"};
    font-weight: ${props => props.fontWeight || "normal"};
    font-size: ${props => props.fontSize || "26px"};
    line-height: ${props => props.lineHeight || "20px"};
    text-align: ${props => props.textAlign || "inherit"};
    letter-spacing: ${props => props.letterSpacing || "normal"};
    text-transform: ${props => props.textTransform || "none"};

    color: ${props => props.textColor || "#393B44"};
    opacity: ${props => props.opacity || "1"};
`;
