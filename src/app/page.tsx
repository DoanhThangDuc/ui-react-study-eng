'use client';
import { NavBar } from '../components/NavBar/NavBar';
import {sc} from './../styles/HomePageLayout.style';

export default function HomePage() {
  return (
    <sc.Container>
      <NavBar />
      <sc.ContentContainer>

      </sc.ContentContainer>
    </sc.Container>
  );
}
