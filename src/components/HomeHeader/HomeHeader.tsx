import { useTranslation } from 'react-i18next';
import { sc } from './HomeHeader.styled';
import { useModal } from '../../redux/hooks';

export function HomeHeader() {
  const { t } = useTranslation('homepage');
  const { openModal }= useModal();

  return (
    <sc.ContentContainer
      aria-label="HomeHeader"
      role="region">
      <sc.HeaderContainer>
        <sc.BookLogo />
        <sc.HeaderTitleContainer>
          <sc.HeaderTitle>
            {t('header-title')}
          </sc.HeaderTitle>
        </sc.HeaderTitleContainer>
        <sc.JoinBtn
          onClick={openModal}>{t('join-btn')}</sc.JoinBtn>
      </sc.HeaderContainer>
    </sc.ContentContainer>
  );
}