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

        <div style={{ display: "flex", marginLeft: 20 }}>
          <button
            onClick={() => {
              if ((Number(font) - 4) >= 0) {
                setFont(String(Number(font) - 4));
                // @ts-ignore
                toggleTheme(title, String(Number(font) - 4));
              }
            }}
            style={{
              display: "flex", cursor: 'pointer', outline: 'none', border: 'none', marginRight: 10, alignItems: "center", justifyContent: "center", width: 30, height: 30,
            }}
          >
            <span style={{ marginBottom: 3 }}>A-</span>
          </button>
          <button
            onClick={() => {
              setFont(String(Number(font) + 4));
              // @ts-ignore
              toggleTheme(title, String(Number(font) + 4));
            }}
            style={{
              display: "flex", cursor: 'pointer', outline: 'none', border: 'none', alignItems: "center", justifyContent: "center", width: 30, height: 30,
            }}
          >
            <span style={{ marginBottom: 3 }}>A+</span>
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Header;
