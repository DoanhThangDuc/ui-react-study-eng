import { styled } from 'styled-components';
import { seLust, seWhite } from '../../shared/colors';

export namespace sc {
  export const ContentContainer = styled.div`
    width: 100%;
  `;
  export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 131px 0 160px 0;
  `;
  export const BookLogo = styled.div`
    width: 200px;
    height: 200px;
    background: url("../images/book-icon.png") center no-repeat;
    background-size: contain;
    border: none;
  `;
  export const HeaderTitleContainer = styled.div`
    width: 718px;
  `;
  export const HeaderTitle = styled.p`
    font-size: 64px;
    font-weight: 500;
    text-align: center;
    margin: 0;
  `;
  export const JoinBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: 40px;
    min-width: 80px;
    padding: 0 10px;

    border-radius: 24px;
    margin-top: 62px;

    color: ${seWhite};
    background-color: ${seLust};

    &:hover {
      cursor: pointer;
    }
  `;
}