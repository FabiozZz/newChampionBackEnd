import React from 'react';
import classes from './edit.module.css';
import {Redirect} from "../../../../common/Redirect";

export const EditAbonement = () => {
    return (
        <>
            <Redirect padding={true} title={'Добавить тариф'}/>

            <div className={classes.wrapper}>
                <form className={classes.block}>

                    <div className={classes.create_section}>

                        <div className={classes.fields}>

                        </div>

                        <div className={classes.radio_field}>

                        </div>

                    </div>

                    <div className={classes.prices_block}>

                        <div className={classes.card}>

                        </div>

                        <div className={classes.field}>

                        </div>

                    </div>

                    <div className={classes.submit}>

                    </div>

                </form>
            </div>
        </>
    );
};