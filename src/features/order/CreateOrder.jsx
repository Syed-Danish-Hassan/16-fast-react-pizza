//import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const formErrors = useActionData();
  console.log(formErrors);

  //const navigate = useNavigate();
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  return (
    <div>
      <h2>Ready to order? Let's go!</h2>

      {/* <Form method="POST" action="/order/new"> */}
      <Form method="POST">
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required className="input" />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required className="input" />
          </div>
          {formErrors?.phone && <p className="error">{formErrors.phone}</p>}
        </div>

        <div>
          <label>Address</label>
          <div>
            <input
              type="text"
              name="address"
              required
              //className="w-full rounded-full border border-stone-200 px-4 py-2 transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400 md:px-6 md:py-3"
              className="input"
            />
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-6 w-6 border border-stone-200 px-4 py-2 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>
        <input type="hidden" name="cart" value={JSON.stringify(cart)} />
        <div>
          <button
            disabled={isSubmitting}
            className="upercase inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold tracking-wide text-stone-800 outline-none transition-colors duration-300 ease-in-out hover:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 active:bg-slate-400"
          >
            {isSubmitting ? 'Placing order...' : 'Order now'}
          </button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();

  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'on' ? true : false,
  };

  const errors = {};
  if (!isValidPhone(data.phone)) {
    errors.phone = 'Phone number is not valid.We might need it to contact you';
  }
  if (Object.keys(errors).length > 0) {
    return errors;
  }
  console.log(order);
  // ///if everything is okay  then create order and redirect
  // const newOrder = await createOrder(order);

  // // Validate the data
  // // if (!data.customer || data.customer.length < 2) {
  // //   return { error: "Customer name is too short" };
  // // }
  // // if (!isValidPhone(data.phone)) {
  // //   return { error: "Phone number is not valid" };
  // // }

  // return redirect(`/order/${newOrder.id}`);

  return null;
}

export default CreateOrder;
