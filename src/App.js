import {Routes, Route, Navigate} from 'react-router-dom'

import ContactsPage from './pages/ContactsPage';
import AboutUsPage from './pages/AboutUsPage';
import ReviewsPage from './pages/ReviewsPage';
import OrderPage from './pages/OrderPage'
import WorksPage from './pages/WorksPage'
import MainPage from './pages/MainPage';
import Layout from './components/layout/Layout';
import './App.css';

function App() {
  return (
    <Layout>
      <Routes>
        <Route 
          path="/"  
          element={<Navigate replace to="/main"/>}
        />
        <Route 
          path="/main"  
          element={<MainPage />}
        />
        <Route 
          path="/order"  
          element={<OrderPage />}
        />
        <Route 
          path="/contacts"  
          element={<ContactsPage />}
        />
        <Route 
          path="/about-us"  
          element={<AboutUsPage />}
        />
        <Route 
          path="/reviews"  
          element={<ReviewsPage />}
        />
        <Route 
          path="/works"  
          element={<WorksPage />}
        />
      </Routes>
    </Layout>
  );
}

export default App;
