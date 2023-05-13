import axios from 'axios';

const BASE_URL = 'https://vpic.nhtsa.dot.gov/api';

export const getSearchVin = async ({ vin = '' }) => {
  const result = await axios.get(
    `${BASE_URL}/vehicles/decodevin/${vin}?format=json`
  );
  return result;
};
