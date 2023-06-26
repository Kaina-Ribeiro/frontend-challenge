import Image from 'next/image';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  max-width: 272px;
  width: 100%;
  cursor: pointer;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
`;

export const Title = styled.span`
  font-size: ${({ theme }) => theme.font_size.XXSM}px;
  color: ${({ theme }) => theme.colors.secondary.gray500};
  line-height: 14px;
`;

export const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:nth-child(odd) {
    background: rgba(246, 246, 246, 0.5);
  }
`;

export const CryptoLogoName = styled.p`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const DropdownBtn = styled.p`
  width: 100%;
  padding: 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

type DropdownProps = {
  active?: boolean;
};

export const ArrowImage = styled(Image)<DropdownProps>`
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  ${({ active }) =>
    active
      ? css`
          transform: rotate(0);
        `
      : css`
          transform: rotate(180deg);
        `}

  transition: transform 0.2s;
`;

export const DropdownItem = styled.div<DropdownProps>`
  ${({ theme, active }) =>
    active
      ? css`
          height: 80px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 16px;
          border-top: 1px solid ${theme.colors.secondary.gray200};
        `
      : css`
          height: 0;
          width: 0;
          opacity: 0;
          overflow: hidden;
        `}
  transition: height ease 0.2s;
`;

export const CryptoInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const TextCrypto = styled.span`
  font-size: ${({ theme }) => theme.font_size.XXSM}px;
  color: ${({ theme }) => theme.colors.secondary.gray500};
  line-height: 14px;
`;

export const TextValue = styled.span`
  font-size: ${({ theme }) => theme.font_size.XSM}px;
  color: ${({ theme }) => theme.colors.textBase};
  line-height: 16px;
`;

export const TextChange = styled.span`
  font-size: ${({ theme }) => theme.font_size.XSM}px;
  color: ${({ theme }) => theme.colors.tertiary.green700};
  line-height: 16px;
`;
