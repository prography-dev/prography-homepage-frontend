import './CommonWrapper.scss';

const CommonWrapper = ({ children }: React.PropsWithChildren) => {
  return <div className="pg-common-wrapper">{children}</div>;
};

export default CommonWrapper;
