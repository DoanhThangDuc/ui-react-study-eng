import { styled } from 'styled-components';
import { seBlack } from '../../shared/colors';

export namespace sc {
  export const ModalBody = styled.div<{
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    className?: string;
  }>`
    position: absolute;
    top: ${(props) => props.top || 'auto'};
    bottom: ${(props) => props.bottom || 'auto'};
    left: ${(props) => props.left || 'auto'};
    right: ${(props) => props.right || 'auto'};
  `;

  export const ModalOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${seBlack};
    opacity: 0.5;
    z-index: 1;
  `;
}