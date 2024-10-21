import { styled } from 'styled-components';

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
  `;
}