
export default function RevenueCard(props) {
    return (
        <>
        <div className="bg-white-rounded shadow-sm">
            <div>
                {props.title}
            
            </div>
            <div className="flex justify-between">
                <div>
                $ {props.amount}
                </div>
                <div>
                    
                </div>
            </div>

        </div>
        </>
    )
}