import { Outlet } from 'react-router-dom';

import Layout from '../layout/Layout/Layout';
import useScrollToTop from '../hooks/useScrollToTop';

export default function Root() {
  useScrollToTop();

  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
}
