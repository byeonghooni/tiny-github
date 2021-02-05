const staticPage = ({ time }) => <div>{time}</div>;

export const getStaticProps = async () => ({ props: { time: new Date().toISOString() } });

export default staticPage;
