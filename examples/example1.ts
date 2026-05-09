type EventRecord<T> = {
    [K in keyof T]: (props: T[K]) => void
}

class typeEmmiter<T extends Record<string, unknown>> {

    private events?: EventRecord<T> // ive problem

    on<K extends keyof T>(actionName: K, actionHandler: (props: T[K]) => void): void {
        if (this.events) {
            this.events[actionName] = actionHandler;
        }
    }

    emit<K extends keyof T>(actionName: K, regirestingData: T) {

    }
}

const eventt = {
    login: { username: "salam" }
}

type EventType = typeof eventt;


const te = new typeEmmiter<EventType>()

te.on("login", ({
    username
}) => {
    console.log(username)
})