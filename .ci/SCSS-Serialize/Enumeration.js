function * Enumeration(_, initial = 0) {
    let $;

    $ = initial;

    for (const i of _) yield [$++, i]
}

const initialize = (array) => {
    const Mapping = {};

    for (const [i, idx] of Enumeration(array)) {
        Mapping[i] = idx;
    }

    return Mapping;
}

export default {
    Enumeration, initialize
}
