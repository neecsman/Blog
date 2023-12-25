import { useCallback, useEffect, useState } from "react";

interface UseDisclosureResult {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
  closeOnEsc: (event: KeyboardEvent) => void;
}

const useDisclosure = (): UseDisclosureResult => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);
  const onToggle = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  const closeOnEsc = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    },
    [onClose, isOpen]
  );

  useEffect(() => {
    document.addEventListener("keydown", closeOnEsc);

    return () => {
      document.removeEventListener("keydown", closeOnEsc);
    };
  }, [closeOnEsc]);

  return { isOpen, onOpen, onClose, onToggle, closeOnEsc };
};

export default useDisclosure;
