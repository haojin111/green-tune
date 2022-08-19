import React, { useEffect, useState } from 'react';
import { Checkbox, Text } from '@blueprintjs/core';
import styled from 'styled-components';

const CategoryItem = styled.div`
  display: flex;
  cursor: pointer;
  .bp4-control-indicator {
    background: #D9D9D9;
  }
  .checkbox-label {
    margin-left: 28px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16.5696px;
    color: #000000;
  }
`;

const useUpdate = (intitialValue?: boolean) => {
  const [checked, setChecked] = useState<boolean>(!!intitialValue);

  useEffect(() => {
    const isChecked = !!intitialValue;
    if (isChecked !== checked) {
      setChecked(isChecked);
    }
  }, [intitialValue]);

  return [checked, setChecked] as const;
};

export default function (props: {
  isChecked: boolean;
  label: string;
  onCheckChange?: (key: string, isChecked: boolean) => void;
}) {
  const [checked, setChecked] = useUpdate(props.isChecked);
  const onChangeHandler = () => {
    setChecked(!checked);
    props.onCheckChange && props.onCheckChange(props.label, checked);
  };
  return (
    <CategoryItem onClick={onChangeHandler}>
      <Checkbox checked={checked} large/>
      <Text className='checkbox-label'>{props.label}</Text>
    </CategoryItem>
  );
}
