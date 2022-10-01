import React, { useCallback, useEffect, useState } from "react";

import { useForm } from "../../../hooks/use-form";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../../utils/validator";
import { BsShop, BsTruck } from "react-icons/bs";
import { coutries } from "../../../data";
import Button from "../../extras/Button";
import InputComponent from "../../forms/InputComponent";
import Radio from "../../forms/Radio";
import CustomDropdown from "../../forms/CustomDropdown";

import styles from "../checkout.module.css";
import { useRouter } from "next/router";

const InformationContact = () => {
  const [contact, contactInputHandler] = useForm(
    {
      email: { value: "", isValid: false },
      name: { value: "", isValid: false },
    },
    false
  );
  const [address, addressChangeHandler] = useForm(
    {
      address: { value: "", isValid: false },
    },
    false
  );

  const router = useRouter();

  const [radio, setRadio] = useState("shipping");
  const [selectedMode, setSelectedMode] = useState("shipping");
  const [selectedContry, setSelectedCountry] = useState();
  const [cities, setCities] = useState();

  const handleRadionChange = (e) => {
    setRadio(e.target.value);
    setSelectedMode(e.target.value);
  };

  const handleCountryChange = useCallback((country) => {
    setSelectedCountry(country);
  }, []);

  const optionalAddressHandler = useCallback((id, name, value) => {
    // console.log(id, name, value);
  }, []);

  useEffect(() => {
    console.log(selectedContry);
  }, [selectedContry]);

  const checkoutSubmitHandler = (e) => {
    e.preventDefault();
    const checkoutDetails = {
      ...contact.inputs,
      ...address.inputs,
    };
    const fromattedDetails = {};

    for (const key in checkoutDetails) {
      fromattedDetails[key] = checkoutDetails[key].value;
    }

    console.log(fromattedDetails);
    router.push("/checkout/payment");
  };

  return (
    <form className={styles.checkout_form} onSubmit={checkoutSubmitHandler}>
      <h3 className="pb-4">Contact Information</h3>
      <InputComponent
        name="email"
        placeholder="Email"
        errorText="Please enter a valid email"
        validators={[VALIDATOR_EMAIL()]}
        onInput={contactInputHandler}
        id="email"
      />
      <InputComponent
        name="name"
        placeholder="Name"
        errorText="Please enter a valid email"
        validators={[VALIDATOR_MINLENGTH(3), VALIDATOR_MAXLENGTH(15)]}
        onInput={contactInputHandler}
        id="name"
      />
      <h3 className="pt-8 pb-4">Delivery Options</h3>
      <div className={styles.checkout_Radio_container}>
        <Radio
          label="Ship"
          name="shipping"
          id="shipping"
          icon={<BsTruck />}
          onChange={handleRadionChange}
          checked={radio === "shipping"}
        />
        <Radio
          label="Pick Up"
          name="shipping"
          id="pickUp"
          icon={<BsShop />}
          onChange={handleRadionChange}
          checked={radio === "pickUp"}
        />
      </div>
      {selectedMode === "shipping" && (
        <>
          <h3 className="pt-8 pb-4">Shipping Information</h3>

          <CustomDropdown
            label="Select Country"
            options={coutries}
            onChange={handleCountryChange}
          />
          <div className={`flex items-stretch gap-4 ${styles.countrySelect}`}>
            <CustomDropdown
              label="Select Country"
              options={cities}
              onChange={handleCountryChange}
            />
            <div>
              <InputComponent
                errorText="Please enter a valid address"
                id="address"
                name="address"
                onInput={addressChangeHandler}
                placeholder="Your address"
                validators={[VALIDATOR_REQUIRE()]}
              />
            </div>
          </div>
          <InputComponent
            id="optionalAddress"
            name="optionalAddress"
            onInput={optionalAddressHandler}
            placeholder="House # or Appartment # (optional)"
            validators={[]}
            autoComplete={false}
          />
        </>
      )}

      {selectedMode === "pickUp" && (
        <Button
          newsletter
          className="px-4 ml-auto mt-8"
          disabled={!contact.isValid}
        >
          Continue Checkout
        </Button>
      )}

      {selectedMode === "shipping" && (
        <Button
          newsletter
          className="px-4 ml-auto mt-8"
          disabled={!contact.isValid || !address.isValid}
        >
          Continue Checkout
        </Button>
      )}
    </form>
  );
};

export default InformationContact;
