import { sc } from './NavBar.styled';

export function NavBar() {
  return (
    <sc.Container>
      <sc.TrialContainer>
        <sc.TrialContent>
            Start your free trial now!
        </sc.TrialContent>
      </sc.TrialContainer>

      <sc.NavigationContainer>
        <sc.NavBarContent>

          <sc.LogoContainer>
            <sc.Logo/>
            <sc.CompanyName>
          Eng-Alien
            </sc.CompanyName>
          </sc.LogoContainer>

          <sc.Navigators>
            <sc.NavigatorItem>
          IELTS Course
            </sc.NavigatorItem>

            <sc.NavigatorItem>
          TOEIC Course
            </sc.NavigatorItem>

            <sc.NavigatorItem>
          Business English Course
            </sc.NavigatorItem>

            <sc.NavigatorItem>
          Grammar Course
            </sc.NavigatorItem>

          </sc.Navigators>

          <sc.ButtonsContainer>
            <sc.LoginBtn>Log in</sc.LoginBtn>
            <sc.StartLearningBtn>Start learning</sc.StartLearningBtn>
          </sc.ButtonsContainer>
        </sc.NavBarContent>

      </sc.NavigationContainer>
    </sc.Container>
  );
}