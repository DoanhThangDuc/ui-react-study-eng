'use client';
import { NavBar } from '../../components/NavBar/NavBar';
import { HomeLayout } from '../../components/PageLayouts/HomeLayout';
import { HomeHeader } from '../../components/HomeHeader/HomeHeader';
import { ModalLoginSmart } from '../../components/Modal/ModalLogin/ModalLogin';
import { HomeBody } from '@/components/HomeBody/HomeBody';
import { HomeFooter } from '@/components/HomeFooter/HomeFooter';
import { useRootPresenter } from '../../components/Provider/PresenterProvider';
import { useState } from 'react';
import { HomePresenter } from '../../presenters/HomePresenter/HomePresenter';

export default function HomePage() {
  const rootPresenter = useRootPresenter();
  const [ homePresenter ] = useState(() => new HomePresenter(rootPresenter));

  return (
    <HomeLayout
      renderNavBar={() => <NavBar driver={homePresenter.navbarDriver} />}
      renderHeader={() => <HomeHeader driver={homePresenter.navbarDriver} />}
      renderBody={() => <HomeBody />}
      renderFooter={() => <HomeFooter />}
      renderModal={() => <ModalLoginSmart />} />
  );
}
