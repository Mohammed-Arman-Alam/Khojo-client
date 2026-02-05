import axios from 'axios';
import React from 'react';
import { use } from 'react';
import { AuthContext } from '../context/AuthProvider';

const instance = axios.create({
    baseURL: 'https://khojo-server.vercel.app'
});

const useAxios = () => {
    const {user} = use(AuthContext);
    instance.interceptors.request.use(config=>{
    config.headers.authorization = `Bearer ${user.accessToken}`;
    return config;
})
    return instance;
};

export default useAxios;