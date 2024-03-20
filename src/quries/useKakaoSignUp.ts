import { useMutation } from '@tanstack/react-query';
import { AuthRepository } from '../repositories';

type MutationFnProps = {
  loginId: string;
  password: string;
  realName: string;
  phone: string;
  birthDate: string;
  code: string;
};

export function useKakaoSignUp() {
  return useMutation({
    mutationFn: ({ loginId, password, realName, phone, birthDate, code }: MutationFnProps) =>
      AuthRepository.signUpByKakaoCode({ loginId, password, realName, phone, birthDate }, { code }),
  });
}
