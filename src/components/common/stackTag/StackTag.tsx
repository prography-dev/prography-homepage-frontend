import './StackTag.scss';

const StackTag = ({ label, font }: { label: string; font?: string }) => {
  return <div className={`StackTag ${font}`}>{label}</div>;
};

export default StackTag;
