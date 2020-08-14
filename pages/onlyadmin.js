 import BaseLayout from '../components/layouts/BaseLayout';
 import BasePage from '../components/BasePage';
 import withAuth from '../hoc/withAuth';

 const OnlyAdmin = ({data, loading}) => {
   return (
     <BaseLayout user={data} loading={loading}>
       <BasePage>
        <h1>Admin Only page {data.name} </h1>
       </BasePage>
     </BaseLayout>
   )
 }

 export default withAuth(OnlyAdmin)('admin');