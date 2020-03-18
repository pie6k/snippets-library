import React from 'react';
import styled from 'styled-components/native';

interface Props {
  foo: string;
}

export function Component({ foo }: Props) {
  return <Holder>{null}</Holder>;
}

const Holder = styled.View``;
