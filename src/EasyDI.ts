import Beacon from "./Beacon";
import SingleBeacon from "./SingleBeacon";
import BeaconNotFoundError from "./BeaconNotFoundError";

const beacons = new Map<String, Beacon>()

function register<T>(
    name: String,
    creator: () => T,
    singleton: Boolean = false,
) {
    beacons.set(name, buildBeacon(creator, singleton))
}

function inject<T>(name: String): T {
    const beacon = beacons.get(name)
    if (beacon == null) throw new BeaconNotFoundError(name)
    return beacon.create() as T
}

function buildBeacon(creator: () => Object, singleton: Boolean): Beacon {
    if (singleton) {
        return new SingleBeacon(creator)
    } else {
        return new Beacon(creator)
    }
}

export { register, inject }