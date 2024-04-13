import React, { useState } from "react";
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
import { SmallAddIcon, MinusIcon } from "@chakra-ui/icons";
const ProductCard = ({
  imageUrl,
  title,
  description,
  price,
  rating,
  positiveFeedbackCount,
  salesCount,
  sellerName,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isInCart, setIsInCart] = useState(false);

  const toast = useToast();
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
    setIsInCart(!isInCart);
    // Show success toast
    toast({
      title: `${title} is now added to your cart.`,
      description: "You can Buy all the cart products once at a time",
      status: "success",
      duration: 4000,
      isClosable: true,
    });

    // Call onClose disclosure
    onClose();
  };

  const handleRemoveFromCartButtonClick = () => {
    setIsInCart(!isInCart);
    // Show success toast
    toast({
      title: `${title} is removed from your cart.`,
      description: "",
      status: "error",
      duration: 4000,
      isClosable: true,
    });
  };
  return (
    <>
      <Card width="20rem" margin="1rem">
        <CardBody>
          <Image src={imageUrl} alt={title} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            <Text>{description}</Text>
            <Text color="blue.600" fontSize="2xl">
              ${price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button onClick={onOpen} variant="solid" colorScheme="teal">
              Buy now
            </Button>
            <Button
              style={{ display: isInCart ? "none" : "block" }}
              variant="outline"
              onClick={handleAddToCartButtonClick}
              colorScheme="blue"
            >
              <SmallAddIcon />
              Add to cart
            </Button>
            <Button
              style={{ display: isInCart ? "block" : "none" }}
              variant="outline"
              onClick={handleRemoveFromCartButtonClick}
              colorScheme="red"
            >
              - Remove from cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Order | {title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <i>{description}</i>
            <Spacer />
            <Text>
              Price: <b>${price}</b>{" "}
            </Text>
            <Text>
              Rating: <b>{rating}</b>
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
              Buy
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProductCard;
