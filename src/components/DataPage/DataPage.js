// import React, { Component } from 'react';
// import { connect } from 'react-redux';

// import Nav from '../../components/Nav/Nav';


// const mapStateToProps = state => ({
//     pondData: state.pondData,
// });

// class DataPage extends Component {
//     componentDidMount() {
//         this.props.dispatch(getTemp());
//     }
//     render() {
//         return (
//             <div>
//                 <h3>This is the pond data page</h3>
//                 <ul>

//                 </ul>
//                 {/* <pre>{JSON.stringify(this.props.reduxState.pondData)}</pre> */}
//             </div>
//         );

//     }

// }


// // this allows us to use <App /> in index.js
// export default connect(mapStateToProps)(DataPage);