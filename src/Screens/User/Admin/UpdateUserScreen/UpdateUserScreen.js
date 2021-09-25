import {
  FlexColumn,
  FlexRow,
  InnerSection,
  SpinnerContainer,
  Typography,
} from "../../../../Global.Styles";
import Button from "../../../../Components/Button/Button";
import { Form, Formik } from "formik";
import { updateUserProfileSchema } from "../../../../Valedation";
import {
  ErrorMsg,
  Input,
} from "../../../../Components/FormInput/FormInput.Styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileAction } from "../../../../Redux/User/userActions";
import { GrayContainer } from "../../Customer/ProfileScreen/ProfileScreen.Styles";
import { handleUserUpdate } from "../../../../Redux/Admin/actions";

function UpdateUserScreen(props) {
  const dispatch = useDispatch();
  const state = useSelector((store) => store);

  const { error, isLoading } = state.admin.updateUser;

  const handleSaveChanges = async (values) => {
    dispatch(handleUserUpdate(state.userDetails.userProfile?.user._id, values));
  };

  useEffect(() => {
    dispatch(getProfileAction(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  return state.userDetails.userProfile?.isLoading ? (
    <SpinnerContainer />
  ) : (
    <InnerSection
      style={{
        marginTop: 129,
        flexDirection: "row",
        justifyContent: "start",
      }}
    >
      <GrayContainer style={{ height: "auto" }}>
        <Typography
          style={{ marginBottom: 60, justifyContent: "start" }}
          fontWeight={700}
          fontSize={32}
        >
          USER Profile
        </Typography>

        <Formik
          initialValues={{
            email: state.userDetails.userProfile?.user?.email,
            name: state.userDetails.userProfile?.user?.name,
            isAdmin: state.userDetails.userProfile?.user?.isAdmin,
          }}
          validationSchema={updateUserProfileSchema()}
          onSubmit={handleSaveChanges}
        >
          {({ errors, touched, setValues }) => {
            return (
              <Form
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "start",
                  flexDirection: "column",
                }}
              >
                <Input name={"name"} type={"name"} placeholder={"Name"} />
                {errors.name && touched.name ? (
                  <ErrorMsg>{errors.name}</ErrorMsg>
                ) : null}

                <Input name={"email"} type={"email"} placeholder={"Email"} />
                {errors.email && touched.email ? (
                  <ErrorMsg>{errors.email}</ErrorMsg>
                ) : null}

                {errors.passwordConfirmation && touched.passwordConfirmation ? (
                  <ErrorMsg>{errors.passwordConfirmation}</ErrorMsg>
                ) : null}

                {error ? <ErrorMsg>{error}</ErrorMsg> : null}

                <Input name={"isAdmin"}>
                  {({ field: { value }, form: { setFieldValue } }) => {
                    return (
                      <FlexColumn>
                        <FlexRow style={{ justifyContent: "start" }}>
                          <label htmlFor="Admin">Admin</label>
                          <input
                            type="radio"
                            value={value}
                            name={"isAdmin"}
                            onChange={(e) => {
                              setFieldValue("isAdmin", true);
                            }}
                          />
                        </FlexRow>
                        <FlexRow style={{ justifyContent: "start" }}>
                          <label htmlFor="Customer">Customer</label>
                          <input
                            type="radio"
                            value={!value}
                            name={"isAdmin"}
                            onChange={(e) => {
                              setFieldValue("isAdmin", false);
                            }}
                          />
                        </FlexRow>
                      </FlexColumn>
                    );
                  }}
                </Input>
                {errors.isAdmin ? <ErrorMsg>{errors.isAdmin}</ErrorMsg> : null}
                <Button
                  isLoading={isLoading}
                  style={{ marginTop: 50 }}
                  text={"Update Profile"}
                  width={"220px"}
                  borderRadius={6}
                />
              </Form>
            );
          }}
        </Formik>
      </GrayContainer>
    </InnerSection>
  );
}

export default UpdateUserScreen;
