// EVERY REACT COMPONENT MUST RETURN A SINGLE DOM ELEMENT!!!

function Card(props){
    // console.log(props)
    // const name = "Robert Bunch";
    // // const title = "React From the Beginning";
    // const title = props.title;
    const saleOn = false;

    return (
        <div className="col s3">
            <div className="card hoverable small">
                <div className="card-image">
                    <img src={props.image} />
                </div>
                <div className="card-content">
                    <p>{props.course}</p>
                    <p>{props.instructor}</p>
                </div>
                <div className="card-action">
                    <a href="#">${saleOn ? 9.99 : 59.99}</a>
                </div>
            </div>
        </div>    
    )
};