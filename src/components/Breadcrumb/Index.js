import Awaitable from "./Awaitable";

import { default as Component, Skeleton, Strict } from "./Component";

export const Placeholder = ({Properties}) => (<Skeleton {...Properties}/>);

export const Simulation = ({Properties, $}) => (<Awaitable {...Properties} Target={$}/>);

export default Strict;

