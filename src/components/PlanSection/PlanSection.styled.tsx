import { useTranslation } from 'react-i18next';
import { UpgradePlan } from '../UpgradePlan/UpgradePlan';
import { sc } from './PlanSection';

export function PlanSection() {
  const { t } = useTranslation('homepage');

  return (
    <sc.Container
      aria-label="PlanSection"
      role="region">
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