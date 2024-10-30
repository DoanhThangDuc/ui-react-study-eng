'use client';
import { HeathBenefit } from '../components/HeathBenefit/HeathBenefit';
import { NavBar } from '../components/NavBar/NavBar';
import { UpgradePlan } from '../components/UpgradePlan/UpgradePlan';
import { UserQuote } from '../components/UserQuote/UserQuote';
import {sc} from './../styles/HomePageLayout.style';

export default function HomePage() {
  return (
    <sc.Container>
      <NavBar />
      <sc.ContentContainer>
        <sc.HeaderContainer>
          <sc.BookLogo />
          <sc.HeaderTitleContainer>
            <sc.HeaderTitle>
          Improve your English <br/> skills with interactive learning sessions
            </sc.HeaderTitle>
          </sc.HeaderTitleContainer>
          <sc.JoinBtn>Join now</sc.JoinBtn>
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
          Join EnglishStudyHub community and connect with more than 1M users
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
      Choose your plan
      </sc.ContentTitle>

      <sc.PlanSection>
        <UpgradePlan />
        <UpgradePlan />
        <UpgradePlan />
      </sc.PlanSection>
    </sc.Container>
  );
}
