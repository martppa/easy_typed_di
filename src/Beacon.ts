export default class Beacon {

    private builder: () => Object

    constructor(builder: () => Object) {
        this.builder = builder
    }

    create(): Object {
        return this.builder()
    }
}