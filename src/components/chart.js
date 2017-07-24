import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesSpots, SparklinesReferenceLine   } from 'react-sparklines';

export default (props) => {


function average(data){
    console.log(data, '----------')
    return _.round(_.sum(data) / data.length);
}

    return(
        <div>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color}/>
                <SparklinesSpots />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(props.data)}</div>
        </div>
    )
}
