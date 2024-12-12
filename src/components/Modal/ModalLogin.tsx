import { useTranslation } from 'react-i18next';
import { sc } from './ModalLogin.styled';
import { Button } from '../Buttons/Button';
import { seDarkGunmetal, seSpiroDiscoBall, seWhite } from '../../shared/colors';
import { FaFacebookSquare } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

export function ModalLogin() {
  const { t }= useTranslation('modal');

  return (
    <sc.Container arial-lable="ModalLogin-Container" role="dialog">
      <sc.Overlay/>
      <sc.ModalLoginContainer>
        <sc.ContentColumn>

          <sc.ContentHeader>
            <sc.Title>
              {t('modal-login.login-title')}
            </sc.Title>
          </sc.ContentHeader>

          <sc.UserNameInput
            type="email"
            id="email"
            name="email"
            placeholder='Email'
          />

          <sc.PasswordInput
            type="password"
            id="password"
            name="password"
            placeholder='Password'
          />

          <Button
            driver={{
              type: 'primary',
              dataCy: 'LoginBtn',
              color: seWhite,
              bgColor: seSpiroDiscoBall
            }}>
            <sc.LoginBtn>
              {t('modal-login.login-btn')}
            </sc.LoginBtn>
          </Button>

          <sc.DividerContainer>
            <sc.DivideText>OR</sc.DivideText>
          </sc.DividerContainer>

          <Button
            driver={{
              type: 'primary',
              dataCy: 'LoginByFaceBook',
            }}>
            <sc.LoginBtnContent>
              <FaFacebookSquare size={20}/>
              {t('modal-login.login-by-facebook-btn')}
            </sc.LoginBtnContent>
          </Button>

          <Button
            driver={{
              type: 'primary',
              dataCy: 'LoginByGoogle',
              margin: '10px 0 0 0',
              bgColor: seWhite,
              color: seDarkGunmetal,
              borderColor: seDarkGunmetal
            }}>
            <sc.LoginBtnContent>
              <FcGoogle size={20}/>
              {t('modal-login.login-by-google-btn')}
            </sc.LoginBtnContent>
          </Button>
        </sc.ContentColumn>

        <sc.SignIn>
          {t('modal-login.need-account')}
        </sc.SignIn>
      </sc.ModalLoginContainer>
    </sc.Container>
  );
}