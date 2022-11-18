import React, { useState, useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

import { Container } from './styles';

interface Props {
  toggleTheme(title: string, font: string): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  const [font, setFont] = useState('14')

  return (
    <Container>
      Hello World

      <div style={{ display:"flex", alignItems:'center' }}>
        <select style={{ marginRight: 20 }} onChange={(e) => {
          setFont(e.target.value)
          toggleTheme(title, e.target.value)
        }}>
          <option value="14">14</option>
          <option value="18">18</option>
          <option value="22">22</option>
          <option value="26">26</option>
        </select>

        <Switch
          onChange={() => toggleTheme(title === 'dark' ? 'light' : 'dark', font)}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={shade(0.15, colors.primary)}
          onColor={colors.secundary}
        />
      </div>
    </Container>
  );
};

export default Header;
