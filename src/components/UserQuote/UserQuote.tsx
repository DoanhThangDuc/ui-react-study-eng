import {sc} from './UserQuote.styled';
export function UserQuote() {
  return (
    <sc.Container>
      <sc.ContentContainer>
        <sc.QuoteIcon />
        <sc.QuoteContent>
      I feel more confident and fluent.
        </sc.QuoteContent>
        <sc.UserContainer>
          <sc.UserAvatar />
          <sc.UserDetails>
            <sc.UserName>Matthew L.</sc.UserName>
            <sc.UserPosition>CEO of Company</sc.UserPosition>
          </sc.UserDetails>
        </sc.UserContainer>
      </sc.ContentContainer>
    </sc.Container>
  );
}