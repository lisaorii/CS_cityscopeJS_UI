import React, { Component } from "react";
import Radar from "../Radar/Radar";

const API = "https://cityio.media.mit.edu/api/table/grasbrook/grid";

class CityIO extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityIOdata: null,
      doneFetching: false
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.getCityioMeta(), 1000);
  }
  getCityioMeta = () => {
    this.setState({ ...this.state });
    this.setState({ cityIOdata: null, doneFetching: false });
    fetch(API)
      .then(response => response.json())
      .then(result => {
        this.setState({ cityIOdata: result, doneFetching: true });
      })
      .catch(e => {
        console.log(e);
        this.setState({ ...this.state, doneFetching: false });
      });
  };

  render = () => (
    <Radar
      cityIOdata={this.state.cityIOdata}
      doneFetching={this.state.doneFetching}
    />
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
