
// Должно быть заменено на импорт из JSON, это пример реализации.
// Здесь описываем всю структуру работы с JSON. Понадобились какие-то
// данные из JSON - пишем функцию если ее нет здесь, затем 
// имортируем и используем в своем компоненте.
const ArchitectsAPI = {
    architects: [
        { number: 1, name: "odin" },
        { number: 2, name: "two" },
        { number: 3, name: "three" },
        { number: 4, name: "four" },
        { number: 5, name: "five" },
        { number: 6, name: "six" },
    ],
    all: function () { return this.architects },
    get: function (id) {
        const isArchitect = p => p.number === id
        return this.architects.find(isArchitect);
    }
}

export default ArchitectsAPI;