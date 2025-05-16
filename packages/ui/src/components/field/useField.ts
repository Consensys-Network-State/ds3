import * as React from 'react';
import type { UseFieldProps } from './types';
import { getFieldAccessibilityProps } from './utils';

export function useField({
  error,
  required,
  ariaProps: extraAriaProps = {},
}: UseFieldProps = {}) {
  const id = React.useId();

  const ids = React.useMemo(() => ({
    fieldId: `${id}-field`,
    descriptionId: `${id}-description`,
  }), [id]);

  const ariaProps = React.useMemo(() => {
    const baseProps = getFieldAccessibilityProps({
      error,
      required,
      id: ids.fieldId,
      describedBy: ids.descriptionId,
      labelledBy: ids.fieldId,
    });

    return {
      ...baseProps,
      ...extraAriaProps
    };
  }, [ids.fieldId, ids.descriptionId, error, required, extraAriaProps]);

  return {
    fieldId: ids.fieldId,
    descriptionId: ids.descriptionId,
    ariaProps,
  };
} 