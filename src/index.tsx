import React, { FC } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Main from './page/main/main';
import Layout from './components/layout/layout';
import BookDetails from './page/bookDetails/bookDetails';

const Root: FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/book/:index" element={<BookDetails />} />
        </Routes>
      </Layout>
    </Router>
  )
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
