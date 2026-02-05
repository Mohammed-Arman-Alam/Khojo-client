import React from 'react';

import useAxios from '../hooks/UseAxios';

const useRecoveredItemsApi = () => {
    const axiosSecure = useAxios();
    const getRecoveredItem =()=>{
        return axiosSecure.get('/recoveredItems')
        .then(res=> res.data)
    }
    const recoverItem =(recoveredData)=>{
        return axiosSecure.post('/recoveredItems', recoveredData)
    }
    return {
        getRecoveredItem,
        recoverItem
    };
};

export default useRecoveredItemsApi;