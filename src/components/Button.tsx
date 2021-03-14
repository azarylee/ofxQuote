import React, { CSSProperties } from 'react';
import '../style/button.scss';

export default function(props:{
    text: string
    className: string
    style?: CSSProperties
    onClick: () => void
}) {
    const { text, className, style, onClick } = props;
    
    return (
        <button 
            className={className} 
            type="button" 
            style={style}
            onClick={() => onClick()}
        >
            <span>{text}</span>
        </button>
    )
}