import { atom, selector } from 'recoil';

export const authState = atom<{ id: number; jwt: string }>({
  key: 'authState',
  default: {
    id: 0,
    jwt: '',
  },
});

export const isAuthenticatedState = selector({
  key: 'isAuthenticatedState',
  get: ({ get }) => {
    const jwt = get(authState).jwt;

    return jwt.length > 0;
  },
});
