import styled from 'styled-components';
import { seFontFamilyDefault } from '../../shared/constants';

export namespace sc {
  export const Container = styled.div`
    width: 100%;
    top: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
  `;

  export const Content = styled.div`
    /* max-width: 1400px; */
  `;

  export const TrialContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;

    justify-content: center;
    align-items: center;
    background-color: #E92E11;
  `;

 export const TrialContent = styled.p`
    font-family: ${seFontFamilyDefault};
    font-weight: bold;

    color: #FFFFFF;
    font-size: 16px;
  `;

  export const NavBarContainer = styled.div`
    width: 100%;
    height: 100px;

    border: 1px solid black;
`;

  export const NavigationContainer = styled.div`
    width: 100%;
    height: 73px;
    display: flex;

    justify-content: space-between;
    align-items: center;
  `;

  export const LogoContainer = styled.div`
    width: fit-content;
  `;
  export const Logo = styled.div``;
  export const CompanyName = styled.p``;
  export const Navigators = styled.div`
    display: flex;
    justify-content: "center";
    gap: 10px;
  `;
  export const NavigatorItem = styled.div``;
  export const ButtonsContainer = styled.div`
    display: flex;
    gap: 10px;
  `;
  export const LoginBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: 40px;
    min-width: 80px;
    padding: 0 10px;

    border: 1px solid #030303;
    border-radius: 24px;

    font-family: "Roboto Condensed";  
    color: #030303;
  `;
  export const StartLearningBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: 40px;
    min-width: 80px;
    padding: 0 10px;

    border-radius: 24px;

    color: #FFFFFF;
    font-family: "Roboto Condensed";  
    background-color: #E92E11;
  `;
}