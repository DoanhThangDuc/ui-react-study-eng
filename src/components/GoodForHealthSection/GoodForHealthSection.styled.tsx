import { styled } from 'styled-components';
import { seChampagnePink } from '../../shared/colors';

export namespace sc {
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
  export const ContentTitle = styled.div`
    margin-top: 96px;
    display: flex;
    justify-content: center;
    font-size: 28px;
    font-weight: bold;
  `;
}