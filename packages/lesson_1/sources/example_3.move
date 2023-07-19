module lesson_1::example_3 {

    use sui::object::UID;

    struct Sword has key {
        id: UID,
        attack: u64
    }

    public fun get_attack(sword: &Sword): u64 {
        sword.attack
    }
}
