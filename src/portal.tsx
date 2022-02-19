import reactDom from "react-dom";

interface PortalProps {
  children: JSX.Element;
}

const Portal = ({ children }: PortalProps): JSX.Element => {
  const element = document.getElementById("modal");
  return element ? reactDom.createPortal(children, element) : <></>;
};

export default Portal;
