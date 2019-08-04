import ArchitectsData from './ArchitectsData';

const ArchitectsAPI = {
  architects: ArchitectsData.frontmatter.authors,
  all() {
    return this.architects;
  },
  get(name) {
    let author = null;
    this.architects.forEach(value => {
      if (value.path === name) {
        author = value;
      }
    });
    return author;
  },
  random() {
    return this.architects[Math.floor(Math.random() * this.architects.length)];
  }
};

export default ArchitectsAPI;
