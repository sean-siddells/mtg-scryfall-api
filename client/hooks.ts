import React, { useState } from 'react';
import {
  SearchParameter, FormData, FilterParam, Colours,
} from './types';
import { FIELD_IDS } from './constants';
import { toggleColour } from './helpers';

// listens for changes in formData values and updates payload in state before submission
const UseHandleFormDataChange = (
  data: FormData,
  input: React.ChangeEvent<HTMLInputElement>,
  searchParam: SearchParameter,
) => {
  const fieldId = input.target.id as FIELD_IDS;
  const fieldValue = input.target.value;
  const [payload, setPayload] = useState({ ...data });

  // handle dropdown filter param selection
  if (fieldId === FIELD_IDS.FILTER_PARAM && searchParam === 'colour') {
    payload.colour.filterParam = fieldValue as FilterParam;
  }

  //  handle color checkbox selection
  if (input.target.id !== 'condition' && searchParam === 'colour') {
    payload.colour.selectedColours = toggleColour(
      data.colour.selectedColours,
      fieldValue as Colours,
    );
  }

  setPayload(payload);
  // handle
};

export default UseHandleFormDataChange;
