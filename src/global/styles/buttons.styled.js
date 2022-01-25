import styled from "styled-components";
import { colors } from "../params/colors";

/**
 * @param {string} background - HEX
 * @param {string} opacity - serialize number
 * @param {string} borderRadius - any number or any %
 */
export const ButtonPattern = styled.div`
    background: ${props => props.background || colors.orange};
    opacity: ${props => props.opacity || "1"};
    border-radius: ${props => props.borderRadius || "50px"};
`;

/**
 * @param {string} color - HEX
 */
export const TextButtonPattern = styled.div`
    color: ${props => props.color || colors.orange};
`