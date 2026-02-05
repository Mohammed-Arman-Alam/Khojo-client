import React from 'react';
import useAxios from '../hooks/UseAxios';

const useItemApi = () => {
    const axiosSecure = useAxios();

    const getMyItems = email =>{
        return axiosSecure.get(`/myItems/?email=${email}`)
        .then(res =>res.data)
    };
    const addItem = itemData =>{
        return axiosSecure.post(`/lost-found`, itemData)
    }
    const updateItem =(id, updatedData) =>{
        return axiosSecure.patch(`/lost-found/${id}`, updatedData)
    }
    const deleteMyItem = id =>{
        return axiosSecure.delete(`/lost-found/${id}`)
    }
    return {
        getMyItems,
        updateItem,
        deleteMyItem,
        addItem
    };
};

export default useItemApi;