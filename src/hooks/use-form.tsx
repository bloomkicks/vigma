import { useReducer } from "react";

type FormState = {
  isSuccess: boolean;
  error?: string | null;
  isLoading: boolean;
  notValid?: boolean;
};

function formReducer(state: FormState, action: any) {
  let newState: FormState = {
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
  const [formState, dispatch] = useReducer(formReducer, {
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
    if (!isValid) {
      dispatch({ type: "NOT_VALID" });
      return;
    }
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
