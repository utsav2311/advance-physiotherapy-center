import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

export default function NotFound() {
  return (
    <div className="container section text-center">
      <Seo
        title="Page Not Found"
        description="The page you're looking for doesn't exist or has moved."
        path="/404"
        noindex
      />
      <h1 className="section-title">Page Not Found</h1>
      <p className="section-subtitle" style={{ margin: '0 auto 2rem' }}>
        The page you're looking for doesn't exist or has moved.
      </p>
      <Link to="/" className="btn btn-primary">Back to Home</Link>
    </div>
  );
}
