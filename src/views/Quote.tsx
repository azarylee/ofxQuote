import React from 'react';
import { useHistory } from 'react-router-dom';

// components
import Title from '../components/Title';
import Button from '../components/Button';

// model
import { QuoteData } from '../model';

export default function () {
    const history = useHistory();
    const data = history.location.state as QuoteData;
    if (!data.rate) {
        history.push('/');
    }

    return (
        <div className='slashContainer' 
                style={{ 
                    padding: '1rem', 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center', 
                    marginTop: 16,
                }}
        >
            <div className='wrapper'>
                <Title title="OFX Customer Rate" underline={false} className="title" />
                <span className="figure">{data.rate}</span>
                <Title title="From" underline={false} className="title" />
                <div>
                    <span className="currency">{data.currency}</span>
                    <span className="amount">
                        {
                            parseFloat(data.amount.toString().replace(/,/g, ''))
                            .toLocaleString('en-US', {minimumFractionDigits: 2})
                        }
                    </span>
                </div>
                <Title title="To" underline={false} className="title" />
                <div>
                    <span className="currency">{data.toCountry}</span>
                    <span className="amount">
                        {
                            parseFloat(data.deliveryAmount.toString().replace(/,/g, ''))
                            .toLocaleString('en-US', {minimumFractionDigits: 2})
                        }
                    </span>
                </div>
            </div>
            <Button 
                className="btn roundBtn primary" 
                text="START NEW QUOTE" 
                style={{ margin: '2rem 0' }} 
                onClick={() => history.push('/')}
            /> 
        </div>
    )
}
