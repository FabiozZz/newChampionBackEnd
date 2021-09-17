import React, {useRef, useState} from 'react';
import classes from "./image.module.css";

const SelectImage = () => {

    const [image, setImage] = useState(null);
    const [show,setShow] = useState(false)

    const svgs = require.context('../../assets/images/IconPack', true, /\.svg$/)
    const svgsObjArray = svgs.keys()
        .map(key => ({
            path: key,
            file: svgs(key),
        }))
    const selectImage = (e)=>{
        setImage(e.target.getAttribute('src'))
    }

    const handleChangeShow = ()=>{
        setShow(!show)
    }

    return (
        <>
            <div className={classes.wrapper} onClick={handleChangeShow}>
                {show?
                    <div className={classes.select_box}>
                        <div className={classes.box}>
                            {svgsObjArray.map(e=> <img width={28} height={28} className={classes.icon} onClick={selectImage} key={e.path} src={e.file.default} alt=""/>)}
                        </div>
                    </div>
                    :
                    <div className={classes.no_image}>
                        {!image?
                            <>
                                <div className={classes.svg}>
                                    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M69 54V18C69 14.7 66.3 12 63 12H9C5.7 12 3 14.7 3 18V54C3 57.3 5.7 60 9 60H63C66.3 60 69 57.3 69 54ZM25.5 37.5L33 46.53L43.5 33L57 51H15L25.5 37.5Z" fill="#8798AD"/></svg>
                                </div>
                                <p className={classes.text}>Добавить иконку</p>
                            </>
                            :
                            <img width={100} height={100} src={image} alt="icon"/>
                        }
                    </div>

                }
            </div>

        </>
    );
};

export default SelectImage;