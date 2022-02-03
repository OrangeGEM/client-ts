import styled from "styled-components";
import { ColumnContainer } from "../../../../../global/styles/containers.styled";

export const Container = styled.div`
    display: flex;
    justify-content: center;
`;

export const Content = styled(ColumnContainer)`
    width:83%;
`;

export const DirectionalContainer = styled.div`
    display: flex;
    flex-direction: row;
    position:absolute;

    @media (max-width: 1280px) {
        flex-direction: column;
    }
`;