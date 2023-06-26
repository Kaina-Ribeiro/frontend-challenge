import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 128px;
  width: 100%;
  min-height: 240px;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 6px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.1);
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background: ${({ theme }) => theme.colors.primary.orange100};
  border-radius: 6px 6px 0px 0px;
  padding: 16px 0;
`;

export const CryptoLogo = styled(Image)`
  width: 16px;
  height: 16px;
`;

export const CryptoName = styled.span`
  display: flex;
  align-items: center;
`;

export const CryptoFullName = styled.span`
  font-size: ${({ theme }) => theme.font_size.XXSM}px;
  color: ${({ theme }) => theme.colors.textBase};
  line-height: 14px;
`;

export const CryptoAbrvName = styled.span`
  color: ${({ theme }) => theme.colors.secondary.gray500};
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
  &:first-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondary.gray200};
    padding-bottom: 16px;
    margin-bottom: 16px;
  }
`;

export const ContentTitle = styled.span`
  color: ${({ theme }) => theme.colors.secondary.gray500};
  font-size: ${({ theme }) => theme.font_size.XXSM}px;
  line-height: 14px;
`;

export const PriceDescription = styled.span`
  color: ${({ theme }) => theme.colors.textBase};
  font-size: ${({ theme }) => theme.font_size.XSM}px;
  line-height: 16px;
`;

export const HoldingDescription = styled.span`
  color: ${({ theme }) => theme.colors.primary.orange400};
  font-size: ${({ theme }) => theme.font_size.XXSM}px;
  line-height: 14px;
`;

export const ChangeDescription = styled.span`
  color: ${({ theme }) => theme.colors.tertiary.green700};
  font-size: ${({ theme }) => theme.font_size.XSM}px;
  line-height: 16px;
`;

export const TradeButton = styled.button`
  margin-top: 16px;
  width: 96px;
  height: 24px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font_size.XSM}px;
  background: ${({ theme }) => theme.colors.primary.orange500};
  line-height: 16px;
  border-radius: 32px;
`;
