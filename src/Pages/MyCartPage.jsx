import { React, useEffect, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

import ProductCard from "../Components/ProductCard";

const MyCartPage = ({ cartTabSelected }) => {
  const [currentCart, setCurrentCart] = useState([]);

  useEffect(() => {
    if (cartTabSelected) {
      const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCurrentCart(storedCart);
    }
  }, [cartTabSelected]);

  const products = [
    {
      id: 1,
      imageUrl:
        "https://tse3.mm.bing.net/th?id=OIP.OAkWA5DC2qd4yRA7altWmwHaGS&pid=Api&P=0&h=180",
      title: "HP Victus 16-e0097nr",
      description:
        "Powerful gaming laptop with high-performance hardware, perfect for gaming enthusiasts.",
      price: 1299.99,
      rating: 4.5,
      positiveFeedbackCount: 250,
      salesCount: 500,
      sellerName: "Best Electronics Store",
    },
    {
      id: 2,
      imageUrl:
        "https://tse2.mm.bing.net/th?id=OIP.WEfhNDMnuy4w38JdCEyHWQHaFd&pid=Api&P=0&h=180",
      title: "Dell Inspiron 15 7000",
      description:
        "Sleek and stylish laptop with a powerful processor and vibrant display, suitable for both work and entertainment.",
      price: 999.99,
      rating: 4.2,
      positiveFeedbackCount: 200,
      salesCount: 400,
      sellerName: "Tech MegaStore",
    },
    {
      id: 3,
      imageUrl: "https://m.media-amazon.com/images/I/61VbKHdE0rL._SL1200_.jpg",
      title: "iQOO Z6 Lite 5G ",
      description:
        "iQOO Z6 Lite 5G (Stellar Green, 6GB RAM, 128GB Storage) with Charger | Qualcomm Snapdragon 4 Gen 1 Processor | 120Hz FHD+ Display | Travel Adaptor Included in The Box",
      price: 10999,
      rating: 4.4,
      positiveFeedbackCount: 600,
      salesCount: 4000,
      sellerName: "Ramesh MegaStore",
    },

    // Add more products here with the same structure
  ];

  return (
    <Box h="99vh" p={4}>
      <Flex color="white" flexWrap="wrap">
        {currentCart.length === 0 ? (
          <Text>No items added in the cart yet.</Text>
        ) : (
          currentCart.map((productId) => {
            const product = products.find((p) => p.id === productId);
            if (product) {
              return (
                <ProductCard
                  key={productId}
                  id={product.id}
                  imageUrl={product.imageUrl}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  rating={product.rating}
                  positiveFeedbackCount={product.positiveFeedbackCount}
                  salesCount={product.salesCount}
                  sellerName={product.sellerName}
                  pageType="mycart"
                />
              );
            } else {
              return null;
            }
          })
        )}
      </Flex>
    </Box>
  );
};

export default MyCartPage;
