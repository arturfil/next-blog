import { useGetUser } from '../actions/user';
import Redirect from '../components/shared/Redirect';

const withAuth = Component => role => {
  const {data, loading} = useGetUser();

  if (loading) {
    <p>Loading...</p>
  }
  if (!data) 
    return <Redirect ssr to="/api/v1/login" />;
  else {
    if (data && !data[process.env.AUTH0_NAMESPACE + '/roles'].includes(role))
      return <Redirect ssr to ="api/v1/login"/>;
    return <Component data={data} loading={loading} {...props} />;
  }
}

export default withAuth;