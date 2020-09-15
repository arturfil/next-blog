import React from 'react';
import BaseLayout from '../../../components/layouts/BaseLayout';
import BasePage from '../../../components/BasePage';
import { Editor } from 'slate-simple-editor';
import withAuth from '../../../hoc/withAuth';

const BlogEditor = ({user, loading}) => {

  const saveBlog = (data) => {
    console.log(data);
  }

  return (
    <>
      <BaseLayout user={user} loading={loading}>
        <BasePage >
          <Editor header="Start writing a new blog" onSave={saveBlog}/>
        </BasePage>
      </BaseLayout>
    </>
  )
}

export default withAuth(BlogEditor)('admin');