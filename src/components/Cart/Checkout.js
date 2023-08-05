import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";

const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const [isFormValid, setIsFormValid] = useState({
    name: true,
    city: true,
    postalCode: true,
    street: true,
  });

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;

    const enteredPostal = postalInputRef.current.value;

    const enteredCity = cityInputRef.current.value;

    const isValidName = !isEmpty(enteredName);
    const isValidStreet = !isEmpty(enteredStreet);
    const isValidPostal = isFiveChars(enteredPostal);
    const isValidCity = !isEmpty(enteredCity);

    setIsFormValid({
      name: isValidName,
      city: isValidCity,
      postalCode: isValidPostal,
      street: isValidStreet,
    });

    const formIsValid =
      isValidName && isValidStreet && isValidPostal && isValidCity;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      city: enteredCity,
      street: enteredStreet,
      postalCode: enteredPostal,
    });
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!isFormValid.name && <p>please enter a name</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!isFormValid.street && <p>please enter a street</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!isFormValid.postalCode && <p>please enter a postalCode</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!isFormValid.city && <p>please enter a city</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit" className={classes.submit}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
