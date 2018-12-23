/// <reference path="node_modules/sugar/sugar-extended.d.ts" />
declare module "*.json" {
    const value: any;
    export default value;
}
interface ZeplinSize  {
    height: number;
    width: number;
}
declare module "sugar"