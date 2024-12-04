'use client';
import { NavBar } from '../../components/NavBar/NavBar';
import { HomeLayout } from '../../components/PageLayouts/HomeLayout';
import { HomeHeader } from '../../components/HomeHeader/HomeHeader';
import { GoodForHealthSection } from '../../components/GoodForHealthSection/GoodForHealthSection';
import { PlanSection } from '../../components/PlanSection/PlanSection.styled';

export default function LocalePage() {
  return (
    <HomeLayout
      renderNavBar={()=> (<NavBar />)}
      renderHeader={()=> (<HomeHeader />)}
      renderBody={()=>(<GoodForHealthSection />)}
      renderFooter={()=>(<PlanSection />)}
    >
    </HomeLayout>
  );
}