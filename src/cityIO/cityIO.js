import React, { Component } from "react";
import Radar from "../Radar/Radar";
import TreeMap from "../TreeMap/TreeMap";
import SunburstWithTooltips from "../Sunburst/Sunburst";
import ScaleLoader from "react-spinners/ScaleLoader";
import { css } from "@emotion/core";

var tableName = window.location.search.substring(1);
var cityioHashURL = null;
var cityioURL = null;
if (tableName !== "") {
  cityioHashURL =
    "https://cityio.media.mit.edu/api/table/" + tableName.toString() + "/meta";
  cityioURL =
    "https://cityio.media.mit.edu/api/table/" + tableName.toString() + "/grid";
}
class CityIO extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldHash: "nope hash",
      doneFetching: false,
      cityIOdata: null
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.getCityioHash(cityioHashURL), 1000);
  }
  getCityioHash = URL => {
    // this.setState({ ...this.state });
    this.setState({ doneFetching: false });
    fetch(URL)
      .then(response => response.json())
      .then(result => {
        this.handleCityIOHashes(result);
      })
      .catch(e => {
        console.log(e);
        this.setState({ ...this.state, doneFetching: false });
      });
  };

  handleCityIOHashes = result => {
    if (result.hashes.grid !== this.state.oldHash) {
      this.setState({
        oldHash: result.hashes.grid
      });
      this.getCityio(cityioURL);
    } else {
      console.log("same hash");
    }
  };

  getCityio = URL => {
    this.setState({ doneFetching: false });
    fetch(URL)
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
    <div className="rows">
      <Radar
        cityIOdata={this.state.cityIOdata}
        doneFetching={this.state.doneFetching}
      />
      <div>
        <TreeMap
          cityIOdata={this.state.cityIOdata}
          doneFetching={this.state.doneFetching}
        />
        <SunburstWithTooltips
          cityIOdata={this.state.cityIOdata}
          doneFetching={this.state.doneFetching}
        />
      </div>
      <ScaleLoader
        css={css`
          position: fixed;
          bottom: 5em;
        `}
        sizeUnit={"px"}
        height={20}
        width={20}
        radius={2}
        color={"white"}
        loading={this.state.doneFetching}
      />
    </div>
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
