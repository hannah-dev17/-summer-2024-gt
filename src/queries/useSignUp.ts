import { useMutation } from '@tanstack/react-query';
import { AuthRepository } from '../repositories';

type MutationFnProps = {
  loginId: string;
  password: string;
  realName: string;
  phone: string;
  birthDate: string;
};

export function useSignUp() {
  return useMutation({
    mutationFn: ({ loginId, password, realName, phone, birthDate }: MutationFnProps) =>
      AuthRepository.signUp({ loginId, password, realName, phone, birthDate }),
  });
}
