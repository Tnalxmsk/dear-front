import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type AuthStore = {
  isLoggedIn: boolean;
  login: () => void;

  accessToken: string | null;
  refreshToken: string | null;
  naverEmail: string | null;
  memberId: string | null;

  setAccessToken: (accessToken: string) => void;
  setRefreshToken: (refreshToken: string) => void;
  setNaverEmail: (naverEmail: string) => void;
  setMemberId: (memberId: string) => void;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      login: () => set({ isLoggedIn: true }),
      accessToken: '',
      refreshToken: '',
      naverEmail: '',
      memberId: '',
      setAccessToken: (accessToken) => set({ accessToken }),
      setRefreshToken: (refreshToken) => set({ refreshToken }),
      setNaverEmail: (naverEmail) => set({ naverEmail }),
      setMemberId: (memberId) => set({ memberId }),
    }),
    {
      name: 'user-storage',
    },
  ),
);
