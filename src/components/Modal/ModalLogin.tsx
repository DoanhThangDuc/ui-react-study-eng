import { sc } from './ModalLogin.styled';

export function ModalLogin() {
  return (
    <sc.ModalLoginContainer>
      <sc.ContentColumn>
        <sc.Title>
          Login
        </sc.Title>

        <sc.UserNameInput>
        </sc.UserNameInput>

        <sc.PasswordInput>
        </sc.PasswordInput>

        <sc.LoginBtn>Log in</sc.LoginBtn>

      </sc.ContentColumn>
    </sc.ModalLoginContainer>
  );
}