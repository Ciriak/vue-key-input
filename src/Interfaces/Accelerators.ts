export default interface IAccelerators {
    [key: string]: boolean
    command: boolean,
    control: boolean,
    alt: boolean,
    option: boolean,
    altGr: boolean,
    shift: boolean,
    super: boolean
}