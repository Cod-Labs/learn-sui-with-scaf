module lesson_1::example_2 {

    use sui::object::UID;

    struct Sword has key {
        id: UID,
        attack: u64
    }
}
