import axios from 'axios'
import { PER_PAGE } from '../Config/query'
export const getUsers = async (searchTerm, page) => {
    const baseUrl = `https://api.github.com/search/users?q=${searchTerm} in:login&sort=login&per_page=${PER_PAGE}&page=${page}`
    const res = await axios.get(baseUrl);

    return res.data
}
