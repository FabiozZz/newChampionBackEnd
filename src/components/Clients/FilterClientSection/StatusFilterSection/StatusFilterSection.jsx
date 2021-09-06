import React from 'react';
import classes from './status.module.css'
import cn from 'classnames';

export const StatusFilterSection = ({data,activePunkt,setPunkt}) => {

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
                return (<div onClick={() => {
                    setPunkt({id:option.id,name:option.name})
                }} key={option.id} data-value={option.name} className={activeClass}><img data-value={option.name}
                                                                                         src={option.img}
                                                                                         />{option.name}
                </div>);
            })}
        </div>
    );
};