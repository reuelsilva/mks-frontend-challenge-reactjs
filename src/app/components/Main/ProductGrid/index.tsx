"use client"
import { ReactElement } from "react";
import { useProductsData } from "@/app/hooks/useProductsData";
import SkeletonCard from "./SkeletonCard";
import ProductCard from "./ProductCard";
import "./styles.scss"

export default function ProductGrid():ReactElement{
    const {data, isLoading, isSuccess} = useProductsData(); 

    return(
        <div className="grid-container"> 
                {
                    isLoading && (
                        <>
                            <SkeletonCard/>
                            <SkeletonCard/>
                            <SkeletonCard/>
                            <SkeletonCard/>
                            <SkeletonCard/>
                            <SkeletonCard/>
                            <SkeletonCard/>
                            <SkeletonCard/>
                        </>
                    )
                }
                {
                    isSuccess && (
                        data.products.map((product: ProductsData, key:number) => {
                            return(
                                <ProductCard product={product} key={product.id}/>
                            )
                        })
                    )
                }
            </div>
    )
}