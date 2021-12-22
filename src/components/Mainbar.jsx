import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAPIData} from '../redux';
import {Button} from '@mui/material'
import CustomTable from "./Table";



function Mainbar() {
    const [showTable, setShowTable] = useState(false);
    const res = useSelector(state=> state.responseData);
    const dispatch = useDispatch();

    const getHandler = ()=> {
        dispatch(getAPIData);
        setShowTable(true);
    }

    const closeHandler = ()=> {
        setShowTable(false);
    }

    return (
        <div className='mainbar'>
            <div className="buttonArea">
                <Button variant='contained' onClick={getHandler}>Get Users</Button>
                <Button variant='contained' onClick={closeHandler}>Close</Button>
            </div>
            {showTable ? <CustomTable res={res} />: null}
        </div>
    )
}

export default Mainbar
