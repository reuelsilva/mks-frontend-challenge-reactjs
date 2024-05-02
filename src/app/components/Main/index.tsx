"use client"
import { useProductsData } from "@/app/hooks/useProductsData";
import SkeletonGrid from "./SkeletonGrid";
import SkeletonCard from "./SkeletonCard";
import ProductCard from "./ProductCard";
import "./styles.scss";

export default function Main(){
    const {data} = useProductsData(); 
      
    return(
        <main>
            <div className="grid-container"> 
                {
                    data ? (
                        data.products.map((product: ProductsData, key:number) => {
                            return(
                                <ProductCard product={product} key={product.id}/>
                            )
                        })
                    ): (
                        <SkeletonGrid>
                            <SkeletonCard/>
                            <SkeletonCard/>
                            <SkeletonCard/>
                            <SkeletonCard/>
                            <SkeletonCard/>
                            <SkeletonCard/>
                            <SkeletonCard/>
                            <SkeletonCard/>
                        </SkeletonGrid>
                    )
                }
            </div>
      </main>
    )
}
