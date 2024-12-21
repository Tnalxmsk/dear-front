import { axiosInstance } from './axios-instance';

export const loginWithNaver = async (naverUser: { id: string; email?: string; name?: string; profileImage?: string }) => {
  try {
    const response = await axiosInstance.post('/dearnote/member/login', {
      id: naverUser.id,
      email: naverUser.email,
      name: naverUser.name,
      profileImage: naverUser.profileImage,
    });

    return response.data;
  } catch (error) {
    console.error('�α��� ��û �� ���� �߻�:', error);
    throw error;
  }
};
