import styled from 'styled-components';
import { seFontFamilyDefault } from '../../shared/constants';

export namespace sc {
  export const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    border: 1px solid black;
  `;

  export const TrialContainer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid black;
  `;

 export const TrialContent = styled.p`
    font-family: ${seFontFamilyDefault};
    font-weight: bold;

    color: black;
    font-size: 16px;
  `;

  export const NavBarContainer = styled.div`
    width: 100%;
    height: 100px;

    border: 1px solid black;
`;

}