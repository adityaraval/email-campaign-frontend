import axios from 'axios';
import { toast } from 'react-toastify';
import { API_URL } from './constants';

const instance = axios.create({
  baseURL: API_URL,
});

const toastSuccess = (messageToShow) => {
  toast.success(messageToShow);
};
const toastError = (messageToShow) => {
  toast.error(messageToShow);
};

export const createCampaign = async (object) => {
  try {
    const customers = object.customers.split(',');
    object.customers = customers;
    const response = await instance.post('/campaigns', object);
    if (response.status === 200) {
      toastSuccess(response.data.message);
    } else {
      toastError(response.data.message);
    }
  } catch (e) {
    console.log(e);
  }
};
