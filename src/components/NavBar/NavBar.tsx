'use client';
import { useTranslation } from 'react-i18next';
import { sc } from './NavBar.styled';
import { useModal } from '../../redux/hooks';

export interface NavBarDriver {
}

type NavBarProps = {
  driver: NavBarDriver
}
export function NavBar(props: NavBarProps) {
  const { t } = useTranslation('navbar');
  const { openModal }= useModal();

  return (
    <sc.Container
      aria-label="Navbar"
      role="region">
      <sc.TrialContainer>
        <sc.TrialContent>
          {t('trial-content')}
        </sc.TrialContent>
      </sc.TrialContainer>

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
          <sc.ButtonsContainer onClick={() => openModal()}>
            <sc.LoginBtn >
              {t('login-btn')}
            </sc.LoginBtn>
            <sc.StartLearningBtn>
              {t('start-btn')}
            </sc.StartLearningBtn>
          </sc.ButtonsContainer>
        </sc.NavBarContent>
      </sc.NavigationContainer>

    </sc.Container>
  );
}