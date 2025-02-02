import './Branch.css'

function Branch(props) {
    return (
        <span className="branch" id={props.title}>
            <div className='content'>
                <div className='back'>
                    <div className='back-content'>
                        <div className='text-info'>
                            <h3 className='branch-title'>{props.title}</h3>
                            <p className='branch-text'>{props.p1}</p>
                            <p className='branch-text'>{props.p2}</p>
                        </div>
                        <img className="branch-img" src={props.pic} />
                    </div>
                </div>
            </div>
        </span>
    )
}

export default Branch