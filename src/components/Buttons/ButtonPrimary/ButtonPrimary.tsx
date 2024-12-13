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
      data-cy={driver.dataCy}
      height={driver.height}
      width={driver.width}
      color={driver.color}
      bgColor={driver.bgColor}
      fontSize={driver.fontSize}
      fontWeight={driver.fontWeight}
      margin={driver.margin}
      padding={driver.padding}
      borderColor={driver.borderColor}
      cursor={driver.cursor}>
      {children}
    </sc.BtnContainer>
  );
}
