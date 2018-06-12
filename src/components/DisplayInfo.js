import ReactDOM from 'react-dom';

function DisplayInfo(props) {
   return ReactDOM.createPortal(
       props.children,
       props.element
   );
}

export default DisplayInfo;
