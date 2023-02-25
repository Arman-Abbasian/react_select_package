import { useState } from 'react';
import Select from 'react-select';
const options=[
    {id:1,label:"cover 405",value:"cover 405"},
    {id:2,label:"cover 2008",value:"cover 2008"},
    {id:3,label:"cover 206",value:"cover 206"},
];
const Sync1 = () => {
    const [selectedValue,setSelectedValue]=useState('')
    const handleChange=(e)=>{
        console.log(e)
    }
    return ( 
        <Select onChange={handleChange} value={selectedValue} options={options} />
     );
}
 
export default Sync1;