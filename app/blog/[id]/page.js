import BlogDetailsPage from '../../../src/Pages/BlogDetailsPage';

export default function BlogDetails({ params }) {
  // params.id will be available for dynamic route
  // You may pass it down if BlogDetailsPage expects it
  return <BlogDetailsPage id={params.id} />;
}
