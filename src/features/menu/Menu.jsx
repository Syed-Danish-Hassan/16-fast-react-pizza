// Import or define the getMenu function
import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant"; // Adjust the path as needed
import MenuItem from "./MenuItem";
function Menu() {
  const menu = useLoaderData();
  console.log(menu);
  //return <h1>Menu</h1>;
  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
