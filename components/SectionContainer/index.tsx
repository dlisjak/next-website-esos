interface Props {
  children?: any;
}

const SectionContainer: React.FC<Props> = ({ children }) => {
  return <div className="container mx-auto flex flex-col items-center">{children}</div>;
};

export default SectionContainer;
