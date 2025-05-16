import { type CheckboxRootProps } from '../checkbox';
import { type InputRootProps } from '../input';
import { type SwitchRootProps } from '../switch';
import { type UseFieldProps } from '../field/types';

export type FieldsProps = {
  label?: string;
  description?: string;
  isValid?: boolean;
  error?: UseFieldProps['error'];
};

export type CheckboxFieldRootProps = CheckboxRootProps & UseFieldProps & FieldsProps;

export type InputFieldRootProps = InputRootProps & UseFieldProps & FieldsProps;

export type SwitchFieldRootProps = SwitchRootProps & UseFieldProps & FieldsProps;
