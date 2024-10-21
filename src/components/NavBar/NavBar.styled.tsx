import styled from 'styled-components';
import { seFontFamilyDefault } from '../../shared/fonts';
import { seLust, seRickBlack, seWhite } from '../../shared/colors';

export namespace sc {
  export const Container = styled.div`
    width: 100%;
    top: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  export const Content = styled.div`
    width: 1440px;
  `;

  export const TrialContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;

    justify-content: center;
    align-items: center;
    background-color: ${seLust};
  `;

 export const TrialContent = styled.p`
    font-family: ${seFontFamilyDefault};
    font-weight: bold;

    color: ${seWhite};
    font-size: 16px;
  `;

   export const NavigationContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 2px 2px 0px;
  `;

  export const NavBarContent = styled.div`
    width: 1440px;
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
  export const NavigatorItem = styled.p`
    max-width: 135px;
    font-family: ${seFontFamilyDefault};
    font-size: 16px;
    color: ${seRickBlack};
  `;
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

    border: 1px solid ${seRickBlack};
    border-radius: 24px;

    font-family: ${seFontFamilyDefault};  
    color: ${seRickBlack};
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

    color: ${seWhite};
    font-family: ${seFontFamilyDefault};  
    background-color: ${seLust};
  `;
}