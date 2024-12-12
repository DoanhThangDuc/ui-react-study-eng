import { useTranslation } from 'react-i18next';
import { HeathBenefit } from '../HeathBenefit/HeathBenefit';
import { UserQuote } from '../UserQuote/UserQuote';
import { sc } from './GoodForHealthSection.styled';
export function GoodForHealthSection(){
  const { t } = useTranslation('homepage');

  return (
    <sc.GoodForHealthSection
      aria-label="GoodForHealthSection"
      role="region"
    >
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
  );
}