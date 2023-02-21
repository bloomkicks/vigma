import type { ContactFormState } from "../types/contact-form";
import { useReducer } from "react";

function contactFormReducer(state: ContactFormState, action) {
  let newState: ContactFormState = {
    isSuccess: false,
    isLoading: false,
    error: null,
    notValid: false,
  };

  switch (action.type) {
    case "SUCCESS":
      newState.isSuccess = true;
      break;
    case "SUBMIT":
      newState.isLoading = true;
      break;
    case "NOT_VALID":
      newState.notValid = true;
      break;
    case "CLEAR":
      break;
    default:
      newState.error = action.error;
  }

  return newState;
}

function useForm({
  onSubmit,
  isValid,
}: {
  onSubmit: () => void;
  isValid: boolean;
}) {
  const [formState, dispatch] = useReducer(contactFormReducer, {
    isSuccess: false,
    isLoading: false,
    error: null,
    notValid: false,
  });

  function clearState() {
    dispatch({ type: "CLEAR" });
  }
  async function submitHandler(e: any) {
    e.preventDefault();
    if (!isValid) return dispatch({ type: "NOT_VALID" });
    dispatch("SUBMIT");
    try {
      await onSubmit();
      dispatch({ type: "SUCCESS" });
    } catch (err) {
      dispatch({ type: "ERROR", error: err });
    }
  }

  return { submitHandler, clearState, ...formState };
}

export default useForm;
