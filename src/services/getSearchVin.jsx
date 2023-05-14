import axios from 'axios';

const BASE_URL = 'https://vpic.nhtsa.dot.gov/api';

export const getSearchVin = async ({ vin = '' }) => {
  const result = await axios.get(
    `${BASE_URL}/vehicles/decodevin/${vin}?format=json`
  );
  return result;
};

export const getSearchVariablesList = async () => {
  const result = await axios.get(
    `${BASE_URL}/vehicles/getvehiclevariablelist?format=json`
  );
  return result;
};

export const getVariableDescription = async({variableId} ) => {
  const result = await axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablevalueslist/${variableId}?format=json`);
  return result;
};
