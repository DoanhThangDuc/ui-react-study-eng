'use client';
import { NavBar } from '../../components/NavBar/NavBar';
import { HomeLayout } from '../../components/PageLayouts/HomeLayout';
import { HomeHeader } from '../../components/HomeHeader/HomeHeader';
import { GoodForHealthSection } from '../../components/GoodForHealthSection/GoodForHealthSection';
import { PlanSection } from '../../components/PlanSection/PlanSection.styled';
import { AppDispatch } from '../../lib/store';
import { useDispatch } from 'react-redux';
import { ModalLogin } from '../../components/Modal/ModalLogin';

export default function HomePage() {
  const dispatch: AppDispatch = useDispatch();

  return (
    <HomeLayout
      renderNavBar={()=> (<NavBar driver={{dispatch}}
      />)}
      renderHeader={()=> (<HomeHeader />)}
      renderBody={()=>(<GoodForHealthSection />)}
      renderFooter={()=>(<PlanSection />)}
      renderModal={()=> <ModalLogin />}
    />
  );
}