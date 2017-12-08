import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
  Panel,
  Grid,
  Row,
  Col
} from 'react-bootstrap';

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 200) {
    errors.name = 'Must be 15 characters or less';
  }
  if (!values.description) {
    errors.description = 'Required';
  } else if (values.description.length > 200) {
    errors.description = 'Must be 75 characters or less';
  }

  if (!values.url) {
    errors.url = 'Required';
  } else if (values.url.length > 150) {
    errors.url = 'Must be 15 characters or less';
  }
  if (!values.about) {
    errors.about = 'Required';
  } else if (values.about.length > 500) {
    errors.about = 'Must be 15 characters or less';
  }
  if (!values.picture) {
    errors.picture = 'Required';
  }
  // if (!values.email) {
  //   errors.email = 'Required';
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //   errors.email = 'Invalid email address';
  // }
  // if (!values.age) {
  //   errors.age = 'Required';
  // } else if (isNaN(Number(values.age))) {
  //   errors.age = 'Must be a number';
  // } else if (Number(values.age) < 18) {
  //   errors.age = 'Sorry, you must be at least 18 years old';
  // }
  return errors;
};
const warn = values => {
  const warnings = {};
  // if (values.age < 19) {
  //   warnings.age = 'Hmm, you seem a bit young...';
  // }
  return warnings;
};
const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <FormGroup>
    <ControlLabel>{label}</ControlLabel>
    <div>
      <FormControl {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </FormGroup>
);
const renderTextArea = ({ input, meta: { touched, error, warning } }) => (
  <FormGroup>
    <ControlLabel>Content</ControlLabel>
    <div>
      <FormControl
        componentClass="textarea"
        placeholder="write about the project"
        {...input}
        rows="10"
        cols="40"
      />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </FormGroup>
);

const SyncValidationForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <Grid style={{ margin: '20px' }}>
      <Row className="text-left">
        <Panel>
          <form onSubmit={handleSubmit}>
            <Field
              name="name"
              type="text"
              component={renderField}
              label="Name"
            />
            <Field
              name="description"
              type="text"
              component={renderField}
              label="Description"
            />
            <Field name="url" type="text" component={renderField} label="Url" />
            <Field
              name="about"
              type="text"
              component={renderTextArea}
              label="About"
            />

            {/*<Field name="email" type="email" component={renderField} label="Email"/>*/}
            {/*<Field name="age" type="number" component={renderField} label="Age"/>*/}
            <Grid className="text-center">
              <Row>
                <Col sm={12} md={12}>
                  <Button
                    bsStyle="primary"
                    type="submit"
                    disabled={submitting}
                    style={{ margin: '15px' }}
                  >
                    Submit
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col sm={12} md={12}>
                  <Button
                    bsStyle="danger"
                    type="button"
                    disabled={pristine || submitting}
                    onClick={reset}
                    style={{ margin: '15px' }}
                  >
                    Clear Values
                  </Button>
                </Col>
              </Row>
            </Grid>
          </form>
        </Panel>
      </Row>
    </Grid>
  );
};

export default reduxForm({
  form: 'syncValidation', // a unique identifier for this form
  validate, // <--- validation function given to redux-form
  warn // <--- warning function given to redux-form
})(SyncValidationForm);
