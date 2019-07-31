// Должно быть заменено на импорт из JSON, это пример реализации.
// Здесь описываем всю структуру работы с JSON. Понадобились какие-то
// данные из JSON - пишем функцию если ее нет здесь, затем
// имортируем и используем в своем компоненте.

const ArchitectsAPI = {
  architects: require("./ArchitectsData").frontmatter.authors,
  all: function () {
    return this.architects;
  },
  get: function (name) {
    let author = null;
    this.architects.map((value) => {
      if (value.path === name) {
        author = value;
      }
    });
    return author;
  }
};

export default ArchitectsAPI;
