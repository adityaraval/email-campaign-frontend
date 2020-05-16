import React from 'react';
import { Formik } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Row, Col, Form } from 'react-bootstrap';

import {
  FormControl,
  FormLabel,
  SubmitButton,
  HeaderContainer,
} from './StyledComponents';
import Header from './Header';

import { initialValues, validationSchema } from './schema';
import { createCampaign } from '../httpClient';

const CampaignForm = () => (
  <>
    <HeaderContainer className="justify-content-md-start">
      <Col>
        <Header
          title="Create Campaign"
          description="This campaign will be start on startDate and will run every day once until endDate reaches."
        />
      </Col>
    </HeaderContainer>
    <div className="justify-content-md-center">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values);
          setSubmitting(true);
          setTimeout(async () => {
            alert(JSON.stringify(values, null, 2));
            await createCampaign(values);
            resetForm();
            setSubmitting(false);
          }, 500);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Group controlId="name">
                  <FormLabel>
                    Campaign Name :
                  </FormLabel>
                  <FormControl
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    className={touched.name
                        && errors.name ? 'error' : null}
                  />
                  {touched.name
                      && errors.name ? (
                        <div className="error-message">{errors.name}</div>
                    ) : null}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="client">
                  <FormLabel>
                    Client Name :
                  </FormLabel>
                  <FormControl
                    type="text"
                    name="client"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.client}
                    className={touched.client
                        && errors.client ? 'error' : null}
                  />
                  {touched.client
                      && errors.client ? (
                        <div className="error-message">{errors.client}</div>
                    ) : null}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="customName">
                  <FormLabel>
                    Custom Name :
                  </FormLabel>
                  <FormControl
                    type="text"
                    name="customName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.customName}
                    className={touched.customName
                        && errors.customName ? 'error' : null}
                  />
                  {touched.customName
                      && errors.customName ? (
                        <div className="error-message">{errors.customName}</div>
                    ) : null}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="subject">
                  <FormLabel>
                    Subject :
                  </FormLabel>
                  <FormControl
                    type="text"
                    name="subject"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.subject}
                    className={touched.subject
                        && errors.subject ? 'error' : null}
                  />
                  {touched.subject
                      && errors.subject ? (
                        <div className="error-message">{errors.subject}</div>
                    ) : null}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="startDate">
                  <FormLabel>
                    Start Date :
                  </FormLabel>
                  <DatePicker
                    selected={values.startDate}
                    onChange={(date) => setFieldValue('startDate', date)}
                    minDate={new Date()}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    timeCaption="time"
                    dateFormat="MMMM d, yyyy h:mm aa"
                    className={touched.startDate && errors.startDate ? 'error form-control' : 'form-control'}
                  />
                  {touched.startDate && errors.startDate ? (
                    <div className="error-message">{errors.startDate}</div>
                  ) : null}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="endDate">
                  <FormLabel>
                    End Date :
                  </FormLabel>
                  <DatePicker
                    selected={values.endDate}
                    onChange={(date) => setFieldValue('endDate', date)}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    timeCaption="time"
                    dateFormat="MMMM d, yyyy h:mm aa"
                    className={touched.endDate && errors.endDate ? 'error form-control' : 'form-control'}
                  />
                  {touched.endDate && errors.endDate ? (
                    <div className="error-message">{errors.endDate}</div>
                  ) : null}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="customers">
                  <FormLabel>
                    Customers emails comma separated :
                  </FormLabel>
                  <FormControl
                    type="text"
                    name="customers"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.customers}
                    className={touched.customers
                        && errors.customers ? 'error' : null}
                  />
                  {touched.customers
                      && errors.customers ? (
                        <div className="error-message">{errors.customers}</div>
                    ) : null}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="body">
                  <FormLabel>
                    Email Text(body) :
                  </FormLabel>
                  <FormControl
                    type="text"
                    name="body"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.body}
                    className={touched.body
                        && errors.body ? 'error' : null}
                  />
                  {touched.body
                      && errors.body ? (
                        <div className="error-message">{errors.body}</div>
                    ) : null}
                </Form.Group>

              </Col>
            </Row>
            <SubmitButton
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </SubmitButton>
          </Form>
        )}
      </Formik>
    </div>
  </>
);

export default CampaignForm;
