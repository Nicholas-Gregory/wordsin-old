import roll from './roll'

export default class Effect {
    constructor(effects, ceil = null, time = null) {
        this.effects = effects;
        this.ceil = ceil;
        this.time = time;
    }

    affect(...mods) {
        return roll(this.ceil, ...mods);
    }

    combine(effect, ceilFunc, timeFunc) {
        return new Effect(
            [
                ...this.effects,
                ...effect.effects,
            ],
            ceilFunc(this.ceil, effect.ceil),
            timeFunc(this.time, effect.time)
        );
    }
}