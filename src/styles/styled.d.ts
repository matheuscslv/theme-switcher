import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    font: {
      family: string;
      size: string;
    }

    colors: {
      primary: string;
      secundary: string;

      background: string;
      text: string;
    }
  }
}