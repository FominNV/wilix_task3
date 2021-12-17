import React, { FC, useEffect, useState } from 'react';
import * as DATA from '../data';

type props = any;

const Info: FC<props> = ({ currentCurrency }) => {
    const rates = Object.entries(DATA.rates);
    const currency = Object.entries(DATA.currency);

    const getCurrentCourse = (): number => {
        let course;
        rates.map((el) => {
            if (el[0] === currentCurrency) {
                course = el[1];
            }
        })
        return course ? course : 0;
    }

    const [currentCourse, setCurrentCourse] = useState<number>(() => getCurrentCourse());

    useEffect(() => {
        setCurrentCourse( getCurrentCourse() );
    }, [currentCurrency])

    return (
        <div className="row">
            <div className="col-12 mt-5 p-3">
                <h1>Course Currency</h1>
                <div className="table-wrap">
                    <table className="table table-dark caption-top">
                        <thead>
                            <tr>
                            <th scope="col">No</th>
                            <th scope="col">Currency</th>
                            <th scope="col">Name</th>
                            <th scope="col">Course</th>
                            </tr>
                        </thead>                
                        <tbody>
                            { rates.map((el, i) =>  
                            <tr key={i + 1}>
                                <th scope="row">{i + 1}</th>
                                <td>{currency[i][0]}</td>
                                <td>{currency[i][1]}</td>
                                <td>{currentCourse / el[1]}</td>
                            </tr>) }
                        </tbody>
                    </table>
                 </div>               
                
            </div>
        </div>
    )
}

export default Info;