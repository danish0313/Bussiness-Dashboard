import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from './Dashboard';

const DarkSwitchContainer = styled.div`
  position: absolute;
  right: 0px;
  top: 20px;
`;

const Input = styled.input``;
const Label = styled.label`
  cursor: pointer;
  color: ${({ dark }) => (dark ? 'grey' : 'black')};
`;

export function DarkSwitch() {
  const [theme, setTheme] = useContext(ThemeContext);
  const dark = theme === 'dark';
  return (
    <DarkSwitchContainer>
      <Label dark={dark}>
        <Input
          type="checkbox"
          onChange={e => {
            setTheme(e.target.checked ? 'dark' : 'light');
          }}
          checked={dark}
        />
        Dark Mode
      </Label>
    </DarkSwitchContainer>
  );
}
