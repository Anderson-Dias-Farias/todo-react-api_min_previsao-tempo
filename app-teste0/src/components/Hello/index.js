import React, { useState } from 'react';
import './styles.css';
import propTypes from 'prop-types';
import { MdAccountCircle } from 'react-icons/md';


const Hello = ({ onHello }) => {
    const [value, setValue] = useState('');
    const [modal, setModal] = useState('modal');
    const ENTER_KEY = 13;
    const SCAPE_KEY = 27;

    const onChange = (event) => {
        setValue(event.target.value);
        console.log(value);
    };

    const erase = () => {
        setValue('');
    };

    const submit = () => {
        if (value !== '') {
            onHello(value);
            setModal('modalNone');
            erase();
        } else {
            erase();
        }
    };

    const onKeyDown = (event) => {
        if (event.which === ENTER_KEY && value !== '') {
            submit();
        } else if (event.which === SCAPE_KEY) {
            erase();
        }
    };

    return (
        <section className={modal}>
            <h2>Qual o seu nome?</h2>
            <div className="divForm">
                <input
                    className="inputModal"
                    placeholder="Digite seu nome!"
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    value={value}
                ></input>
                <MdAccountCircle className="iconeInputModal" size={50} />
            </div>
        </section>
    );
};
Hello.propTypes = {
    onHello: propTypes.func.isRequired,
}

export default Hello;
