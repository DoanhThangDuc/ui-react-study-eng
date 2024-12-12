import { styled } from 'styled-components';

export namespace sc {
  export const Container = styled.div<{ margin?: string }>`
  position: relative;
  margin: ${(props) => props.margin};
`;
  export const ButtonPrimary = styled.div``;
}