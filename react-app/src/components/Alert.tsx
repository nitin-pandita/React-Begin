import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}
function Alert({ children, onClose }: Props) {
  return (
    <div
      className="alert alert-danger alert-dismissible fade show "
      onClick={onClose}
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
}

export default Alert;
