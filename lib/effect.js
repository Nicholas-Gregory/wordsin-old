import roll from './roll'

export default class Effect {
    constructor(keyword, ceil) {
        this.keyword = keyword;
        this.ceil = ceil;
    }

    affect(...mods) {
        return {
            keyword: this.keyword,
            result: roll(this.ceil, ...mods)
        }
    }
}