'use client';
import { useTranslation } from 'react-i18next';
import { HeathBenefit } from '../../components/HeathBenefit/HeathBenefit';
import { NavBar } from '../../components/NavBar/NavBar';
import { UpgradePlan } from '../../components/UpgradePlan/UpgradePlan';
import { UserQuote } from '../../components/UserQuote/UserQuote';
import {sc} from '../../styles/HomePageLayout.style';

export default function LocalePage() {
  const { t , ready} = useTranslation('homepage');
  if (!ready) {
    return <div>Loading translations...</div>;
  }

  return (
    <sc.Container>
      <NavBar />
      <sc.ContentContainer>
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

      <sc.GoodForHealthSection>
        <sc.GoodForHealthContainer>
          <sc.GoodForHeath>
            <HeathBenefit />
            <HeathBenefit />
            <HeathBenefit />
          </sc.GoodForHeath>
          <sc.ContentTitle>
            {t('good-for-health-title')}
          </sc.ContentTitle>

          <sc.HeaderQuoteContainer>
            <UserQuote />
            <UserQuote />
            <UserQuote />
            <UserQuote />
          </sc.HeaderQuoteContainer>
        </sc.GoodForHealthContainer>
      </sc.GoodForHealthSection>

      <sc.ContentTitle>
        {t('plan-title')}
      </sc.ContentTitle>

      <sc.PlanSection>
        <UpgradePlan />
        <UpgradePlan />
        <UpgradePlan />
      </sc.PlanSection>
    </sc.Container>
  );
}