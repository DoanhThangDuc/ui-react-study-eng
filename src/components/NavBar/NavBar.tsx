'use client';
import { useTranslation } from '../../../node_modules/react-i18next';
import { sc } from './NavBar.styled';

export interface NavBarDriver {
  isLoggedInUser: boolean
  onOpenModal: () => void
}
interface NavBarProps {
  driver: NavBarDriver
}
export const  NavBar = (props: NavBarProps) => {
  const { t } = useTranslation('navbar');
  const { driver } = props;

  return (
    <sc.Container
      aria-label="Navbar"
      role="region">
      <sc.NavigationContainer>
        <sc.NavBarContent>
          <sc.LogoContainer>
            <sc.Logo />
            <sc.CompanyName>
              {t('company-name')}
            </sc.CompanyName>
          </sc.LogoContainer>
          <sc.Navigators>
            <sc.NavigatorItem>
              {t('ielts-course')}
            </sc.NavigatorItem>
            <sc.NavigatorItem>
              {t('toeic-course')}
            </sc.NavigatorItem>
            <sc.NavigatorItem>
              {t('bussiness-course')}
            </sc.NavigatorItem>
            <sc.NavigatorItem>
              {t('grammar-course')}
            </sc.NavigatorItem>
          </sc.Navigators>
          <sc.ButtonsContainer
            role="button"
            onClick={driver.onOpenModal}>
            <sc.LoginBtn
              aria-label='ModalLoginLayout-LoginBtn'>
              {t('login-btn')}
            </sc.LoginBtn>
            <sc.StartLearningBtn
              aria-label='ModalLoginLayout-StartLearningBtn'>
              {t('start-btn')}
            </sc.StartLearningBtn>
          </sc.ButtonsContainer>
        </sc.NavBarContent>
      </sc.NavigationContainer>
    </sc.Container>
  );
};