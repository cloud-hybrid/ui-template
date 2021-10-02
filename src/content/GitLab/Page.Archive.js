import { default as Table } from "./Awaitable";
import { default as Placeholder } from "./Skeleton";

const Page = () => {
    return (<Table />);
};

export const Skeleton = ({headers, rows}) => {
    return (<Placeholder Headers={headers} Rows={rows}/>);
}

export default Page;
