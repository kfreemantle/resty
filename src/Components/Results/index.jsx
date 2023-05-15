import React from 'react';
import './Results.scss'

function Results({ data }) {  // Use destructuring to get props
  return (
    <section>
      <pre>{data ? JSON.stringify(data, undefined, 2) : null}</pre>
    </section>
  );
}

export default Results;


// Starter code

// class Results extends React.Component {
//   render() {
//     return (
//       <section>
//         <pre>{this.props.data ? JSON.stringify(this.props.data, undefined, 2) : null}</pre>
//       </section>
//     );
//   }
// }