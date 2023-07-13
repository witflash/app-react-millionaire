import { Color } from 'common/types';

interface GetButtonColorArg {
  isSelected: boolean;
  isSuccess: boolean;
  isError: boolean;
}

export const getButtonColor = ({
  isSelected,
  isSuccess,
  isError,
}: GetButtonColorArg): Color => {
  if (isError) {
    return Color.error;
  }

  if (isSuccess) {
    return Color.success;
  }

  if (isSelected) {
    return Color.accent;
  }

  return Color.default;
};
