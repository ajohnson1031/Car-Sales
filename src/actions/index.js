export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const addFeature = feature => ({ type: ADD_FEATURE, payload: feature });
export const removeFeature = feature => ({
  type: REMOVE_FEATURE,
  payload: feature
});
