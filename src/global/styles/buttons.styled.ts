import styled from "styled-components";
import { colors } from "../params/colors";

interface Props {
    background?: string;
    opacity?: string;
    borderRadius?: string;

    color?: string;

    width?: string;
    height?: string;
}

/**
 * @param {string} background - HEX
 * @param {string} opacity - serialize number
 * @param {string} borderRadius - any number or any %
 * 
 * @param {string} width - any number or any %
 * @param {string} height - any number or any %
 */
export const ButtonPattern = styled.div<Props>`
    width: ${props => props.width || '250px'};
    height: ${props => props.height || '50px'};
    background: ${props => props.background || colors.orange};
    opacity: ${props => props.opacity || "1"};
    border-radius: ${props => props.borderRadius || "50px"};

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
`;