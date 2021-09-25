const Attributes = {
    Development: {
        Mapping: [
            ["__DEV__", true]
        ]
    },
    Production: {
        Mapping: [
            ["__DEV__", false]
        ]
    }
};

const Development = () => {
    Attributes.Development.Mapping.forEach(
        (Element, Index) => {
            const Key = Element[0];
            const Value = Element[1];

            global[Key] = Value;
        }
    )
};

export const Production = () => {
    Attributes.Development.Mapping.forEach(
        (Element, Index) => {
            const Key = Element[0];
            const Value = Element[1];

            global[Key] = Value;
        }
    )
};

export default Development;
