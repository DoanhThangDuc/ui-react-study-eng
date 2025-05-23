import { SEReactProps } from '../../../shared/typings/SeReactProp';
import { ButtonDriver } from '../Button';
import { sc } from './ButtonPrimary.styled';

interface IProps extends SEReactProps {
  driver: ButtonDriver,
}
export function ButtonPrimary(props: IProps) {
  const { driver, children } = props;

  return (
    <sc.BtnContainer
      aria-label={driver.ariaLable}
      role='button'
      height={driver.height}
      width={driver.width}
      color={driver.color}
      bgColor={driver.bgColor}
      fontSize={driver.fontSize}
      fontWeight={driver.fontWeight}
      margin={driver.margin}
      padding={driver.padding}
      bordercolor={driver.borderColor}
      cursor={driver.cursor}
      disabled={driver.disabled}>
      {children}
    </sc.BtnContainer>
  );
}
