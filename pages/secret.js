import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../hoc/withAuth';

const Secret = ({data, loading}) => {
  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage>
        <h1>I am the SECRET Page - Hello {data.name}</h1>
      </BasePage>
    </BaseLayout>
  )
}

export default withAuth(Secret);