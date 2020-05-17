import * as Yup from 'yup';

const templateSource = `<!doctype html>
<html>
<body style="margin: 0; padding: 0; background: #f0f0f0; font-size: 16px; font-family: Arial, sans-serif;">
  <!-- gmail doesn't support the style tag hence all the inline styles -->
  <div id="wrapper">
    <div style="background: #ffffff" id="heading">
      <p style="margin: 0;" >Dear {{customName}},</p>
      <p style="margin-top: 10px; margin-bottom: 0; line-height: 1.4em;">
        {{body}}
      </p>
      <p style="margin-top: 10px; margin-bottom: 0; line-height: 1.4em;">
      Please use this link to
      <a style="color: #185bec; font-weight: 600;" href={{unsubscribeUrl}}>unsubscribe</a> from this campaign.
      </p>
      <br/>
      <p style="margin-top: 10px; margin-bottom: 0; line-height: 1.4em;">
          Kind regards <br/>
          Aditya,
      </p>
    </div>
  </div>
</body>
</html>`;

export const initialValues = {
  name: '',
  client: '',
  startDate: new Date(),
  endDate: new Date(),
  customName: '',
  subject: '',
  customers: [],
  html: templateSource,
  body: '',
};

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('*name is required'),
  client: Yup.string().required('*client is required'),
  customName: Yup.string().required('*customName is required'),
  subject: Yup.string().required('*subject is required'),
  startDate: Yup.date().required('*startDate is required'),
  endDate: Yup.date().required('*endDate is required')
    .when('startDate',
      (startDate, schema) => (startDate && schema.min(startDate))),
  customers: Yup.array().of(Yup.object().shape({
    name: Yup.string().required('*name is required'),
    email: Yup.string().email().required('*email is required'),
    subject: Yup.string().required('*subject is required'),
  })),
  html: Yup.string().required('*html is required, please make sure to provide valid template, please use above link to copy default template'),
  body: Yup.string().required('*body is required'),

});
