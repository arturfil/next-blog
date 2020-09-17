import React, {useEffect, useState} from 'react';
import BaseLayout from '../../components/layouts/BaseLayout';
import BasePage from '../../components/BasePage';
import { useGetUser } from '../../actions/user';

const SignUp = () => {
  const {data, loading} = useGetUser();

  return (
    <>
      <BaseLayout>
        <BasePage>
          <h1>Sign Up Page</h1>
        </BasePage>
      </BaseLayout>
    </>
  )
}

export default SignUp;