import {connect} from "react-redux";

export let Result = ({calculations}) => {
    return (
        <p className="display-5 text-center">{calculations}</p>
    )
}

const mapStateToProps = (state)=>{
    return {calculations : state.calculations}
}

Result = connect(mapStateToProps)(Result)