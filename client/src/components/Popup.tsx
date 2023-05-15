import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  closePopup: () => void;
}

const Popup = ({ children, closePopup }: IProps) => {
  return (
    <div className="popup-container" onClick={closePopup}>
      {children}
    </div>
  );
};

export default Popup;
