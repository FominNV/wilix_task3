import React, { FC, useState } from 'react';
import { useExchange } from '../hooks/useExchange';

const Main: FC = ()  => {
    const [fillValue, setFillValue] = useState<string>('');
    const [resultValue, setResultValue] = useState<string>('');
    const getExchange = useExchange();

    const changeHandler = (e: any): void => {
        setFillValue(e.target.value)
    }

    const keyPressHandler = (e: any):void => {
        if(e.key === 'Enter'){
            setResultValue( getExchange(fillValue!) );
        }
    }

    return (
        <>
        <div className="row">
            <div className="col-12 col-lg-8">
            <div className="row col-12 col-lg-10 mt-5 p-2">
            <div className="input-group input-group-lg">
                <span className="input-group-text me-4 fw-bold bshd bc-brown" id="inputGroup-sizing-lg">Fill in</span>
                <input 
                    type="text" 
                    className="form-control bshd fill" 
                    aria-label="Sizing example input" 
                    aria-describedby="inputGroup-sizing-lg"
                    onChange={changeHandler}
                    onKeyPress={keyPressHandler}
                ></input>
            </div>
        </div>
        <div className="row col-12 col-lg-10 mt-5 p-2">
            <div className="input-group input-group-lg">
                <span className="input-group-text me-4 fw-bold bshd bc-brown" id="inputGroup-sizing-lg">Result</span>
                <input
                    id="result"
                    type="text" 
                    readOnly 
                    className="form-control bshd result" 
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-lg"
                    value={resultValue}
                ></input>
            </div>
        </div>
        <div className="row col-12 col-lg-10 mt-5 p-2">
            <div className="input-group input-group-lg">
                <span className="input-group-text me-4 fw-bold bshd bc-brown" id="inputGroup-sizing-lg">Example</span>
                <input 
                    type="text" 
                    readOnly 
                    className="form-control info bshd" 
                    aria-label="Sizing example input" 
                    aria-describedby="inputGroup-sizing-lg"
                    value="123.5 EUR in USD"
                ></input>
            </div>
        </div>
            </div>

        </div>
        
        </>
    )
}

export default Main;