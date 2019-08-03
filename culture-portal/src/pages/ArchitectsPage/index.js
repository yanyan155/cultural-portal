import React from "react";

import SearchComponent from "../../components/SeacrhComponent/index";
import ListOfArchitectsComponent from "../../components/ListOfArchitectsComponent/index";
import ArchitectsAPI from "../../ArchitectsAPI";

class AllArchitects extends React.Component {
  state = {
    filtered: ArchitectsAPI.all(),
    newList: ""
  };
  onChange = e => {
    let currentList = ArchitectsAPI.all();

    if (e !== "") {
      this.setState({
        newList: currentList.filter(obj => {
          let currentLanguage;
          if (obj.lng === "en") {
            currentLanguage = "searchKeyEn";
          } else if (obj.lng === "ru") {
            currentLanguage = "searchKeyRu";
          } else if (obj.lng === "by") {
            currentLanguage = "searchKeyBy";
          }

          return (
            obj[currentLanguage]
              .toString()
              .toLowerCase()
              .indexOf(e) !== -1
          );
        })
      });
    } else {
      this.setState({ newList: ArchitectsAPI.all() });
    }
    this.setState({
      filtered: this.state.newList
    });
  };

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    if (this.state.filtered.length === 0) {
      return (
        <div>
          <SearchComponent onChange={this.onChange} />
          <div className="container">No matches found</div>
        </div>
      );
    }
    return (
      <div>
        <SearchComponent onChange={this.onChange} />
        <ListOfArchitectsComponent authors={this.state.filtered} />
      </div>
    );
  }
}

export default AllArchitects;
