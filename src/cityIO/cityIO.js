import React, { Component } from "react";
import Radar from "../Radar/Radar";

const API = "https://cityio.media.mit.edu/api/table/grasbrook/grid";

class CityIO extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityIOdata: null,
      waiting: true
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.getCityioMeta(), 1000);
  }
  getCityioMeta = () => {
    this.setState({ ...this.state });
    this.setState({ cityIOdata: null, waiting: true });
    fetch(API)
      .then(response => response.json())
      .then(result => {
        this.setState({ cityIOdata: result, waiting: false });
      })
      .catch(e => {
        console.log(e);
        this.setState({ ...this.state, waiting: false });
      });
  };

  render = () => (
    <Radar cityIOdata={this.state.cityIOdata} waiting={this.state.waiting} />
  );
}

export default CityIO;

/* 
 ! HOOKS
function CityIO() {


    const [data, setData] = useState({ cityioMeta: null });

  useEffect(() => {
    const interval = setInterval(_ => {
      const fetchUsers = async () => {
        try {
          setData({ cityioMeta: data });
          const response = await axios.get(API);
          setData({ cityioMeta: response.data });
        } catch (e) {
          setData({ cityioMeta: data.cityioMeta });
        }
      };
      fetchUsers();
    }, 1000);
    return _ => clearInterval(interval);
  }, []);

  return <Radar data={data} />;
}

export default CityIO;
*/
