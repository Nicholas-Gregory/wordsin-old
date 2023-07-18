class Equipment {
    constructor(modifiers, enchantments, type) {
        this.modifiers = modifiers;
        this.enchantments = enchantments;
        this.type = type;
    }

    addEnchantment(enchantment) {
        this.enchantments.push(enchantment);

        // TODO change modifiers
    }
}