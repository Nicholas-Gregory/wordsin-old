class Equipment {
    constructor(modifiers, enchantments) {
        this.modifiers = modifiers;
        this.enchantments = enchantments;
    }

    addEnchantment(enchantment) {
        this.enchantments.push(enchantment);

        // TODO change modifiers
    }
}