import roll from './roll';
import { avg, weirdAvg } from './utils';

export default class Effect {
    constructor(keywords, ceil, time) {
        this.keywords = keywords;
        this.ceil = ceil;
        this.time = time;
    }

    affect(...mods) {
        return roll(this.ceil, ...mods);
    }

    combine(...effects) {
        const keywords = [...this.keywords];

        for (let effect of effects) {
            for (let keyword of effect.keywords) {
                keywords.push(keyword);
            }
        }

        return new Effect(
            [ ...keywords ],
            weirdAvg(this.ceil, ...effects.map(effect => effect.ceil)),
            avg(this.time, ...effects.map(effect => effect.time))
        );
    }
}

/*
    open door: 20 (blast & lockpick)

    blast 40
    lockpick 20

    *combined*
    blast lockpick 30
*/