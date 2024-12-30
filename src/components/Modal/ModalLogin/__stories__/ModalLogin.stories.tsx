import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ModalLogin } from '../ModalLogin';
import { ModalLoginDriver } from '../ModalLogin';
import { LazyModalWrapper } from '../../../LazyModalWrapper/LazyModalWrapper';
import { ModalLoginLayout } from '../ModalLoginLayout';
import i18n from '../../../../i18n/i18n';

const MockModalDriver: ModalLoginDriver = {
  isOpen: true,
  emailAddress: '',
  emailErrorMessage: '',
  password: '',
  passwordErrorMessage: '',
  onEmailBlur: () => console.log('Email blur triggered'),
  onPasswordBlur: () => console.log('Password blur triggered'),
  onEmailChange: (email: string) => console.log('Email changed to:', email),
  onPasswordChange: (password: string) =>
    console.log('Password changed to:', password),
  handleSubmitLogin: async (): Promise<void> => {
    console.log('Login submitted');
  },
  onCloseModal: () => console.log('Modal closed'),
  onOpenModal: () => console.log('Modal opened'),
};

export default {
  title: 'Components/ModalLogin',
  component: ModalLogin,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof ModalLogin>;

const Template: StoryFn<typeof ModalLogin> = (args: any) => (
  <ModalLoginLayout driver={args.driver}
    renderModalWrapper={(children) => (
      <LazyModalWrapper driver={args.driver}>
        {children}
      </LazyModalWrapper>
    )}>
  </ModalLoginLayout>
);

export const Default = Template.bind({});
Default.args = {
  driver: {
    ...MockModalDriver,
    isOpen: true,
  },
};
export const DefaultWithVietNamese = Template.bind({});
DefaultWithVietNamese.args = {
  driver: {
    ...MockModalDriver,
    isOpen: true,
  },
};
DefaultWithVietNamese.decorators = [
  (Story) => {
    i18n.changeLanguage('vi');
    return <Story />;
  },
];

export const WithRequireErrors = Template.bind({});
WithRequireErrors.args = {
  driver: {
    ...MockModalDriver,
    emailErrorMessage: 'modal-login.email-required',
    passwordErrorMessage: 'modal-login.password-required',
  },
};
export const WithRequireErrorsVietNamese = Template.bind({});
WithRequireErrorsVietNamese.args = {
  driver: {
    ...MockModalDriver,
    emailErrorMessage: 'modal-login.email-required',
    passwordErrorMessage: 'modal-login.password-required',
  },
};
WithRequireErrorsVietNamese.decorators = [
  (Story) => {
    i18n.changeLanguage('vi');
    return <Story />;
  },
];

export const WithInvalidErrors = Template.bind({});
WithInvalidErrors.args = {
  driver: {
    ...MockModalDriver,
    emailErrorMessage: 'modal-login.email-invalid',
    passwordErrorMessage: 'modal-login.email-invalid',
  },
};
export const WithInvalidErrorsVietNamese = Template.bind({});
WithInvalidErrorsVietNamese.args = {
  driver: {
    ...MockModalDriver,
    emailErrorMessage: 'modal-login.email-invalid',
    passwordErrorMessage: 'modal-login.email-invalid',
  },
};
WithInvalidErrorsVietNamese.decorators = [
  (Story) => {
    i18n.changeLanguage('vi');
    return <Story />;
  },
];

export const WithPasswordUppercaseErrors = Template.bind({});
WithPasswordUppercaseErrors.args = {
  driver: {
    ...MockModalDriver,
    passwordErrorMessage: 'modal-login.password-uppercase-character',
  },
};
export const WithPasswordUppercaseErrorsVietNamese = Template.bind({});
WithPasswordUppercaseErrorsVietNamese.args = {
  driver: {
    ...MockModalDriver,
    passwordErrorMessage: 'modal-login.password-uppercase-character',
  },
};
WithPasswordUppercaseErrorsVietNamese.decorators = [
  (Story) => {
    i18n.changeLanguage('vi');
    return <Story />;
  },
];

export const WithPasswordSpecialCharacterErrors = Template.bind({});
WithPasswordSpecialCharacterErrors.args = {
  driver: {
    ...MockModalDriver,
    passwordErrorMessage: 'modal-login.password-special-character',
  },
};
export const WithPasswordSpecialCharacterErrorsVietNamese = Template.bind({});
WithPasswordSpecialCharacterErrorsVietNamese.args = {
  driver: {
    ...MockModalDriver,
    passwordErrorMessage: 'modal-login.password-uppercase-character',
  },
};
WithPasswordSpecialCharacterErrorsVietNamese.decorators = [
  (Story) => {
    i18n.changeLanguage('vi');
    return <Story />;
  },
];

export const PreFilled = Template.bind({});
PreFilled.args = {
  driver: {
    ...MockModalDriver,
    emailAddress: 'test@example.com',
    password: 'Password123',
  },
};
export const PreFilledVietNamese = Template.bind({});
PreFilledVietNamese.args = {
  driver: {
    ...MockModalDriver,
    emailAddress: 'test@example.com',
    password: 'Password123',
  },
};
PreFilledVietNamese.decorators = [
  (Story) => {
    i18n.changeLanguage('vi');
    return <Story />;
  },
];