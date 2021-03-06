import React from 'react';

const mapStyles = {
    width: '76%',
    height: '690px',
    position: 'absolute',
    filter: 'brightness(90%)'
  };
class Map extends React.Component {
  constructor(props) {
    super(props);
    this.onScriptLoad = this.onScriptLoad.bind(this)
  }

  onScriptLoad() {
    const map = new window.google.maps.Map(
      document.getElementById(this.props.id),
      this.props.options);
      this.props.onMapLoad(map);
      
      map.addListener('click', e =>{
        this.props.onClick(e, map)
      })
      map.addListener('idle', () => {
        this.props.updateBounds(map)
      });
  }

  componentDidMount() {
    if (!window.google) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = `https://maps.google.com/maps/api/js?key=[]&libraries=places`;
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
      // Below is important. 
      //We cannot access google.maps until it's finished loading
      s.addEventListener('load', e => {
        this.onScriptLoad()
      })
    } else {
      this.onScriptLoad()
    }
  }

  render() {
    return (
      <div style= {mapStyles} id={this.props.id} />
    );
  }
}

export default Map