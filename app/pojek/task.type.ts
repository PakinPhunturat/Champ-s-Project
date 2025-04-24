export default interface taskType {
    [x: string]: ReactNode;
    id: number,
    title: string,
    description: string,
    finish: boolean,
    duaDate: string,
    priority: boolean,
} 