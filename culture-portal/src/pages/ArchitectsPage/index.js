import React from 'react';

import SearchComponent from '../../components/SeacrhComponent/index';
import ListOfArchitectsComponent from '../../components/ListOfArchitectsComponent/index';
import ArchitectsAPI from '../../ArchitectsAPI';

class AllArchitects extends React.Component {
  state = {
    filtered: ArchitectsAPI.all()
  };

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  onChange = e => {
   const currentList = ArchitectsAPI.all();

    if (e !== '') {
      this.setState({
        filtered: currentList.filter(obj => {
          const currentLanguage = localStorage.getItem('language');
          let keyForSearch;
          if (currentLanguage === 'en') {
            keyForSearch = 'searchKeyEn';
          } else if (currentLanguage === 'ru') {
            keyForSearch = 'searchKeyRu';
          } else if (currentLanguage === 'by') {
            keyForSearch = 'searchKeyBy';
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

  render() {
    const { filtered } = this.state;
    if (filtered.length === 0) {
      return (
        <div>
          <SearchComponent onChange={this.onChange} />
          <div className="container no-results">No matches found</div>
        </div>
      );
    }
    return (
      <div>
        <SearchComponent onChange={this.onChange} />
        <ListOfArchitectsComponent authors={filtered} />
      </div>
    );
  }
}

export default AllArchitects;
