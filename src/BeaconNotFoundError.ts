export default class BeaconNotFoundError extends Error {

    constructor(identifier: String) {
        super(`No definition found for ${identifier}`)
    }
}