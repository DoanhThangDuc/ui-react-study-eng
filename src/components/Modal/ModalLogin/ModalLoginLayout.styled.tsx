import { styled } from 'styled-components';
import { seBlack, seCadetBlue, seDavyGrey, seGunmetal, seLightGray, seSpiroDiscoBall, seWhite } from '../../../shared/colors';

export namespace sc {
  export const Container = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${seBlack};
    opacity: 0.5;
    z-index: 1;
  `;

  export const ModalLoginContainer = styled.div`
    position: relative;
    z-index: 2; 
    display: flex;
    flex-direction: column;
    width: 328px;
    height: 496px;
    border-radius: 8px;
    background-color: ${seWhite};
  `;

  export const ContentColumn = styled.div`
    padding: 24px;
  `;
  export const ContentHeader = styled.div`
    padding-bottom: 40px;
  `;
  export const Title = styled.div`
    font-size: 20px;
    font-weight: 500;
    color: ${seGunmetal};
  `;
  export const UserNameInput = styled.input`
    width: 280px;
    height: 40px;
    border: 1px solid ${seLightGray};
    border-radius: 4px;
    padding: 6px 36px 6px 12px;
    color: ${seDavyGrey};
    font-size: 14px;
    box-sizing: border-box; 
    margin-bottom: 8px;
  `;
  export const PasswordInput = styled(UserNameInput)``;
  export const DividerContainer = styled.div`
    width: 100%;
    padding: 5px 0;
  `;
  export const Divider = styled.div`
  `;
  export const DivideText = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 700;
    color: ${seCadetBlue};

    &:before,
    &:after {
      content: "";
      flex: 1;
      height: 1px;
      background-color: ${seBlack};
    }

    &:before {
      margin-right: 11px;
    }

    &:after {
      margin-left: 11px;
    }
  `;
  export const Button = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  export const LoginBtn = styled(Button)``;
  export const LoginBtnContent = styled(Button)`
    gap: 8px;
  `;
  export const SignIn = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: underline;
    padding-top: 110px;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    color: ${seSpiroDiscoBall};
  `;
}
