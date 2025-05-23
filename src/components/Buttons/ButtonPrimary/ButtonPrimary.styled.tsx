import { styled } from 'styled-components';
import { seWhite, seBlueYonder } from '../../../shared/colors';

export namespace sc {
  export const BtnContainer = styled.button<{
    width?: string;
    height?: string;
    color?: string;
    bgColor?: string;
    fontSize?: string;
    fontWeight?: string | number;
    borderRadius?: string;
    bordercolor?: string;
    margin?: string;
    padding?: string;
    cursor?: string;
    disabled?: boolean
  }>`
    width: ${(props) => props.width || '280px'};
    height: ${(props) => props.height || '40px'};
    border: ${(props) => (props.bordercolor ? `1px solid ${props.bordercolor}` : 'none')};
    border-radius: ${(props) => props.borderRadius || '4px'};
    color: ${(props) => props.color || `${seWhite}`};
    background-color: ${(props) => props.bgColor || `${seBlueYonder}`};
    font-size: ${(props) => props.fontSize || '16px'};
    font-weight: ${(props) => props.fontWeight || '500'};
    margin: ${(props) => props.margin || '0'};
    padding: ${(props) => props.padding || '0'};
    cursor: ${(props) => props.cursor || 'pointer'};
    opacity: ${(props) => props.disabled ? 0.5 : 1};
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  `;
}