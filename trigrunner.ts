import { Trigger } from './trigger.interface';

let dir: string = './triggers'
let triggerNames: string[] = ['foo', 'bar']

async function importTriggers() {
    let triggers: Trigger[] = [];
    for (let t of triggerNames) {
        let tPath: string = dir + '/' + t;
        let trigger = await import(tPath);
        triggers.push(trigger.default);
    }
    return triggers;
}

importTriggers().then((trigs: Trigger[]) => {
        trigs.forEach((t: Trigger) => {
            console.log(t.name());
        })
    }
);
