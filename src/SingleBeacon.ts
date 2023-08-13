import Beacon from "./Beacon";

export default class SingleBeacon extends Beacon {

    private value?: Object = null;

    constructor(builder: () => Object) {
        super(builder)
    }

    create(): Object {
        if (this.value == null) this.value = super.create()
        return this.value!
    }
}