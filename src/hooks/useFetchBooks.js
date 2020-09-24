
import { useEffect, useState } from 'react'
import getBooks from '../helpers/getBooks'

const useFetchBooks = (category) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    })

    useEffect(()=>{
        getBooks(category)
            .then(libro => {
                setstate({
                        data:libro,
                        loading: false
                })
            })
    },[category])

    return state;
}

export default useFetchBooks

