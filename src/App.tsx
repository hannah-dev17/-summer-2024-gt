import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login, LoginKakao } from './pages';
import { loginPath, loginKakaoPath } from './constants';

const loading = <div>화면을 불러오는 중 입니다.</div>;

// Pages
const Page404 = React.lazy(() => import('./pages/page404/Page404'));
const Page500 = React.lazy(() => import('./pages/page500/Page500'));

//컴포넌트
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={loading}>
        <Routes>
          <Route path={loginPath} element={<Login />} />
          <Route path={loginKakaoPath} element={<LoginKakao />} />
          <Route path='/404' element={<Page404 />} />
          <Route path='/500' element={<Page500 />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
