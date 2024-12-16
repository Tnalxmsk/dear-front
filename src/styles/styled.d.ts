import 'styled-components';

declare module 'styled-components' {
  import { ColorsTypes, FontsTypes } from './theme';

  export interface DefaultTheme {
    colors: ColorsTypes;
    fonts: FontsTypes;
  }
}
