import styled from 'styled-components';
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
    padding: 0px 20px;
    display: flex;

    justify-content: space-between;
    align-items: center;
  `;

  export const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;

    &:hover {
      cursor: pointer;
      opacity: 0.8
    }
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
    font-size: 16px;
    color: ${seRickBlack};

    &:hover {
      cursor: pointer;
      color: ${seLust}
    }
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

    color: ${seRickBlack};

    &:hover {
      cursor: pointer;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 1px 0px, rgba(0, 0, 0, 0.1) 0px 2px 3px 0px;
      opacity: 0.7;
    }
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
    background-color: ${seLust};

    &:hover {
      cursor: pointer;
    }
  `;
}