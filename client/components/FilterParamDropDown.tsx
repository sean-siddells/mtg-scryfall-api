import React from 'react';
import styled from 'styled-components';
import { FIELD_IDS } from '../constants';

type DropDownProps = {
  onChange: React.ChangeEventHandler;
}
const FilterParamDropDown: React.FC<DropDownProps> = ({ onChange }) => (
  <DropDown id={FIELD_IDS.FILTER_PARAM} onChange={onChange}>
    <option value="includes">INCLUDES</option>
    <option value="exactly">EXACTLY</option>
    <option value="excludes">EXCLUDES</option>
  </DropDown>
);

const DropDown = styled.select`
  border-radius: 5px;
  margin-right: 32px;
`;

export default FilterParamDropDown;
