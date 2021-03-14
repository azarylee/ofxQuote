import React, { CSSProperties, ReactNode } from 'react';

// scss
import '../style/index.scss';
import '../style/input.scss';

// images
import arrow from '../assets/images/arrow.png';

export function SelfInput(props: {
    type: string,
    className: string,
    name: string ,
    placeHolder?: string,
    blur?: (text: string) => void,
    changeText: (text: string) => void,
    value: string
}) {
    const { type, className, name, placeHolder, changeText, blur, value } = props;

    return (
        <input 
            type={type} 
            className={className} 
            name={name} 
            id={name} 
            placeholder={placeHolder}
            value={ value ?? ''}
            onChange={(e) => {
                changeText(e.currentTarget.value)
            }}
            onBlur={(e) => {
                if (blur) {
                    blur(e.currentTarget.value)
                }
            }}
        />
    )
}

export function InputGroup(props: {
    row?: string,
    name: string,
    isRequired: number,
    label: string,
    type: string,
    className?: string,
    value:string,
    style?: CSSProperties,
    blur?: (text: string) => void,
    changeText: (text: string) => void
}) {
    const { name, isRequired, label, type, className = 'default', row='col-1', style, changeText, blur, value } = props;
    
    return (
        <div className={`inputGroup ${row}`} style={style}>
            <label htmlFor={name}>
                <span>{label}</span>
                <i className={isRequired ? 'required' : ''}>*</i>
            </label>
            <SelfInput 
                type={type} 
                className={`selfInput${className}`} 
                name={name} 
                placeHolder={label} 
                changeText={changeText}
                blur={blur}
                value={value}
            />
        </div>
    )
}

export function SelectInput(props: {
    className: string,
    name: string,
    id: string,
    children: ReactNode,
    changeSelect: (text: string) => void,
}) {
    const { className, name, id, children, changeSelect } = props;

    return (
        <div className={`SelectGroup ${className}`}>
            <select className='self-select' name={name} id={id} 
                onChange={(e) => {
                    changeSelect(e.currentTarget.value);
                }}
            >
                {children}
            </select>
            <div className="arrow">
                <img src={arrow} alt="arrow"/>
            </div>
        </div>
    )
}

export function PhoneInputGroup(props: {
    row?: string,
    name: string,
    isRequired: number,
    label: string,
    children: ReactNode,
    value: string,
    changeText: (text: string) => void,
    blur?: (text: string) => void,
    changeSelect: (text: string) => void,
}) {
    const { name, isRequired, label, row='col-1', children, value, changeText, blur, changeSelect } = props;

    return (
        <div className={`inputGroup ${row}`}>
            <label htmlFor={name}>
                <span>{label}</span>
                <i className={isRequired ? 'required' : ''}>*</i>
            </label>
            <div style={{ display: "flex" }}>
                <SelectInput className={name} name={name} id={name} changeSelect={changeSelect}>
                    {children}
                </SelectInput>    
                <input type="text" 
                    value={value} 
                    onChange={(e) => {
                        changeText(e.currentTarget.value);
                    }}
                    onBlur={(e) => {
                        if(blur) {
                            blur(e.currentTarget.value);
                        }
                    }}
                />
            </div>
        </div>
    )
}

export function SelectInputGroup(props: {
    row?: string,
    name: string,
    isRequired: number,
    label: string,
    children: ReactNode,
    changeText?: (text: string) => void,
    blur?: (text: string) => void,
    changeSelect: (text: string) => void,
}) {
    const { name, isRequired, label, row='col-1', children, changeSelect } = props;
    
    return (
        <div className={`inputGroup ${row}`}>
            <label htmlFor={name}>
                <span>{label}</span>
                <i className={isRequired ? 'required' : ''}>*</i>
            </label>
            <div style={{ display: "flex" }}>
                <SelectInput className={name} name={name} id={name} changeSelect={changeSelect}>
                    {children}
                </SelectInput>    
            </div>
        </div>
    )
}
