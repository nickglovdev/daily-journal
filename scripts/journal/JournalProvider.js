let entries = []

const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const entriesStateChangedEvent = new CustomEvent("entriesStateChanged")

    eventHub.dispatchEvent(entriesStateChangedEvent)
}

const getEntries = () => {
    return fetch('http://localhost:3000/entries')
        .then(response => response.json())
        .then(parsedEntries => {
            entries = parsedEntries
        })

}

export const saveEntries = entrie => {
    return fetch('http://localhost:3000/entries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entrie)
    })
    .then(getEntries)
    .then(dispatchStateChangeEvent)
}