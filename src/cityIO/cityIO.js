import axios from "axios";
import React, { useEffect, useState } from "react";
import Radar from "../Radar/Radar";

const API = "https://cityio.media.mit.edu/api/table/grasbrook/meta";

function CityIO() {
  const [data, setData] = useState({ cityioMeta: null, isFetching: false });

  //   useEffect(() => {
  //     const fetchUsers = async () => {
  //       try {
  //         setData({ cityioMeta: data, isFetching: true });
  //         const response = await axios.get(API);
  //         setData({ cityioMeta: response.data, isFetching: false });
  //       } catch (e) {
  //         console.log(e);
  //         setData({ cityioMeta: data.cityioMeta, isFetching: false });
  //       }
  //     };
  //     fetchUsers();
  //   });

  useEffect(() => {
    const interval = setInterval(_ => {
      const fetchUsers = async () => {
        try {
          setData({ cityioMeta: data, isFetching: true });
          const response = await axios.get(API);
          setData({ cityioMeta: response.data, isFetching: false });
          console.log(response.data);
        } catch (e) {
          console.log(e);
          setData({ cityioMeta: data.cityioMeta, isFetching: false });
        }
      };
      fetchUsers();
    }, 5000);
    return _ => clearInterval(interval);
  });

  return <Radar cityioMeta={data} isFetching={data.isFetching} />;
}

export default CityIO;

/*


class UserTableAutonomous extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      users: []
    };
  }

  render() {
    return (
      <div>
        <BootstrapTable
          data={this.state.users}
          trClassName={rowClassNameFormat}
        >
          <TableHeaderColumn isKey dataField="id"></TableHeaderColumn>
          <TableHeaderColumn dataField="name"></TableHeaderColumn>
          <TableHeaderColumn dataField="username"></TableHeaderColumn>
        </BootstrapTable>
        <p>{this.state.isFetching ? "Fetching users..." : ""}</p>
      </div>
    );
  }

  componentDidMount() {
    this.fetchUsers();
    this.timer = setInterval(() => this.fetchUsers(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }

  async fetchUsersAsync() {
    try {
      this.setState({ ...this.state, isFetching: true });
      const response = await axios.get(USER_SERVICE_URL);
      this.setState({ users: response.data, isFetching: false });
    } catch (e) {
      console.log(e);
      this.setState({ ...this.state, isFetching: false });
    }
  }

  fetchUsers = this.fetchUsersAsync;
}

export default UserTableAutonomous;


class CityIO extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityIOmeta: null,
      isLoading: false,
      error: null
    };
  }
  getCityIOMeta() {
    this.setState({ isLoading: true });
    axios
      .get(API)
      .then(result =>
        this.setState({
          cityIOmeta: result,
          isLoading: false
        })
      )
      .catch(error =>
        this.setState({
          error,
          isLoading: false
        })
      );
  }
}
export default CityIO;
*/
