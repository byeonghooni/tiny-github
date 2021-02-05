import fetch from 'isomorphic-unfetch';

import Profile from '../../components/Profile';

const name = ({ user }) => {
  if (!user) {
    return null;
  }

  return (
    <Profile user={user} />
  );
};

export const getServerSideProps = async ({ query }) => {
  const { name } = query;
  try {
    let user;
    let repos;

    const [userRes, repoRes] = await Promise.all([
      fetch(`https://api.github.com/users/${name}`),
      fetch(
        `https://api.github.com/users/${name}/repos?sort=updated&page=1&per_page=10`,
      ),
    ]);

    if (userRes.status === 200) {
      user = await userRes.json();
    }
    if (repoRes.status === 200) {
      repos = await repoRes.json();
    }

    return { props: { user, repos } };
  } catch (e) {
    console.error(e);
    return { props: { } };
  }
};

export default name;
