import React from "react";
import { Link } from "react-router-dom";
import SearchComponent from "../../components/SeacrhComponent/index";

import ListOfArchitectsComponent from "../../components/ListOfArchitectsComponent/index";

import ArchitectsAPI from "../../ArchitectsAPI";

class AllArchitects extends React.Component {
  state = {
    filtered: ArchitectsAPI.all()
  };
  onChange = e => {
    let currentList = ArchitectsAPI.all();
    let newList;
    if (e !== "") {
      newList = currentList.filter(obj => {
        return Object.keys(obj).some(k => {
          return (
            obj[k]
              .toString()
              .toLowerCase()
              .indexOf(e) !== -1
          );
        });
      });
    } else {
      newList = ArchitectsAPI.all();
    }
    this.setState({
      filtered: newList
    });
  };
  render() {
    return (
      <div>
        <SearchComponent onChange={this.onChange} />
        <ul>
          {this.state.filtered.map((p, index) => (
            <li key={index}>
              <Link to={`/architects/`}>{p.name}</Link>
            </li>
          ))}
        </ul>
        <ListOfArchitectsComponent
          authors={this.state.filtered}
          className="row"
        />
      </div>
    );
  }
}

export default AllArchitects;
