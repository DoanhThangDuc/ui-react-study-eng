'use client';
import { NavBar } from '../../components/NavBar/NavBar';
import { HomeLayout } from '../../components/PageLayouts/HomeLayout';
import { HomeHeader } from '../../components/HomeHeader/HomeHeader';
import { ModalLoginSmart } from '../../components/Modal/ModalLogin/ModalLogin';
import { HomeBody } from '@/components/HomeBody/HomeBody';
import { HomeFooter } from '@/components/HomeFooter/HomeFooter';

export default function HomePage() {
  return (
    <HomeLayout
      renderNavBar={() => <NavBar />}
      renderHeader={() => <HomeHeader />}
      renderBody={() => <HomeBody />}
      renderFooter={() => <HomeFooter />}
      renderModal={() => <ModalLoginSmart />} />
  );
}
