import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Breadcrumb = () => {
  const location = useLocation();
  const paths = location.pathname.split('/').filter(Boolean);

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600">
      <Link to="/" className="hover:text-blue-600">
        Home
      </Link>
      {paths.map((path, index) => (
        <React.Fragment key={path}>
          <ChevronRight size={16} />
          <Link
            to={`/${paths.slice(0, index + 1).join('/')}`}
            className="hover:text-blue-600 capitalize"
          >
            {path}
          </Link>
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;