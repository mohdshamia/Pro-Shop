import { FlexRow, InnerSection, Typography } from "../../../Global.Styles";
import {
  ErrorMessage,
  OrderDetail,
  OrderDetails,
  Shipping,
  ShippingAddress,
} from "../Payment/Payment.Styles";
import OrderCard from "../../../Components/OrderCard/OrderCard";
import { useSelector } from "react-redux";

function Order(props) {
  const state = useSelector((state) => state);

  return (
    <InnerSection style={{ margin: "44px 0 60px", alignItems: "flex-start" }}>
      <Typography
        style={{ justifyContent: "start" }}
        fontSize="32"
        color="#242424"
        fontWeight="700"
      >
        Review Order
      </Typography>
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
            {state.cart?.cart?.map((i) => (
              <OrderCard
                key={i._id}
                src={"https://proshop-ms.herokuapp.com/" + i.image}
                orderName={i.name}
                orderNumber={i.quantity}
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
                $
                {state.cart.cart
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </Typography>
            </FlexRow>
            <FlexRow style={{ justifyContent: "space-between" }}>
              <Typography style={{ justifyContent: "start" }} color={"#707070"}>
                Tax
              </Typography>
              <Typography style={{ justifyContent: "start" }} color={"#707070"}>
                $0
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
                $
                {state.cart?.cart
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </Typography>
            </FlexRow>
          </OrderDetails>

          {state.orders.placeOrder.error && (
            <ErrorMessage>{state.orders.placeOrder.error}</ErrorMessage>
          )}
        </Order>
        {/* Place an order content */}
      </FlexRow>
    </InnerSection>
  );
}

export default Order;
