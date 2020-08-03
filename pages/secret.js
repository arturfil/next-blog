import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import { useGetUser } from '../actions/user';
import Redirect from '../components/shared/Redirect';

const Secret = () => {
  const {data, loading} = useGetUser();

  if (loading) {
    <p>Loading...</p>
  }

  if (!data) {
    return <Redirect to="/api/v1/login" />
  } else {
    return (
      <BaseLayout user={data} loading={loading}>
        <BasePage>
          <h1>I am the SECRET Page</h1>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default Secret;