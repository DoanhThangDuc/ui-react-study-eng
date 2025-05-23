import { observer } from 'mobx-react-lite';
import { sc } from './HomeLayout.styled';

export interface HomeLayoutProps {
  renderNavBar: ()=> React.ReactNode
  renderHeader: ()=> React.ReactNode
  renderBody: ()=> React.ReactNode
  renderFooter: ()=> React.ReactNode
  renderModal: ()=> React.ReactNode
}
export const HomeLayout = observer((props: HomeLayoutProps) => {
  const { renderNavBar, renderHeader, renderBody, renderFooter, renderModal } = props;

  return (
    <sc.HomeLayoutContainer
      aria-label="HomeLayoutContainer"
      role="region">
      {renderModal()}
      {renderNavBar()}
      {renderHeader()}
      {renderBody()}
      {renderFooter()}
    </sc.HomeLayoutContainer>
  );
});