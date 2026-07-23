import { useEffect, useRef } from 'react';
import styles from "./Mdl.style.css"

export default function Mdl({ isOpen, onClose, children }) {
  const dialogRef = useRef(null);

  // Следим за состоянием isOpen и управляем нативным диалогом
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) dialog.showModal();
    } else {
      if (dialog.open) dialog.close();
    }
  }, [isOpen]);

  // Обработка закрытия (например, когда пользователь нажал ESC)
  const handleCancel = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      onCancel={handleCancel}
      className={styles.modal}
    >
      <div className={styles.modalContainer}>
        {/* Кнопка закрытия (крестик) */}
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
          &times;
        </button>
        
        {/* Контент, который мы передадим внутрь */}
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </dialog>
  );
}