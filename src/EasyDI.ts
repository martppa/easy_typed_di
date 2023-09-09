import Beacon from "./Beacon";
import SingleBeacon from "./SingleBeacon";
import BeaconNotFoundError from "./BeaconNotFoundError";

globalThis.beacons = new Map<String, Beacon>()

function register<T>(
    name: String,
    creator: () => T,
    singleton: Boolean = false,
) {
    globalThis.beacons.set(name, buildBeacon(creator, singleton))
}

function inject<T>(name: String): T {
    const beacon = globalThis.beacons.get(name)
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