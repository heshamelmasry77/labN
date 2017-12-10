import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  FormGroup,
  FormControl,
  Button,
  Grid,
  Row,
  Col
} from 'react-bootstrap';
import '../../../Form.css';

const validate = values => {
  const errors = {};
  if (!values.full_name) {
    errors.full_name = 'Required';
  } else if (values.full_name.length > 15) {
    errors.full_name = 'Must be 15 characters or less';
  }
  if (!values.url) {
    errors.url = 'Required';
  } else if (values.url.length > 150) {
    errors.url = 'Must be 15 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.contact_number) {
    errors.contact_number = 'Required';
  }
  if (!values.strategy) {
    errors.strategy = 'Required';
  }
  return errors;
};

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <FormGroup>
    <div>
      <FormControl {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </FormGroup>
);

const SyncValidationForm = props => {
  const { handleSubmit, submitting } = props;
  return (
    <div className="Form">
      <Grid>
        <Row className="text-left">
          <Col xs={12} md={6}>
            {' '}
          </Col>
          <Col xs={12} md={6} className="form-wrapper">
            <form onSubmit={handleSubmit}>
              <h3>Elegant Communication</h3>
              <Field
                name="full_name"
                type="text"
                component={renderField}
                label="full name"
              />
              <Field
                name="email"
                type="email"
                component={renderField}
                label="email address *"
              />

              <Field
                name="contact_number"
                type="number"
                component={renderField}
                label="contact number"
              />
              <Field
                name="url"
                type="text"
                component={renderField}
                label="Url"
              />

              <Field name="favoriteColor" component="select">
                <option>digital strategy or transformation</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Field>

              <Button bsStyle="primary" type="submit" disabled={submitting}>
                CONTACT ME
              </Button>
            </form>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default reduxForm({
  form: 'syncValidation', // a unique identifier for this form
  validate // <--- validation function given to redux-form
})(SyncValidationForm);
