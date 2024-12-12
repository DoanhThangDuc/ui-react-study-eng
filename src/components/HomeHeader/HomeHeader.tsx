import { useTranslation } from 'react-i18next';
import {sc} from './HomeHeader.styled';

export function HomeHeader() {
  const { t } = useTranslation('homepage');

  return (
    <sc.ContentContainer
      aria-label="HomeHeader"
      role="region"
    >
      <sc.HeaderContainer>
        <sc.BookLogo />
        <sc.HeaderTitleContainer>
          <sc.HeaderTitle>
            {t('header-title')}
          </sc.HeaderTitle>
        </sc.HeaderTitleContainer>
        <sc.JoinBtn>{t('join-btn')}</sc.JoinBtn>
      </sc.HeaderContainer>
    </sc.ContentContainer>
  );
}