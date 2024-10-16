'use client';

import { sc } from './NavBar.styled';
export function NavBar() {
  return (
    <sc.Container>
      <sc.TrialContainer>
        <sc.TrialContent>
            Start your free trial now!
        </sc.TrialContent>
      </sc.TrialContainer>

      <sc.NavBarContainer/>
    </sc.Container>
  );
}