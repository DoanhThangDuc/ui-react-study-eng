import { ReactNode } from 'react';
import { SEReactProps } from '../../shared/typings/SeReactProp';
import { sc } from './Button.styled';
import { ButtonPrimary } from './ButtonPrimary/ButtonPrimary';

export type ButtonType =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'outline-danger'
  | 'danger'
  | 'transparent'
  | 'outline-light'
  | 'light'
  | 'lighter';

export type TextTransform = 'capitalize' | 'uppercase' | 'lowercase' | 'none';
export type FontWeight =
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 'normal'
  | 'bold'
  | 'bolder'
  | 'lighter';
export interface ButtonDriver {
  readonly type: ButtonType;
  readonly icon?: string;
  readonly ariaLable?: string
  readonly round?: boolean;
  readonly height?: string;
  readonly width?: string;
  readonly color?: string;
  readonly bgColor?: string;
  readonly mobileHeight?: string;
  readonly mobileWidth?: string;
  readonly mobileFontsize?: string;
  readonly fontSize?: string;
  readonly textTransform?: TextTransform;
  readonly disabled?: boolean;
  readonly fontWeight?: FontWeight;
  readonly fontFamily?: string;
  readonly margin?: string;
  readonly padding?: string;
  readonly mobileVisible?: boolean;
  readonly borderColor?: string;
  readonly dataTrackId?: string;
  readonly bgOnHovered?: string;
  readonly hover?: boolean;
  readonly cursor?: 'default' | 'pointer';
  onClick?(params?: any): void;
}
interface IProps extends SEReactProps  {
  driver: ButtonDriver
}
export function Button(props: IProps) {
  const { children, driver } = props;

  const renderButton = (children: ReactNode): ReactNode => {
    switch(driver.type) {
      case 'primary':
        return (
          <ButtonPrimary driver={ driver }>
            {children}</ButtonPrimary>
        );
      default:
        return <ButtonPrimary driver={ driver }>{children}</ButtonPrimary>;
    }
  };

  return (
    <sc.Container margin={driver.margin} className="visual-reg"
      onClick={
        (e) => {
          e.preventDefault();
          if(driver.onClick) {
            driver.onClick();
          }
        }
      }>
      {renderButton(<>{children}</>)}
    </sc.Container>
  );
}