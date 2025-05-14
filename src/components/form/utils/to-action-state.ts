import { ZodError } from "zod";

export type ActionState = {
  status?: "SUCCESS" | "ERROR";
  message: string;
  payload?: FormData;
  fieldErrors: Record<string, string[] | undefined>;
  timestamp: number;
};

export const EMPTY_ACTION_STATE: ActionState = {
  message: "",
  fieldErrors: {},
  timestamp: Date.now(),
};

export const fromErrorToActionState = (
  error: unknown,
  formData?: FormData,
): ActionState => {
  if (error instanceof ZodError) {
    //if validation error with zod, return first error message
    return {
      status: "ERROR",
      message: "",
      fieldErrors: error.flatten().fieldErrors,
      payload: formData,
      timestamp: Date.now(),
    };
  } else if (error instanceof Error) {
    return {
      //if another error instance, return error message
      //e.g database error
      status: "ERROR",
      message: "Internal server error",
      fieldErrors: {},
      payload: formData,
      timestamp: Date.now(),
    };
  } else {
    return {
      //if not an error instance but something else crashed
      //e.g generic error message
      status: "ERROR",
      message: "An unknown error occured",
      fieldErrors: {},
      payload: formData,
      timestamp: Date.now(),
    };
  }
};

export const toActionState = (
  status: ActionState["status"],
  message: string,
): ActionState => {
  return {
    status,
    message,
    fieldErrors: {},
    timestamp: Date.now(),
  };
};
