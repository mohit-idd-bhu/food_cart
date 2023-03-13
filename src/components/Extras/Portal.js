import ReactDOM from 'react-dom';

function Portal(props) {
    return ReactDOM.createPortal(props.children,props.parentID);
}

export default Portal;