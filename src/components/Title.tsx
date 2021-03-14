import React, { CSSProperties } from 'react';

export default function (props: {
    title: string,
    className?: string,
    style?: CSSProperties,
    underline?: boolean,
}) {
    const { title, className, style, underline = true} = props
    return (
        <div className={className} style={style}>
            <h3>{title}</h3>
            { underline ? <div className="underline" /> : null }
        </div>
    )
}