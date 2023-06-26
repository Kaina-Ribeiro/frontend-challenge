import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 8px rgba(77, 77, 77, 0.1);
`;

export const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 14px 48px;
  height: 60px;
  background: ${({ theme }) => theme.colors.white};

  transition: all 0.2s;
`;

export const HeaderFooter = styled.div`
  display: flex;
  justify-content: center;
  height: 23px;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.secondary.gray200};
`;

export const LeftContentWrapper = styled.div`
  display: flex;
  gap: 40px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    gap: 8px;
  }

  transition: all 0.2s;
`;

export const TitlesWrapper = styled.ul`
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.textBase};
  gap: 24px;

  span {
    font-size: ${({ theme }) => theme.font_size.XSM}px;
    line-height: 16px;
  }
`;

export const RightContentWrapper = styled.div`
  display: flex;
  gap: 80px;

  transition: all 0.2s;
`;

export const HeaderButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const ButtonWrapper = styled.div`
  max-width: 100px;
  height: 32px;
`;

export const LoggedHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 14px 40px;
`;

export const ButtonMenu = styled.button`
  background: none;
  cursor: pointer;
`;
