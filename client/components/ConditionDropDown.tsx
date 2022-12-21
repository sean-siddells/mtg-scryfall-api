import React from 'react';
import styled from 'styled-components';
import { Condition } from '../types';

type DropDownProps = {
  onChange: React.ChangeEventHandler;
  value: Condition;
}
const ConditionDropDown: React.FC<DropDownProps> = ({ onChange }) => (
  <DropDown id="colour-condition" onChange={onChange}>
    <option value="includes">INCLUDES</option>
    <option value="exactly">EXACTLY</option>
    <option value="excludes">EXCLUDES</option>
  </DropDown>
);

const DropDown = styled.select`
  border-radius: 5px;
  margin-right: 32px;
`;

export default ConditionDropDown;
