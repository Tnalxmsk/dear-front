import { FontsTypes } from '../types/theme';

const createFontStyle = (family: string, weight: number, size: number, lineHeight: number) => `
  font-family: "${family}";
  font-weight: ${weight};
  font-size: ${size}px;
  line-height: ${lineHeight}px;
  letter-spacing: 0%;
`;


export const fonts: FontsTypes = {
  heading_regular_40px: createFontStyle('RIDIBatang', 400, 40, 54),
  heading_regular_32px: createFontStyle('RIDIBatang', 400, 32, 43),
  heading_regular_22px: createFontStyle('RIDIBatang', 400, 22, 31),
  paragraph_regular_14px: createFontStyle('RIDIBatang', 400, 14, 20),
  small_text_regular_12px: createFontStyle('RIDIBatang', 400, 12, 14),
};
