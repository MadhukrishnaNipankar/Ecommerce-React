import { useState, useEffect } from "react";
import ProductlListPage from "./Pages/ProductlListPage";
import MyCartPage from "./Pages/MyCartPage";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Badge,
} from "@chakra-ui/react";

function App() {
  const [cartTabSelected, setCartTabSelected] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);

  const updateCartItemCount = () => {
    // Fetch the cart items count from local storage and update the state
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItemCount(storedCart.length);
  };

  useEffect(() => {
    updateCartItemCount();
  }, [cartTabSelected]); // Update the count whenever the cart tab is selected

  const handleTabSelect = (index) => {
    if (index === 1) {
      // If the "My Cart" tab is selected
      setCartTabSelected(true);
    } else {
      setCartTabSelected(false);
    }
  };

  return (
    <Tabs onChange={handleTabSelect}>
      <TabList margin={2}>
        <Tab>All Products</Tab>
        <Tab>
          My Cart
          <Badge colorScheme="green" marginLeft={2}>
            {cartItemCount}
          </Badge>
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <ProductlListPage updateCartItemCount={updateCartItemCount} />
        </TabPanel>
        <TabPanel>
          <MyCartPage cartTabSelected={cartTabSelected} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default App;
