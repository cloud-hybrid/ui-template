import * as API from "./Query";

const Refresh = async () => {
    console.debug("[DEBUG]", "Importing Event-Handler");
    const Query = () => API.AIO;
    console.debug("[DEBUG]", "Instantiating Query Object");
    const Handler = Query();
    console.debug("[DEBUG]", "Removing Session Cache");
    await Handler.Clear().then()
        .catch((error) => console.debug("[DEBUG]", "Error", error))
        .finally(
            () => console.debug("[DEBUG]", "Successfully Removed Session Cache")
        );
    location.reload();
};

export default Refresh;
