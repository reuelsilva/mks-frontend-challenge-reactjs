import "./styles.scss"

interface SkeletonGridProps{
    children: React.ReactNode
}

const SkeletonGrid: React.FC<SkeletonGridProps> = ({children}) => {
    return(
        <div className="grid-container">
            {children}
        </div>
    )
}
export default SkeletonGrid;