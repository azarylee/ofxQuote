import React, {useState} from 'react';

import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from "react-router-dom";

// scss
import '../style/index.scss';

// components
import { InputGroup, PhoneInputGroup, SelectInputGroup } from '../components/InputGroup';
import Button from '../components/Button';

// data
import regions from '../region';
import currencies from '../currencies';

// model
import { RegionsData, CurrenciesData, Quote } from '../model/index';

export default function() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [regionCode, setRegionCode] = useState(regions[0].code);

    const [from, setFrom] = useState(currencies[0].code);
    const [to, setTo] = useState(currencies[1].code);
    const [amount, setAmount] = useState('0.00');

    const history = useHistory();

    return (
        <>
        <div className='container'>
            <div style={{ display: 'grid', gridTemplateColumns: '50% 50%', marginBottom: 16 }}>
                <InputGroup 
                    isRequired={1} 
                    name="firstName" 
                    type="text" 
                    label="First Name" 
                    row="col-2" 
                    value={firstName}
                    changeText={fName => {
                        const first = fName.replace(/[^a-zA-Z]/g, '');
                        setFirstName(first);
                    }}
                    blur={fName => {
                        if (!fName) {
                            toast.error('Warning: Please enter your first name.', {
                                bodyClassName: 'error-body',
                                progressClassName: 'progress-error',
                            });
                        }
                    }}
                />
                <InputGroup 
                    isRequired={1} 
                    name="lastName" 
                    type="text" 
                    label="Last Name" 
                    row="col-2" 
                    value={lastName}
                    changeText={lName => {
                        const last = lName.replace(/[^a-zA-Z]/g, '');
                        setLastName(last);
                    }}
                    blur={lName => {
                        if (!lName) {
                            toast.error('Warning: Please enter your Last Name.', {
                                bodyClassName: 'error-body',
                                progressClassName: 'progress-error',
                            });
                        }
                    }}
                />
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '100%', marginBottom: 16 }}>
                <InputGroup 
                    isRequired={1} 
                    name="email" 
                    type="text" 
                    label="Email" 
                    row="col-1" 
                    value={email}
                    style={{marginBottom: 16}}
                    changeText={emailText => {
                        setEmail(emailText);
                    }}
                    blur={emailText => {
                        if (!emailText) {
                            toast.error('Warning: Please enter your Email address.', {
                                bodyClassName: 'error-body',
                                progressClassName: 'progress-error',
                            });
                        } else {
                            const reg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/;
                            if(!reg.test(emailText)) {
                                toast.warn('Warning: Please enter correct Email address', {
                                    bodyClassName: 'error-body',
                                    progressClassName: 'progress-error',
                                })
                            }    
                        }
                    }}
                />
                <PhoneInputGroup 
                    isRequired={1} 
                    name="phoneNumber" 
                    label="Telephone / Mobile" 
                    row="col-1"
                    value={phoneNumber.replace(/[^0-9]/ig,'')}
                    changeSelect={code => {
                        setRegionCode(code);
                    }}
                    changeText={number => {
                        setPhoneNumber(number);
                    }}
                    blur={number => {
                        if (!number) {
                            toast.error('Warning: Please enter your Phone Number.', {
                                bodyClassName: 'error-body',
                                progressClassName: 'progress-error',
                            });
                        }
                    }}
                >
                    {(regions as RegionsData).map((region) => (
                        <option value={region.code} key={region.id}>{region.code}</option>
                    ))}
                </PhoneInputGroup>
            </div>
        </div>
        <div className='slashContainer'>
            <div style={{ display: 'grid', gridTemplateColumns: '50% 50%', marginBottom: 16 }}>
                <SelectInputGroup 
                    isRequired={1} 
                    name="from" 
                    label="From Currency" 
                    row="col-2"
                    changeSelect={currency => {
                        setFrom(currency);
                        if (currency === to) {
                            const filter = currencies.filter(c => c.code !== currency);
                            setTo(filter[0].code);
                        }
                    }}
                >
                    {(currencies as CurrenciesData).map((currency) => (
                        <option value={currency.code} key={currency.id}>
                            {currency.name} [{currency.code}]
                        </option>
                    ))}
                </SelectInputGroup>
                <SelectInputGroup 
                    isRequired={1} 
                    name="to" 
                    label="To Currency" 
                    row="col-2" 
                    changeSelect={currency => {
                        setTo(currency);
                    }}
                >
                    {
                        (currencies as CurrenciesData).filter((c) => c.code !== from).map((currency) => (
                            <option value={currency.code} key={currency.id}>
                                {currency.name} [{currency.code}]
                            </option>
                        ))
                    }
                </SelectInputGroup>    
            </div> 
            <div style={{ display: 'grid', gridTemplateColumns: '100%', marginBottom: 16 }}>
                <InputGroup 
                    isRequired={1} 
                    name="amount" 
                    type="text" 
                    label="Amount" 
                    row="col-2"
                    value={amount}
                    changeText={amountText => {
                        let number = 0;
                        if (amountText) number = parseFloat(amountText.replace(/,/g, ''));
                        setAmount(number.toString());
                    }}
                    blur={amountText => {
                        setAmount(Number(amountText).toLocaleString('en-US', {minimumFractionDigits: 2}))
                    }}    
                />  
            </div>
            <div style={{flex: '0 0 98%', justifyContent: 'center', display: 'flex'}}>
                <Button 
                    className="btn roundBtn primary" 
                    text="GET QUOTE" 
                    onClick={() => {
                        // check the first name is not empty
                        if (!firstName) {
                            toast.warn('This First Name is empty', {
                                position: "top-right",
                                autoClose: 5000,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                            });
                            return;
                        }

                        // check the last name is not empty
                        if (!lastName) {
                            toast.warn('This Last Name is empty', {
                                position: "top-right",
                                autoClose: 5000,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                            });
                            return;
                        }

                        // check the phone number and region code is not empty
                        if (!phoneNumber) {
                            toast.error('Warning: Please enter your Phone Number.', {
                                bodyClassName: 'error-body',
                                progressClassName: 'progress-error',
                            });
                            return;
                        }
                        
                        const quota = parseFloat(amount.replace(/,/g,'')).toFixed(2);

                        if (!Number(quota)) {
                            toast.warn('The amount cannot be Zero.', {
                                position: "top-right",
                                autoClose: 5000,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                            });
                            return;
                        }
                        
                        fetch(`https://api.ofx.com/PublicSite.ApiService/OFX/spotrate/Individual/${from}/${to}/${quota}?format=json`, {
                            method: 'get',
                            mode: 'cors',
                            headers: {
                                'Content-Type': 'text/plain', 
                            },
                        })
                        .then(res => res.json())
                        .then(data => {
                            if (data.ErrorCode) {
                                toast.error(data.Message, {
                                    position: "top-right",
                                    autoClose: 5000,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                });
                                return;
                            }
                            const result = data as Quote;
                            history.push({pathname :'/quote', 
                                state: { 
                                    rate: result.CustomerRate,
                                    currency: from,
                                    amount: quota,
                                    toCountry: to,
                                    deliveryAmount: result.CustomerAmount,
                                    phoneNumber: regionCode + phoneNumber,
                                } })
                        })
                        .catch(err => {
                            toast.error(err.Message, {
                                position: "top-right",
                                autoClose: 5000,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                            });
                        })
                    }}
                /> 
            </div>
        </div>
        <ToastContainer />    
        </>
    )
}