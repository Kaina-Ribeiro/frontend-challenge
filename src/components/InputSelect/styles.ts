import Image from 'next/image';
import styled from 'styled-components';

export const InputSelectContainer = styled.div`
  position: relative;
  width: 100%;
  height: 48px;

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`;

export const ArrowImage = styled(Image)`
  width: 16px;
  height: 16px;
`;

export const InputSelectButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.secondary.gray300};
`;
export const InputSelectContent = styled.div`
  position: absolute;
  top: 115%;
  width: 100%;

  background: ${({ theme }) => theme.colors.white};
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.secondary.gray300};
  z-index: 1;
`;

export const ItemOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 16px 15px 16px;
  cursor: pointer;
  border-radius: 6px;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondary.gray200};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.primary.orange100};
  }
  transition: all 0.2s;
`;

export const OptionCoinWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ArrowRight = styled(Image)`
  width: 12px;
  height: 12px;
`;

export const CryptoLogo = styled(Image)`
  width: 16px;
  height: 16px;
`;

export const CryptoFullName = styled.span`
  font-size: ${({ theme }) => theme.font_size.XXSM}px;
  color: ${({ theme }) => theme.colors.textBase};
  line-height: 14px;
`;

export const CryptoAbrvName = styled.span`
  color: ${({ theme }) => theme.colors.secondary.gray500};
`;
