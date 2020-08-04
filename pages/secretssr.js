import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import auth0 from '../utils/auth0';

const SecretSSR = ({user}) => {
  return (
    <BaseLayout user={user} loading={false}>
      <BasePage>
        <h1>I am secret page with SSR (Server Side Rendering)</h1>
        <h2>Welcome {user && user.name}</h2>
      </BasePage>
    </BaseLayout>
  )
}

export const getServerSideProps = async ({req, res}) => {
  const session = await auth0.getSession(req);
  if (!session || !session.user) {
    res.writeHead(302, {
      Location: '/api/v1/login'
    });
    res.end();
    return {props: {}};
  }

  return {
    props: { user: session.user}
  }
}

export default SecretSSR;