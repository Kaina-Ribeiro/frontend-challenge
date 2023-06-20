import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  padding: 0 112px;
  background: ${({ theme }) => theme.COLORS.white};
  box-shadow: 0px 4px 8px rgba(77, 77, 77, 0.1);
`;

export const LeftContentWrapper = styled.div`
  display: flex;
  gap: 2.5rem;
`;

export const RightContentWrapper = styled.div`
  display: flex;
  gap: 5rem;
`;

export const TitlesWrapper = styled.ul`
  display: flex;
  align-items: center;

  gap: 1.5rem;
  color: ${({ theme }) => theme.COLORS.textBase};
`;
