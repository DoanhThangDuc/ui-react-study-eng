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
    display: flex;
    flex-direction: row;
    gap: 10px;
  `;
  export const Logo = styled.div`
    width: 50px;
    height: 50px;
    background: url("../images/logo.png") center no-repeat;
    background-size: contain;
    border: none;
  `;
  export const CompanyName = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: ${seFontFamilyDefault};
    font-size: 16px;
    font-weight: 400;
    text-transform: uppercase;

    color: ${seLust};
  `;
  export const Navigators = styled.div`
    display: flex;
    justify-content: "center";
    gap: 10px;
  `;
  export const NavigatorItem = styled.div`
    max-width: 80px;
    height: 20px;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
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