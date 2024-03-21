import { useMutation } from '@tanstack/react-query';
import { AuthRepository } from '../repositories';

type MutationFnProps = {
  loginId: string;
  password: string;
  realName: string;
  phone: string;
  birthDate: string;
  accessToken: string;
};

export function useKakaoSignUp() {
  return useMutation({
    mutationFn: ({ loginId, password, realName, phone, birthDate, accessToken }: MutationFnProps) =>
      AuthRepository.signUpKakaoByToken({ loginId, password, realName, phone, birthDate, accessToken }),
  });
}
