import Image from 'next/image';
import Link from 'next/link';
import styled, { css, keyframes } from 'styled-components';

export const NavButtonContainer = styled(Link)`
  position: relative;
  width: 100%;
`;

export const ButtonContainer = styled.div<LabelProps>`
  width: 100%;
  display: flex;
  align-items: center;

  text-align: center;
  font-style: normal;

  padding: 16px 32px;
  gap: 16px;

  ${({ hide }) =>
    !hide &&
    css`
      justify-content: center;
    `}

  color: ${({ theme }) => theme.colors.textBase};
  font-size: ${({ theme }) => theme.font_size.XSM}px;
  line-height: 16px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary.gray100};
  }
  transition: all 0.2s;
`;

export const IconImage = styled(Image)`
  width: 32px;
  height: 32px;
`;

const FadeIn = keyframes`
  from {
    opacity: 0;
    height: 0;
    width: 0;
    overflow: hidden;
  }
  to {
    opacity: 1;
    height: auto;
    width: auto;
  }
`;

const FadeOut = keyframes`
  from {
    opacity: 1;
    height: auto;
    width: auto;
  }
  to {
    opacity: 0;
    height: 0;
    width: 0;
    overflow: hidden;
  }
`;

interface LabelProps {
  hide: boolean;
}

export const Label = styled.span<LabelProps>`
  ${({ hide }) =>
    !hide
      ? css`
          animation: ${FadeOut} 0.2s forwards;
        `
      : css`
          animation: ${FadeIn} 0.2s none;
        `};
`;
