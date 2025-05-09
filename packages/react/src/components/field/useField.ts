import * as React from 'react';
import { Platform } from 'react-native';
import type { UseFieldProps } from './types';
import { 
  getNativeFieldAccessibilityProps, 
  getNativeFieldElementAccessibilityProps, 
  getWebFieldAccessibilityProps, 
  getFieldElementAccessibilityProps 
} from './utils';

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
    const baseProps = Platform.select({
      web: {
        ...getWebFieldAccessibilityProps({ error, required }),
        ...getFieldElementAccessibilityProps({
          id: ids.fieldId,
          describedBy: ids.descriptionId,
          labelledBy: ids.fieldId,
        }),
      },
      default: {
        ...getNativeFieldAccessibilityProps({ error, required }),
        ...getNativeFieldElementAccessibilityProps({
          id: ids.fieldId,
          describedBy: ids.descriptionId,
          labelledBy: ids.fieldId,
        }),
      },
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