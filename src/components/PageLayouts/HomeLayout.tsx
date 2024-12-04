import { sc } from './HomeLayout.styled';

export interface HomeLayoutProps {
  renderNavBar: ()=> React.ReactNode
  renderHeader: ()=> React.ReactNode
  renderBody: ()=> React.ReactNode
  renderFooter: ()=> React.ReactNode
}
export function HomeLayout(props: HomeLayoutProps) {
  const {renderNavBar, renderHeader, renderBody, renderFooter} = props;

  return (
    <sc.HomeLayoutContainer>
      {renderNavBar()}
      {renderHeader()}
      {renderBody()}
      {renderFooter()}
    </sc.HomeLayoutContainer>
  );
}