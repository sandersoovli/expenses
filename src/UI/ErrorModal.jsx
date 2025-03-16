import React, { Fragment } from "react";
import ReactDOM from 'react-dom';
import Card from './Card.jsx';
import Button from './Button.jsx'; // Ensure this matches the actual file name
import './Error.css';

const Backdrop = (props) => {
    return <div className="backdrop" onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
    return (
        <Card className="error-modal">
            <header className="error-modal__header">
                <h2>{props.title}</h2>
            </header>
            <div className="error-modal__content">
                <p>{props.message}</p>
            </div>
            <footer className="error-modal__footer">
                <Button onClick={props.onConfirm}>OK</Button>
            </footer>
        </Card>
    );
};

const ErrorModal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Backdrop onConfirm={props.onConfirm} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay
                    title={props.title}
                    message={props.message}
                    onConfirm={props.onConfirm}
                />,
                document.getElementById('overlay-root')
            )}
        </Fragment>
    );
};

export default ErrorModal;