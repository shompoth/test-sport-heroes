import axios from "axios";

import { GET_DATA } from "../contants";

const API_URL = "https://sh-tech-interview.s3.eu-west-3.amazonaws.com/frontend/feed.json";

export const getData = () => {
    try {
        return async dispatch => {
            const result = await axios.get(API_URL);
            const activitiesArray = [];
            activitiesArray.push(...result.data.data);

            if (activitiesArray.length > 0) {
                dispatch({
                    type: GET_DATA,
                    payload: activitiesArray,
                });
            } else {
                console.log("Unable to fetch");
            }
        };
    } catch (error) {
        console.log(error);
    }
};
