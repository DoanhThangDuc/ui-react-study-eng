import { useTranslation } from '../../../../node_modules/react-i18next';
import { sc } from './ModalLoginLayout.styled';
import { Button } from '../../Buttons/Button';
import { seDarkGunmetal, seSpanishGray, seSpiroDiscoBall, seWhite } from '../../../shared/colors';
import { FaFacebookSquare } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { SEReactProps } from '../../../shared/typings/SeReactProp';
import { ReactNode } from 'react';
import { ModalLoginDriver } from './ModalLogin';
import { observer } from 'mobx-react-lite';

interface IProps extends SEReactProps {
  driver: ModalLoginDriver;
  renderModalWrapper(children: ReactNode): ReactNode;
}
export const ModalLoginLayout = observer((props: IProps) => {
  const { t }= useTranslation('modal-login');
  const { renderModalWrapper, driver } = props;

  return (
    <sc.Container>
      {renderModalWrapper(
        <sc.ModalLoginContainer
          role="modal"
          aria-label="ModalLoginContainer"
          onSubmit={driver.onLoginButtonClicked}>
          <sc.ContentColumn >
            <sc.ContentHeader>
              <sc.Title>
                {t('modal-login.login-title')}
              </sc.Title>
            </sc.ContentHeader>
            <sc.EmailInput
              type="email"
              id="email"
              name="email"
              placeholder='Email'
              value={driver.emailAddress}
              onBlur={driver.onEmailBlur}
              onChange={(input) => {
                driver.onEmailChange(input.target.value);
              }}
              isEmailValid={!driver.emailErrorMessage} />
            {!!driver.emailErrorMessage && <sc.ErrorLabel>
              {t(driver.emailErrorMessage)}
            </sc.ErrorLabel>}

            <sc.PasswordInput
              type="password"
              id="password"
              name="password"
              placeholder='Password'
              value={driver.password}
              isPasswordValid={!driver.passwordErrorMessage}
              onBlur={driver.onPasswordBlur}
              onChange={(input) => {
                driver.onPasswordChange(input.target.value);
              }} />
            {!!driver.passwordErrorMessage && <sc.ErrorLabel>
              {t(driver.passwordErrorMessage)}
            </sc.ErrorLabel>}

            <Button
              driver={{
                type: 'primary',
                color: seWhite,
                bgColor: seSpiroDiscoBall,
                disabled: driver.isLoginButtonDisabled,
                onClick: driver.onLoginButtonClicked
              }}>
              <sc.LoginBtn >
                {t('modal-login.login-btn')}
              </sc.LoginBtn>
            </Button>
            <sc.DividerContainer>
              <sc.DivideText>{t('modal-login.or-text')}</sc.DivideText>
            </sc.DividerContainer>
            <Button
              driver={{
                type: 'primary',
              }}>
              <sc.LoginBtnContent>
                <FaFacebookSquare size={20} />
                {t('modal-login.login-by-facebook-btn')}
              </sc.LoginBtnContent>
            </Button>
            <Button
              driver={{
                type: 'primary',
                margin: '10px 0 0 0',
                bgColor: seWhite,
                color: seDarkGunmetal,
                borderColor: seSpanishGray,
              }}>
              <sc.LoginBtnContent>
                <FcGoogle size={20} />
                {t('modal-login.login-by-google-btn')}
              </sc.LoginBtnContent>
            </Button>
          </sc.ContentColumn>
          <sc.SignIn>
            {t('modal-login.need-account')}
          </sc.SignIn>
        </sc.ModalLoginContainer>
      )}

    </sc.Container>
  );
});