import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login, LoginKakao, SignUp, Board } from './pages';
import { loginPath, loginKakaoPath, signUpPath, boardPath } from './constants';
import { PrivateRoute, PublicRoute } from './overrides';

const loading = <div>화면을 불러오는 중 입니다.</div>;

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={loading}>
        <Routes>
          <Route
            path={loginPath}
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route path={loginKakaoPath} element={<LoginKakao />} />
          <Route
            path={signUpPath}
            element={
              <PublicRoute>
                <SignUp />
              </PublicRoute>
            }
          />
          <Route
            path={boardPath}
            element={
              <PrivateRoute>
                <Board />
              </PrivateRoute>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
