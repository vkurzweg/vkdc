import React from "react";


export class Intro extends React.Component {

  // render
  render() {

    return (
      <div style={{ backgroundColor: '#212121', color: '#FAFAFA', padding: '5%', marginTop: '3%', textAlign: 'center', fontSize: '16px' }}>
        <p style={{ textTransform: 'uppercase', letterSpacing: '3px', fontSize: '14px', padding: '1%' }}>Custom web design + development</p>
        <p style={{ textTransform: 'uppercase', letterSpacing: '3px', fontSize: '14px', padding: '1%' }}>Optimization across devices</p>
        <p style={{ textTransform: 'uppercase', letterSpacing: '3px', fontSize: '14px', padding: '1%' }}>On-brand content enhancement</p>
      </div>
    );

  }
}

export default Intro;

// <img src="/media/profile.jpg" alt="Victoria Kurzweg" style={{ height: '200px', marginTop: '5%', marginLeft: '10%'}} />
