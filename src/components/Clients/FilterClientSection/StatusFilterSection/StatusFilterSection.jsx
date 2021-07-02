import React, {useRef} from 'react';
import classes from './status.module.css'
import cn from 'classnames';

export const StatusFilterSection = ({data,activePunkt,setPunkt}) => {
    const setStatus = (e) => {
        setPunkt(e.target.textContent)
    };
    return (
        <div className={cn('row', classes.wrapper)}>
            {data.map(option=> {
                let activeClass;
                if (activePunkt === '') {
                    activeClass = classes.item;
                }else if(activePunkt === option.name){
                    activeClass = classes.item
                }else{
                    activeClass = classes.item_mute;
                }
                return (<div onClick={setStatus} key={option.id} className={activeClass}><img src={option.img}
                                                                     alt={option.name}/>{option.name}</div>);
            })}
        </div>
    );
};