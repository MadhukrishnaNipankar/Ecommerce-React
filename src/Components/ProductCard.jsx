import React, { useState, useEffect } from "react";
import {
  Card,
  Spacer,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Flex,
  Center,
} from "@chakra-ui/react";
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { SmallAddIcon } from "@chakra-ui/icons";

const ProductCard = ({
  id,
  imageUrl,
  title,
  description,
  price,
  rating,
  positiveFeedbackCount,
  salesCount,
  sellerName,
  pageType,
  updateCartItemCount,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isInCart, setIsInCart] = useState(false);
  const toast = useToast();

  useEffect(() => {
    // Check if the product is in the cart when the component mounts
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setIsInCart(storedCart.includes(id));
  }, [id]);

  const handleBuyButtonClick = () => {
    // Show success toast
    toast({
      title: `Your Order for the Product "${title}" is Placed Successfully.`,
      description: "Your Product will be delivered within 5 working days",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    // Call onClose disclosure
    onClose();
  };

  const handleAddToCartButtonClick = () => {
    // Toggle the isInCart state
    setIsInCart(true);

    // Add the product to localStorage cart
    let currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    currentCart.push(id);
    localStorage.setItem("cart", JSON.stringify(currentCart));

    updateCartItemCount();
    // Show success toast
    toast({
      title: `${title} is now added to your cart.`,
      description: "You can Buy all the cart products once at a time",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
  };

  const handleRemoveFromCartButtonClick = () => {
    // Toggle the isInCart state
    setIsInCart(false);

    // Remove the product from localStorage cart
    let currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = currentCart.filter((productId) => productId !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    updateCartItemCount();
    // Show success toast
    toast({
      title: `${title} is removed from your cart.`,
      description: "",
      status: "error",
      duration: 4000,
      isClosable: true,
    });

    // Call onClose disclosure
    onClose();
  };

  return (
    <>
      <Card width="20rem" margin="1rem">
        <CardBody>
          <Center>
            <Image
              style={{ objectFit: "cover" }}
              maxHeight="11rem"
              src={imageUrl}
              alt={title}
              borderRadius="lg"
            />
          </Center>
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            <Flex>
              <Text>{sellerName}</Text>
              <i color="blue.600">&nbsp; | {salesCount} Pieces sold</i>
            </Flex>
            <Text color="blue.600" fontSize="2xl">
              ₹{price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button onClick={onOpen} variant="solid" colorScheme="teal">
              Order Now
            </Button>
            <Button
              style={{
                display: isInCart ? "none" : "block",
              }}
              variant="outline"
              onClick={handleAddToCartButtonClick}
              colorScheme="blue"
            >
              <SmallAddIcon />
              Add to cart
            </Button>
            <Button
              style={{
                display:
                  isInCart && pageType === "productList" ? "block" : "none",
              }}
              variant="outline"
              onClick={handleRemoveFromCartButtonClick}
              colorScheme="red"
            >
              - Remove from cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
      <Modal
        size="xl"
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Product Details | {title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Center>
              {" "}
              <Image
                maxHeight="11rem"
                src={imageUrl}
                alt={title}
                borderRadius="lg"
              />
            </Center>
            <i>{description}</i>
            <Spacer />
            <Spacer />
            <Text>
              Price: <b>₹{price}</b>{" "}
            </Text>
            <Text>
              Rating: <b> {rating}</b>
            </Text>
            <Text>
              Positive Feedback Count: <b>{positiveFeedbackCount}</b>{" "}
            </Text>
            <Text>
              Sales Count: <b>{salesCount}</b>
            </Text>
            <Text>
              Seller Name: <b>{sellerName}</b>
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleBuyButtonClick} colorScheme="green" mr={3}>
              Place Order
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProductCard;
