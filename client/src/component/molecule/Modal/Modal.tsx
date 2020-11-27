import React, { useState } from 'react'
import A from '@atom'
import myIcon from '@constant/icon'
import Icon from '@atom/Icon'
import { ModalProps } from '.'

const Modal = ({
  overlayStyle,
  modalWrapperStyle,
  children,
  disableCloseButton,
  onClose,
}: ModalProps) => {
  const [hidden, setHidden] = useState(false)

  const handleModalClose = (): void => {
    if (onClose) onClose()
    setHidden(true)
  }

  const closeButton = (
    <A.Button
      customStyle={{
        position: 'absolute',
        padding: '5px',
        top: '3px',
        right: '3px',
        zIndex: '10',
        hoverBackgroundColor: 'grey',
        border: 'none',
      }}
      onClick={handleModalClose}
    >
      <Icon icon={myIcon.close} />
    </A.Button>
  )

  return (
    <div hidden={hidden}>
      <A.Overlay customStyle={overlayStyle} onClick={handleModalClose} />
      <A.ModalWrapper customStyle={modalWrapperStyle}>
        <>
          {disableCloseButton ? '' : closeButton}
          {children}
        </>
      </A.ModalWrapper>
    </div>
  )
}

Modal.defaultProps = {}

export default Modal