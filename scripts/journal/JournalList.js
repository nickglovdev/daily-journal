import { getEntries, useEntries, deleteEntries } from "./JournalProvider.js"
import { journal } from "./Journal.js"

const contentTarget = document.querySelector("#entryLog")
const eventHub = document.querySelector(".container")

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteEntrie--")) {
        const [prefix, entriesId] = clickEvent.target.id.split("--")
        deleteEntries(entriesId)
    }
})

let visibility = false

eventHub.addEventListener("entriesStateChanged", customEvent => {
    render()
})

eventHub.addEventListener("allEntriesClicked", customEvent => {
    visibility = !visibility

    if (visibility) {
        contentTarget.classList.remove("invisible")
    }
    else {
        contentTarget.classList.add("invisible")
    }
})

const render = () => {
    if (visibility) {
        contentTarget.classList.remove("invisible")
    }
    else {
        contentTarget.classList.add("invisible")
    }
    getEntries().then(() => {
        const allTheEntries = useEntries()

        contentTarget.innerHTML = allTheEntries.map(
            currentEntryObject => {
                return journal(currentEntryObject)
            }
        ).join("")
    })
}

export const JournalList = () => {
    render()
}