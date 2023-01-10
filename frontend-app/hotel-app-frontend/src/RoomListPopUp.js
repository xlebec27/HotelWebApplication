// import React, { Component } from "react";

// class PopUp extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {rooms: [], hotel_name: this.props.hotel_name};
//     }

//     componentDidMount() {
//         var name = this.state.hotel_name;
//         fetch(`http://localhost:8080/room/hotel/${name}`, {mode: 'no-cors'})
//             .then(response => response.json())
//             .then((data) => {this.setState({hotels: data})});
//     }
//     handleClick = () => {
//      this.props.toggle();
//     };

//     fillTable(){

//     }
//     render() {
//       const hotel_name = this.props.match.params.name
//       fetch(`http://localhost:8080/room/hotel/${name}`, {mode: 'no-cors'})
//             .then(response => response.json())
//             .then((data) => {this.setState({hotels: data})});
//         return (
//           <div className="modal">
//             <div className="modal_content">
//               <span className="close" onClick={this.handleClick}>
//                 &times;
//               </span>
//               <form>
//                 <h3>rooms</h3>
//                 <label>
//                   Name:
//                   <input type="text" name="name" />
//                 </label>
//                 <br />
//                 <input type="submit" />
//               </form>
//             </div>
//           </div>
//         );
//     }
// }

// export default PopUp;