import styled, { css } from 'styled-components';

type ModalProps = {
  modalwidth: number;
  modalheight: number;
};

export const Modal = styled.div`
  position: fixed;

  width: 100%;
  height: 100%;
  inset: 0; /* inset sets all 4 values (top right bottom left) much like how we set padding, margin etc., */
  background-color: rgba(93, 102, 112, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 999;
  padding: 40px 20px 20px;
  opacity: 1;
`;

export const ModalContent = styled.div<ModalProps>`
  position: relative;
  ${({ modalwidth, modalheight }) => css`
    width: ${modalwidth}px;
    min-height: ${modalheight}px;
  `}

  display: flex;

  padding: 16px;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 12px 24px 0px rgba(0, 0, 0, 0.1);
`;

export const ButtonClose = styled.button`
  position: absolute;
  margin: 16px;
  top: 0;
  right: 0;
  background: none;
  cursor: pointer;
`;
