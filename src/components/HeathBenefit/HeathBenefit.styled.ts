import { styled } from 'styled-components';

export namespace sc {
  export const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 24px;
  `;
  export const Icon = styled.div`
    width: 76px;
    height: 76px;
    background-image: url("../images/icon-brain.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-color: transparent;
    border: none;
    mix-blend-mode: multiply;
  `;
  export const TitleContainer = styled.div`
    height: 76px;
    max-width: 324px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
  `;
  export const Title = styled.p`
    margin: 0;
    font-size: 20px;
    font-weight: bold;
    max-height: 26px;
    box-sizing: border-box;
  `;
  export const SubTitle = styled.p`
    margin: 0;
    font-size: 16px;
  `;
}