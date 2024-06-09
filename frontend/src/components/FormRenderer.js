import React from "react";
import { Form } from "react-bootstrap";
import FormComponents from "./FormComponent";
import './styles.css'

const FormRenderer = ({ formData }) => {
  return (
    <Form>
      {formData?.length > 0 ? (
        formData.map((item, index) => {
          const Component = FormComponents[item.comp];
          if (!Component) return null;
          return <Component key={index} {...item.props} />;
        })
      ) : (
        <></>
      )}
    </Form>
  );
};

export default FormRenderer;
