import React, { ReactNode, useEffect } from 'react';

import ReactPortal from '../ReactPortal/ReactPortal';
import { ButtonClose, Modal, ModalContent } from './styles';
import close from '../../assets/close.svg';
import Image from 'next/image';

interface ConfirmationModalProps {
  children: ReactNode;
  isOpen: boolean;
  handleClose: () => void;
  modalwidth: number;
  modalheight: number;
}

const ConfirmationModal = ({
  children,
  isOpen,
  handleClose,
  modalwidth,
  modalheight,
}: ConfirmationModalProps) => {
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) => (e.key === 'Escape' ? handleClose() : null);
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [handleClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return (): void => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <Modal>
        <ModalContent modalwidth={modalwidth} modalheight={modalheight}>
          <ButtonClose onClick={handleClose}>
            <Image src={close} alt="close_button" width={16} height={16} />
          </ButtonClose>
          {children}
        </ModalContent>
      </Modal>
    </ReactPortal>
  );
};

export default ConfirmationModal;
