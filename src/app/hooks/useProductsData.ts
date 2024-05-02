import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getProductsData = async () => {
    const response = await axios.get("https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC")

    return response;
}

export function useProductsData(){
    const query = useQuery({
        queryFn: getProductsData,
        queryKey: ["products"]
    })

    return {
        ...query,
        data: query.data?.data
    };
}