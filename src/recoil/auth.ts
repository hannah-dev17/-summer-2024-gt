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

const signUpState = atom({
  key: 'signUpState',
  default: {
    loginId: '',
    password: '',
    realName: '',
    phone: '',
    birthDate: '',
  },
});

export const birthDateState = selector({
  key: 'birthDateState',
  get: ({ get }) => get(signUpState).birthDate,
  set: ({ get, set }, birthDate) => set(signUpState, { ...get(signUpState), birthDate }),
});

export const yearState = selector({
  key: 'yearState',
  get: ({ get }) => {
    const birthDate = get(signUpState).birthDate;

    if (birthDate.length > 0) {
      return birthDate.split('-')[0];
    }

    return '';
  },
});

export const monthState = selector({
  key: 'monthState',
  get: ({ get }) => {
    const birthDate = get(signUpState).birthDate;

    if (birthDate.length > 0) {
      return birthDate.split('-')[1];
    }

    return '';
  },
});

export const dayState = selector({
  key: 'dayState',
  get: ({ get }) => {
    const birthDate = get(signUpState).birthDate;

    if (birthDate.length > 0) {
      return birthDate.split('-')[2];
    }

    return '';
  },
});

const termsState = atom({
  key: 'termsState',
  default: {
    isAllAgreed: false,
    isTermAgreed: false,
    isDataPolicyAgreed: false,
    isLocationAgreed: false,
  },
});

export const isAllAgreedState = selector({
  key: 'isAllAgreedState',
  get: ({ get }) => get(termsState).isAllAgreed,
  set: ({ get, set }, isAllAgreed) => set(termsState, { ...get(termsState), isAllAgreed }),
});

export const isTermAgreedState = selector({
  key: 'isTermAgreedState',
  get: ({ get }) => get(termsState).isTermAgreed,
  set: ({ get, set }, isTermAgreed) => set(termsState, { ...get(termsState), isTermAgreed }),
});

export const isDataPolicyAgreedState = selector({
  key: 'isDataPolicyAgreedState',
  get: ({ get }) => get(termsState).isDataPolicyAgreed,
  set: ({ get, set }, isDataPolicyAgreed) => set(termsState, { ...get(termsState), isDataPolicyAgreed }),
});

export const isLocationAgreedState = selector({
  key: 'isLocationAgreedState',
  get: ({ get }) => get(termsState).isLocationAgreed,
  set: ({ get, set }, isLocationAgreed) => set(termsState, { ...get(termsState), isLocationAgreed }),
});
