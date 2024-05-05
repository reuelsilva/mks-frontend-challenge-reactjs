import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonCard:React.FC = () => {
    return(
        <Skeleton height={250} width={215} baseColor="#ebebeb" borderRadius={8}/>            
    )
}
export default SkeletonCard;