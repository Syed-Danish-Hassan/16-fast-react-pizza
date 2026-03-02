import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';

function UpdateOrder({ order }) {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>{' '}
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ request, params }) {
  // Simulate a delay for the update operation
  //await new Promise((resolve) => setTimeout(resolve, 2000));
  // Here you would typically make an API call to update the order's priority status
  // For example: await api.updateOrderPriority(orderId);
  //console.log('Order priority updated successfully!');
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null; // Return any necessary data or null if not needed
}
