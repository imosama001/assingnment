import React from "react";
import { Form } from "react-bootstrap";

const TextInput = ({ id, label, placeholder }) => (
  <Form.Group controlId={id}>
    <Form.Label>{label}</Form.Label>
    <Form.Control type="text" placeholder={placeholder} />
  </Form.Group>
);

const DropdownSingle = ({ id, label, options }) => (
  <Form.Group controlId={id}>
    <Form.Label>{label}</Form.Label>
    <Form.Control as="select">
      {options.map((option) => (
        <option key={option.reactKey} value={option.value}>
          {option.display}
        </option>
      ))}
    </Form.Control>
  </Form.Group>
);

const CheckboxList = ({ id, label, options }) => (
  <Form.Group
    controlId={id}
    style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      margin:"1rem 0px"
    }}
  >
    <Form.Label>{label}</Form.Label>
    {options.map((option) => (
      <Form.Check
        key={option.reactKey}
        type="checkbox"
        id={option.reactKey}
        label={option.display}
      />
    ))}
  </Form.Group>
);

const RadioList = ({ id, label, sublabel, options }) => (
  <Form.Group
    controlId={id}
    style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      margin: "1rem 0px",
    }}
  >
    <Form.Label>{label}</Form.Label>
    <Form.Text className="text-muted">{sublabel}</Form.Text>
    {options.map((option) => (
      <Form.Check
        key={option.reactKey}
        type="radio"
        name={id}
        id={option.reactKey}
        label={option.display}
      />
    ))}
  </Form.Group>
);

const DatePicker = ({ id, label, sublabel }) => (
  <Form.Group controlId={id}>
    <Form.Label>{label}</Form.Label>
    <Form.Text className="text-muted">{sublabel}</Form.Text>
    <Form.Control type="date" />
  </Form.Group>
);

const FormComponents = {
  TextInput,
  DropdownSingle,
  CheckboxList,
  RadioList,
  DatePicker,
};

export default FormComponents;
