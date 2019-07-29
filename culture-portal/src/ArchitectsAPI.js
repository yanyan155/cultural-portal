// Должно быть заменено на импорт из JSON, это пример реализации.
// Здесь описываем всю структуру работы с JSON. Понадобились какие-то
// данные из JSON - пишем функцию если ее нет здесь, затем
// имортируем и используем в своем компоненте.

const ArchitectsAPI = {
  architects: require("./en").frontmatter.authors,
  all: function() {
    return this.architects;
  },
  get: function(id) {
    const isArchitect = p => p.id === id;
    return this.architects.find(isArchitect);
  }
};

export default ArchitectsAPI;
