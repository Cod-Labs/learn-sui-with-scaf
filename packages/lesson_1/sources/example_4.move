module lesson_1::example_4 {

    use sui::object::{Self, UID};
    use sui::transfer;
    use sui::tx_context::{Self, TxContext};

    struct Sword has key {
        id: UID,
        attack: u64
    }

    fun init(ctx: &mut TxContext) {
        let sword = Sword {
            id: object::new(ctx),
            attack: 5,
        };
        transfer::transfer(sword, tx_context::sender(ctx))
    }

    public fun get_attack(sword: &Sword): u64 {
        sword.attack
    }
}
