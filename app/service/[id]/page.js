import ServiceDetailsPage from '../../../src/Pages/ServiceDetailsPage';

export default function ServiceDetails({ params }) {
  return <ServiceDetailsPage id={params.id} />;
}
