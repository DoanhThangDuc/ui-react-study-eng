import { sc } from './HomeFooter.styled';
export function HomeFooter() {
  return (
    <sc.FooterContainer>
      <sc.CompanyContent>
        <sc.AboutCompany>About Study English hup</sc.AboutCompany>
        <sc.CompanyLaunchTime>Trust since 2025</sc.CompanyLaunchTime>
      </sc.CompanyContent>

      <sc.FooterContent>
        <sc.ContentColumn>
          <sc.ContentRow>About us</sc.ContentRow>
          <sc.ContentRow>Careers</sc.ContentRow>
          <sc.ContentRow>Contact</sc.ContentRow>
          <sc.ContentRow>Blogs</sc.ContentRow>
        </sc.ContentColumn>

        <sc.ContentColumn>
          <sc.ContentRow>Comunity</sc.ContentRow>
          <sc.ContentRow>Help center</sc.ContentRow>
          <sc.ContentRow>Become PRO</sc.ContentRow>
        </sc.ContentColumn>

        <sc.ContentColumn>
          <sc.ContentRow>Follow us</sc.ContentRow>
          <sc.ContentRow>Twitter</sc.ContentRow>
          <sc.ContentRow>Instagram</sc.ContentRow>
        </sc.ContentColumn>
      </sc.FooterContent>
    </sc.FooterContainer>
  );
}
