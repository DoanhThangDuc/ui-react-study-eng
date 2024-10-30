import {sc} from './UpgradePlan.styled';

export function UpgradePlan() {
  return (
    <sc.Container>
      <sc.ContentContainer>
        <sc.Header>
          <sc.Name>Basic</sc.Name>
          <sc.Icon />
        </sc.Header>

        <sc.Price>$23/ month</sc.Price>
        <sc.Content>
          <sc.Advancetage>
            <sc.AdvancetageLine>
              <sc.AdvancetageIcon />
              <sc.AdvancetageContent>
                10 English lessons monthly
              </sc.AdvancetageContent>
            </sc.AdvancetageLine>

            <sc.AdvancetageLine>
              <sc.AdvancetageIcon />
              <sc.AdvancetageContent>
                English music library
              </sc.AdvancetageContent>
            </sc.AdvancetageLine>

            <sc.AdvancetageLine>
              <sc.AdvancetageIcon />
              <sc.AdvancetageContent>
                Join our English learning community
              </sc.AdvancetageContent>
            </sc.AdvancetageLine>
          </sc.Advancetage>

          <sc.ChooseBtn>Choose Basic</sc.ChooseBtn>
        </sc.Content>
        <sc.Button></sc.Button>
      </sc.ContentContainer>
    </sc.Container>
  );
}