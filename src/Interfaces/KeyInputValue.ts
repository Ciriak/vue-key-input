import IAccelerators from "./Accelerators";

export default interface IKeyInputValue {
    /**
     * Represent the accelerators keys
     * 
     * You can have multiple accelerators enabled
     */
    accelerators: IAccelerators,
    /**
     * Represent the other keys active
     */
    keys: string[]
}