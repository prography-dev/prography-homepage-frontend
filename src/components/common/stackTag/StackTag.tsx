import './StackTag.scss';

const StackTag = ({ label, font }: { label: string; font?: string }) => {
  return <div className={`stack-tag ${font}`}>{label}</div>;
};

export default StackTag;
