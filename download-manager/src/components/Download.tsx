import React from 'react'

export const Download = (props : any) => {
    const date = new Date(props.whenAdded).toLocaleString()
    

    return (
            <div className='flex gap-3'>
                <div className='flex flex-col'>
                    <p>Url:</p>
                    <p>{props.url}</p>
                </div>
                <div className='flex flex-col'>
                    <p>Added:</p>
                    <p>{date}</p>
                </div>
                <div className='flex flex-col'>
                    <p>Downloaded:</p>
                    <p>{JSON.stringify(props.status)}</p>
                </div>
            </div>
    )
}