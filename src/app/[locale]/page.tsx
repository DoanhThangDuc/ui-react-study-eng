'use client';
import { NavBar } from '../../components/NavBar/NavBar';
import { HomeLayout } from '../../components/PageLayouts/HomeLayout';
import { HomeHeader } from '../../components/HomeHeader/HomeHeader';
import { GoodForHealthSection } from '../../components/GoodForHealthSection/GoodForHealthSection';
import { PlanSection } from '../../components/PlanSection/PlanSection.styled';
import { ModalLogin } from '../../components/Modal/ModalLogin/ModalLogin';

export default function HomePage() {

  return (
    <HomeLayout
      renderNavBar={() => (<NavBar />)}
      renderHeader={() => (<HomeHeader />)}
      renderBody={() => (<GoodForHealthSection />)}
      renderFooter={() => (<PlanSection />)}
      renderModal={() => <ModalLogin />} />
  );
}