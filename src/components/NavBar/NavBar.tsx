'use client';
import { useTranslation } from '../../../node_modules/react-i18next';
import { sc } from './NavBar.styled';
import { useRootPresenter } from '../Provider/PresenterProvider';
import { useState } from 'react';
import { NavBarPresenter } from '../../presenters/NavBarPresenter/NavBarPresenter';

export interface NavBarDriver {
}
export const  NavBar = () => {
  const { t } = useTranslation('navbar');
  const rootPresenter = useRootPresenter();
  const [ presenter ] = useState(() => new NavBarPresenter(rootPresenter));

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
            aria-label="Login-button"
            role="button"
            onClick={presenter.onOpenModal}>
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
};