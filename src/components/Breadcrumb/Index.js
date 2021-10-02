import Awaitable from "./Awaitable";

import { default as Component, Skeleton } from "./Component";

export const Placeholder = ({Properties}) => (<Skeleton {...Properties}/>);

export const Simulation = ({Properties}) => (<Awaitable {...Properties}/>);

export default Component;

