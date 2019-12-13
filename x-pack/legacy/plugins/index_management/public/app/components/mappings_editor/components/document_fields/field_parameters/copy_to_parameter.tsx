/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import React from 'react';

import { i18n } from '@kbn/i18n';

import { EditFieldFormRow } from '../fields/edit_field';
import { getFieldConfig } from '../../../lib';
import { UseField, Field } from '../../../shared_imports';

interface Props {
  defaultToggleValue: boolean;
}

export const CopyToParameter = ({ defaultToggleValue }: Props) => (
  <EditFieldFormRow
    title={i18n.translate('xpack.idxMgmt.mappingsEditor.copyToFieldTitle', {
      defaultMessage: 'Copy to',
    })}
    description={i18n.translate('xpack.idxMgmt.mappingsEditor.copyToFieldDescription', {
      defaultMessage: 'Whether to copy the values of multiple fields into a group field.',
    })}
    defaultToggleValue={defaultToggleValue}
  >
    <UseField path="copy_to" config={getFieldConfig('copy_to')} component={Field} />
  </EditFieldFormRow>
);
