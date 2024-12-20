export enum PaperType {
  TYPE_1 = 'TYPE_1',
  TYPE_2 = 'TYPE_2',
  TYPE_3 = 'TYPE_3',
  TYPE_4 = 'TYPE_4',
}

export const PAPER_TYPE_DETAILS = {
  [PaperType.TYPE_1]: {
    label: 'Type 1',
    src: '/src/assets/bg-paper-type-one.png',
    description: '기본 흰색 질감 종이',
  },
  [PaperType.TYPE_2]: {
    label: 'Type 2',
    src: '/src/assets/bg-paper-type-two.png',
    description: '심플하고 깨끗한 무지 종이',
  },
  [PaperType.TYPE_3]: {
    label: 'Type 3',
    src: '/src/assets/bg-paper-type-three.png',
    description: '부드러운 질감이 느껴지는 베이지 톤의 종이',
  },
  [PaperType.TYPE_4]: {
    label: 'Type 4',
    src: '/src/assets/bg-paper-type-four.png',
    description: '차분한 그리드 패턴이 돋보이는 종이',
  },
};

export type PaperTypeKey = keyof typeof PAPER_TYPE_DETAILS;
