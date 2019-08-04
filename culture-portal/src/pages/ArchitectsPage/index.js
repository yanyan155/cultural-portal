import React from "react";

import SearchComponent from "../../components/SeacrhComponent/index";
import ListOfArchitectsComponent from "../../components/ListOfArchitectsComponent/index";
import ArchitectsAPI from "../../ArchitectsAPI";

class AllArchitects extends React.Component {
  state = {
    filtered: ArchitectsAPI.all()
  };

  onChange = e => {
    let currentList = ArchitectsAPI.all();
    console.log(this.props);

    if (e !== "") {
      this.setState({
        filtered: currentList.filter(obj => {
          let currentLanguage = localStorage.getItem("language");
          let keyForSearch;
          if (currentLanguage === "en") {
            keyForSearch = "searchKeyEn";
          } else if (currentLanguage === "ru") {
            keyForSearch = "searchKeyRu";
          } else if (currentLanguage === "by") {
            keyForSearch = "searchKeyBy";
          }

          return (
            obj[keyForSearch]
              .toString()
              .toLowerCase()
              .indexOf(e.toLowerCase()) !== -1
          );
        })
      });
    } else {
      this.setState({ filtered: ArchitectsAPI.all() });
    }
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
