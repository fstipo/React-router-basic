import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  Link,
  Outlet,
  useParams,
} from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1 className="p-5">Home Route</h1>
    </div>
  );
};

const Learn = () => {
  return (
    <div>
      <h1 className="p-5">Learn</h1>
      <h4 className="p-3">All courses are listed here</h4>
      <Link to="/learn/courses" className="btn btn-success mx-4">
        courses
      </Link>
      <Link to="/learn/bundles" className="btn btn-warning">
        bundle
      </Link>
      <Outlet />
    </div>
  );
};

const Courses = () => {
  return (
    <div>
      <p className="p-3">Courses List</p>
      <p className="px-3">Courses Card</p>
      <Outlet />
    </div>
  );
};

const Bundles = () => {
  return (
    <div>
      <p className="p-3">Bundles List</p>
      <p className="px-3">Bundles Card</p>
    </div>
  );
};

const CourseID = () => {
  const { courseID } = useParams();
  return (
    <div>
      <p className="p-3">Course ID: {courseID} </p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myapps" element={<Navigate to="/learn" />} />
        <Route path="/learn" element={<Learn />}>
          <Route path="courses" element={<Courses />}>
            <Route path=":courseID" element={<CourseID />} />
          </Route>
          <Route path="bundles" element={<Bundles />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
