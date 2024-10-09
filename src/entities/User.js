import assignId from "@/utils/assignId.js";

export default class {
    constructor(name = 'unknown') {
        this._id = assignId();
        this._name = name;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }
}
