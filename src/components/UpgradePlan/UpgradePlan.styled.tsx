import { styled } from 'styled-components';
import { seChampagnePink, seLust, seRickBlack, seWhite } from '../../shared/colors';

export namespace sc {
  export const Container = styled.div`
    width: 424px;
    height: 367px;
    background-color: ${seChampagnePink};
    border-radius: 40px;
  `;
  export const ContentContainer = styled.div`
    padding: 40px 27px 32px 32px;
  `;
  export const Header = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  export const Name = styled.div`
    font-size: 24px;
    font-weight: bold;
  `;
  export const Icon = styled.div`
    width: 31px;
    height: 31px;
    background: url("../images/icon-redeem.png") center no-repeat;
    background-size: contain;
    border: none;
    mix-blend-mode: multiply;
  `;
  export const Price = styled.div`
    font-size: 32px;
    color: ${seRickBlack};
    padding-top: 8px;
  `;
  export const Content = styled.div``;
  export const Advancetage = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 32px;
    gap: 8px; 
  `;
  export const AdvancetageLine = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
  `;
  export const AdvancetageIcon = styled.div`
    width: 23px;
    height: 23px;
    background: url("../images/icon-circle-xmark.png") center no-repeat;
    background-size: contain;
    border: none;
    mix-blend-mode: multiply;
  `;
  export const AdvancetageContent = styled.div`
    font-size: 16px;
    color: ${seRickBlack};
  `;
  export const Button = styled.div``;

  export const ChooseBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: 40px;
    min-width: 80px;
    padding: 0 10px;
    width: 165px;

    border-radius: 24px;
    margin-top: 62px;

    color: ${seWhite};
    background-color: ${seLust};

    &:hover {
      cursor: pointer;
    }
  `;
}