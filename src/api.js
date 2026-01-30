import axios from "axios";

const BASE_URL = "https://pt-be-airbnc-txl6.onrender.com/api";

export const getProperties = async (query = {}) => {
  const { data } = await axios.get(`${BASE_URL}/properties`, { params: query });
  return data.properties;
};

export const getPropertyById = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/properties/${id}`);

  return data.property;
};

export const getUserById = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/users/${id}`);

  return data.user;
};

export const getReviewsByPropertyId = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/properties/${id}/reviews`);

  return data.reviews;
};
