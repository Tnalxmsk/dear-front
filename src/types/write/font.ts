export enum FontType {
  TYPE_1 = 'TYPE_1',
  TYPE_2 = 'TYPE_2',
  TYPE_3 = 'TYPE_3',
  TYPE_4 = 'TYPE_4',
  TYPE_5 = 'TYPE_5',
}

export const Font_TYPE_DETAILS = {
  [FontType.TYPE_1]: {
    label: 'Type 1',
    description: '교보 손글씨 2019',
    example: '변하지 않을 단어로 전할 당신의 이야기',
  },
  [FontType.TYPE_2]: {
    label: 'Type 2',
    description: '교보 손글씨 2020',
    example: '변하지 않을 단어로 전할 당신의 이야기',
  },
  [FontType.TYPE_3]: {
    label: 'Type 3',
    description: '교보 손글씨 2021',
    example: '변하지 않을 단어로 전할 당신의 이야기',
  },
  [FontType.TYPE_4]: {
    label: 'Type 4',
    description: '교보 손글씨 2022',
    example: '변하지 않을 단어로 전할 당신의 이야기',
  },
  [FontType.TYPE_5]: {
    label: 'Type 5',
    description: '교보 손글씨 2023',
    example: '변하지 않을 단어로 전할 당신의 이야기',
  },
};

export type PaperTypeKey = keyof typeof Font_TYPE_DETAILS;
