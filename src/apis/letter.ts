import { axiosInstance } from './axios-instance.ts';
import { BaseResponse } from '../types/write/base.ts';
import { WaxList } from '../types/write/waxResponse.ts';

export const getWax = async (): Promise<BaseResponse<WaxList> | undefined> => {
  try {
    const response = await axiosInstance.get('/dearnote/wax');
    console.log(response.data)
    return response.data;
  } catch ( error ) {
    console.error(error);
    return undefined;
  }
}
