import styled from 'styled-components';

interface NavProps {
  showboard: boolean;
}

export const SideNavContainer = styled.div<NavProps>`
  width: ${({ showboard }) => (showboard ? '240px' : '0')};
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 48px;

  background: ${({ theme }) => theme.colors.white};
  border-width: 1px 0px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.secondary.gray300};
  box-shadow: 0px 4px 8px rgba(77, 77, 77, 0.1);

  .tooltip-background {
    font-size: ${({ theme }) => theme.font_size.XSM}px;
    color: ${({ theme }) => theme.colors.white};
    line-height: 16px;
    background-color: ${({ theme }) => theme.colors.primary.orange500};
  }

  @media screen and (min-width: 768px) {
    width: 86px;
  }

  @media screen and (max-width: 768px) {
    position: absolute;
    box-shadow: none;

    width: ${({ showboard }) => (showboard ? '240px' : '0')};
    height: ${({ showboard }) => (showboard ? 'calc(100%)' : '0')};
    opacity: ${({ showboard }) => (showboard ? '1' : '0')};
  }
`;
