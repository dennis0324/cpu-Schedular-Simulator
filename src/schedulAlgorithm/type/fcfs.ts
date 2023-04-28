import Process from "@/types/Process";
import { schedular} from "../CpuSchedular";

export default class fcfs extends schedular{

    private readyQueue:Process[]

    constructor(){
        super()
        this.readyQueue = []
    }

    protected override workingPCB: () => boolean = () => super.workingPCB != null || this.readyQueue.length > 0

    push(process:Process){
        this.onPush(process)
        this.readyQueue.push(process)
    }

    dispatch(): void {
        this.onDispatch(this.readyQueue.shift()!)
    }

    shouldDispatch(): boolean {
        return this.dispatchedPCB == null;
    }
}