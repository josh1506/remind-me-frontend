import React from 'react';
import { Form, Button } from 'react-bootstrap'




export const renderInput = (name, label, type = 'text', ...rest) => {
    return (
        <React.Fragment>
            <Form.Label>{label}</Form.Label>
            <Form.Control type={type} name={name} placeholder={label} {...rest} />
        </React.Fragment>
    )
}

export const renderText = (text) => <Form.Text className="text-muted"> {text}</Form.Text >

export const renderButton = (label, variant, ifBlock = false) => <Button variant={variant} type="submit" block={ifBlock}>{label}</Button>

export const renderCheckBox = (type, label) => <Form.Check type={type} label={label} />

function formClass(props) {
}

export default formClass;