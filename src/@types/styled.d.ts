import 'styled-components';

import { light as lightTheme } from '../styles/theme';

export type Theme = typeof lightTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
