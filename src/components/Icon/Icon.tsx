import { SEReactProps } from '../../shared/typings/SeReactProp';
import { sc } from './Icon.styled';
export interface IconDriver {
  dataCy?: string;
  icon: string;
  position?: string;
  pointer?: boolean;
  opacity?: number;
  width?: string;
  height?: string;
  padding?: string;
  color?: string;
  hoverColor?: string;
  backgroundColor?: string;
  zIndex?: number;
  rotate?: number;
  margin?: string;
  strokeColor?: string;
  fillColor?: string;
  onClick?(): void;
}
interface IProps extends SEReactProps {
  driver: IconDriver;
}
export function Icon(props: IProps) {
  const {  children } = props;
  return <sc.Container>{children}</sc.Container>;
}