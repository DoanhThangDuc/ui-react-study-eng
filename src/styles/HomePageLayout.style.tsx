import { styled } from 'styled-components';
import { seChampagnePink, seLust, seRickBlack, seWhite } from '../shared/colors';

export namespace sc {
  export const Container = styled.div`
    width: 100%;
    top: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    overflow: hidden;
  `;

  export const ContentContainer = styled.div`
    overflow: hidden;
    width: 100%;
    width: 1440px;
  `;
  export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 131px 0 160px 0;
  `;
  export const BookLogo = styled.image`
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
  export const GoodForHealthSection = styled.div`
    width: 100%;
    height: 788px;
    display: flex;
    justify-content: center;
    background: ${seChampagnePink};
  `;
  export const GoodForHealthContainer = styled.div`
    width: 1440px;
    height: 200px;
  `;
  export const GoodForHeath = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 64px;
    height: 192px;
  `;
  export const HeaderQuoteContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 48px;
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

  export const ContentTitle = styled.div`
    margin-top: 96px;
    display: flex;
    justify-content: center;
    font-size: 28px;
    font-weight: bold;
  `;
  export const PlanSection = styled.div`
    margin-top: 74px;
    display: flex;
    gap: 20px;
  `;
}