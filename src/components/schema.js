import * as Yup from 'yup';

export const initialValues = {
  name: '',
  client: '',
  startDate: new Date(),
  endDate: new Date(),
  customName: '',
  subject: '',
  customers: '',
  body: '',
};

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('*name is required'),
  client: Yup.string().required('*client is required'),
  customName: Yup.string().required('*customName is required'),
  subject: Yup.string().required('*subject is required'),
  startDate: Yup.date().required('*startDate is required').M,
  endDate: Yup.date().required('*endDate is required')
    .when('startDate',
      (startDate, schema) => (startDate && schema.min(startDate))),
  customers: Yup.string().required('*customers is required'),
  body: Yup.string().required('*body is required'),
});
