import { sc } from './HomeLayout.styled';

export interface HomeLayoutProps {
  renderNavBar: ()=> React.ReactNode
  renderHeader: ()=> React.ReactNode
  renderBody: ()=> React.ReactNode
  renderFooter: ()=> React.ReactNode
  renderModal: ()=> React.ReactNode
}
export function HomeLayout(props: HomeLayoutProps) {
  const { renderNavBar, renderHeader, renderBody, renderFooter, renderModal } = props;

  return (
    <sc.HomeLayoutContainer
      arial-layout="HomeLayoutContainer"
      role="region">
      {renderModal()}
      {renderNavBar()}
      {renderHeader()}
      {renderBody()}
      {renderFooter()}
    </sc.HomeLayoutContainer>
  );
}