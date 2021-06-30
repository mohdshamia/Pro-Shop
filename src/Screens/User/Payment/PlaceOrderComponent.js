import {
  ChangeBtn,
  Order,
  OrderDetail,
  OrderDetails,
  PaymentDetail,
  Shipping,
  ShippingAddress,
} from "./Payment.Styles";
import { FlexRow, Typography } from "../../../Global.Styles";
import OrderCard from "../../../Components/OrderCard/OrderCard";
import Button from "../../../Components/Button/Button";
import { useSelector } from "react-redux";

function PlaceOrderComponent(props) {
  const state = useSelector((state) => state);

  return (
    <FlexRow
      style={{
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginTop: "60px",
      }}
    >
      {/* Shipping and payment content */}
      {/* Left Side */}
      <Shipping>
        <ShippingAddress>
          <FlexRow style={{ justifyContent: "space-between" }}>
            <Typography
              style={{ justifyContent: "start" }}
              fontSize="24"
              fontWeight="bold"
              color="#242424"
            >
              Shipping Address
            </Typography>
          </FlexRow>
          <Typography
            style={{ justifyContent: "start" }}
            fontSize={"22"}
            color={"#242424"}
          >
            {state.userDetails.user.name}
          </Typography>
          <Typography
            fontSize={"16"}
            color={"#242424"}
            fontWeigh={"light"}
            style={{
              maxWidth: "290px",
              lineHeight: "2",
              justifyContent: "start",
            }}
          >
            {state.cart.shippingAddress.country}-
            {state.cart.shippingAddress.city}
          </Typography>
        </ShippingAddress>
        <OrderDetail>
          <FlexRow
            style={{ justifyContent: "space-between", marginBottom: "16px" }}
          >
            <Typography
              style={{ justifyContent: "start" }}
              fontSize="24"
              fontWeight="bold"
              color="#242424"
            >
              Order Details
            </Typography>
          </FlexRow>
          {/* Order Items */}
          {state.cart.cart.map((i) => (
            <OrderCard
              src={"https://proshop-ms.herokuapp.com/" + i.image}
              orderName={i.name}
              orderNumber={"1"}
              subTotal={i.price * i.quantity}
              price={i.price}
            />
          ))}
        </OrderDetail>
      </Shipping>

      {/* Right Side */}
      <Order>
        <OrderDetails>
          <Typography
            fontSize={"32"}
            color={"#242424"}
            fontWeight={"bold"}
            style={{ marginBottom: "30px", justifyContent: "start" }}
          >
            Order Details
          </Typography>
          <FlexRow style={{ justifyContent: "space-between" }}>
            <Typography style={{ justifyContent: "start" }} color={"#707070"}>
              Subtotal
            </Typography>
            <Typography style={{ justifyContent: "start" }} color={"#707070"}>
              $589.98
            </Typography>
          </FlexRow>
          <FlexRow style={{ justifyContent: "space-between" }}>
            <Typography style={{ justifyContent: "start" }} color={"#707070"}>
              Tax
            </Typography>
            <Typography style={{ justifyContent: "start" }} color={"#707070"}>
              $2.53
            </Typography>
          </FlexRow>
          <FlexRow style={{ justifyContent: "space-between" }}>
            <Typography style={{ justifyContent: "start" }} color={"#707070"}>
              Shipping
            </Typography>
            <Typography style={{ justifyContent: "start" }} color={"#707070"}>
              $0.00
            </Typography>
          </FlexRow>
          <FlexRow style={{ justifyContent: "space-between" }}>
            <Typography
              style={{ justifyContent: "start" }}
              color={"#242424"}
              fontWeight={"bold"}
            >
              Shipping
            </Typography>
            <Typography
              style={{ justifyContent: "start" }}
              color={"#242424"}
              fontWeight={"bold"}
            >
              $592.51
            </Typography>
          </FlexRow>
        </OrderDetails>
        <Button
          text={"Place Order"}
          width={"324px"}
          style={{ height: "62px", alignSelf: "flex-end", marginTop: "30px" }}
        />
      </Order>
      {/* Place an order content */}
    </FlexRow>
  );
}

export default PlaceOrderComponent;
