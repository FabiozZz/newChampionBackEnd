// import React, {useContext} from 'react';
// import classes from "../../add.module.css";
// import {DataPicker} from 'utils/DataPicker/DataPicker';
// import SelectGroup from 'utils/SelectGroup/SelectGroup';
// import {ContextCommonEdit} from "../../EditAdd";
//
// const TrialSectionSection = () => {
//     const {handleChangeValueDateTestLesson,testData} = useContext(ContextCommonEdit);
//     return (
//         <div className={classes.block_info}>
//             <h3 className={classes.block_info__title}>Пробное занятие</h3>
//             <div className={classes.block_info__item}>
//                 <div className={classes.group}>
//                     <SelectGroup value={{name:''}} label={'группа'}/>
//                 </div>
//                 <div className={classes.filial}>
//                     <SelectGroup value={{name:''}} label={'филиал'}/>
//                 </div>
//                 <div className={classes.picker}>
//                     <DataPicker label={"дата пробного занятия"} value={testData.dateTest} setValue={handleChangeValueDateTestLesson}/>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default TrialSectionSection;
