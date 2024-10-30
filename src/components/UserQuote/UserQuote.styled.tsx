import { styled } from 'styled-components';
import { seRickBlack, seWhite } from '../../shared/colors';

export namespace sc {
  export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: ${seWhite};
    width: 313px;
    height: 313x;
    border-radius: 24px;
  `;
  export const QuoteIcon = styled.div`
    width: 40px;
    height: 40px;
    background-image: url("../images/icon-quote.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-color: transparent;
    border: none;
    mix-blend-mode: multiply;
  `;
  export const ContentContainer = styled.div`
    padding: 32px 24px 24px 24px;
    margin: 0px;
  `;
  export const QuoteContent = styled.p`
    font-size: 28px;
    margin: 0px;
    padding-top: 32px;
  `;
  export const UserContainer = styled.div`
    padding-top: 48px;
    display: inline-flex;
  `;
  export const UserAvatar = styled.div`
    width: 40px;
    height: 40px;
    padding-right: 12px;
    background-image: url("../images/avatar.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-color: transparent;
    border: none;
    mix-blend-mode: multiply;
  `;
  export const UserDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `;
  export const UserName = styled.div`
    font-size: 16px;
    color: ${seRickBlack};
  `;
  export const UserPosition = styled.div`
    font-size: 14px;
  `;
}