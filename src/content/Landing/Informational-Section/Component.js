function createArrayFromPhrase(phrase) {
    const splitPhrase = phrase.split(" ");
    const thirdWord = splitPhrase.pop();
    return [
        splitPhrase.join(" "),
        thirdWord
    ];
}

const InfoSection = (props) => (
    <section className={"bx--row" + " " + props.className + " " + "info-section"}>
        <div className="bx--col">
            <h3 className="info-section__heading">
                { props.heading }
            </h3>
        </div>
        { props.children }
    </section>
);

const InfoCard = (props) => {
    const splitHeading = createArrayFromPhrase(props.heading);

    return (
        <div className="info-card bx--col">
            <h4 className="info-card__heading">
                { String(splitHeading[0]) + " "}
                <strong>
                    { splitHeading[1] }
                </strong>
            </h4>
            <p className="info-card__body">
                { props.body }
            </p>
            { props.icon }
        </div>
    );
};

const Exports = {
    Section: InfoSection,
    Card: InfoCard
};

export default Exports;
