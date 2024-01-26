import axios from "axios";
import { Dispatch } from "react";
import { ActionTypes, AppAction, User, Plans } from "./types";

export const fetchUserData = (dispatch: Dispatch<AppAction>) => {
  axios
    .get("https://rimac-front-end-challenge.netlify.app/api/user.json")
    .then((response) => {
      const user: User = response.data;
      dispatch({ type: ActionTypes.SET_USER, payload: user });
    })
    .catch((error) => {
      console.error("Error al iniciar sesión:", error);
    });
};

export const fetchPlansData = (dispatch: Dispatch<AppAction>) => {
  axios
    .get(`https://rimac-front-end-challenge.netlify.app/api/plans.json`)
    .then((response) => {
      const plans: Plans[] = response.data;
      //dispatch({ type: ActionTypes.SET_PLANS, payload: plans });
    })
    .catch((error) => {
      console.error("Error al obtener datos del usuario:", error);
    });
};
