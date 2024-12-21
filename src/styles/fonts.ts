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

  handletting1_opening_closing_22px: createFontStyle('handwriting-2019', 400, 22, 30),
  handletting1_paragraph_15px: createFontStyle('handwriting-2019', 400, 15, 40),
  handletting1_paragraph_12px: createFontStyle('handwriting-2019', 400, 15, 30),

  handletting2_opening_closing_22px: createFontStyle('handwriting-2020', 400, 22, 30),
  handletting2_paragraph_15px: createFontStyle('handwriting-2020', 400, 15, 40),
  handletting2_paragraph_12px: createFontStyle('handwriting-2020', 400, 15, 30),

  handletting3_opening_closing_22px: createFontStyle('handwriting-2021', 400, 22, 30),
  handletting3_paragraph_15px: createFontStyle('handwriting-2021', 400, 15, 40),
  handletting3_paragraph_12px: createFontStyle('handwriting-2021', 400, 15, 30),

  handletting4_opening_closing_22px: createFontStyle('handwriting-2022', 400, 22, 30),
  handletting4_paragraph_15px: createFontStyle('handwriting-2022', 400, 15, 40),
  handletting4_paragraph_12px: createFontStyle('handwriting-2022', 400, 15, 30),

  handletting5_opening_closing_22px: createFontStyle('handwriting-2023', 400, 22, 30),
  handletting5_paragraph_15px: createFontStyle('handwriting-2023', 400, 15, 40),
  handletting5_paragraph_12px: createFontStyle('handwriting-2023', 400, 15, 30),
};
