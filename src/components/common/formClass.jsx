import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'

class FormClass extends Component {
    renderInput = (name, label, type = 'text', ...rest) => {
        return (
            <React.Fragment>
                <Form.Label>{label}</Form.Label>
                <Form.Control type={type} name={name} placeholder={label} {...rest} />
            </React.Fragment>
        )
    }

    renderText = (text) => <Form.Text className="text-muted"> {text}</Form.Text >

    renderButton = (label, variant, ifBlock = false) => <Button variant={variant} type="submit" block={ifBlock} >{label}</Button>

    renderCheckBox = (type, label) => <Form.Check type={type} label={label} />


}

export default FormClass;