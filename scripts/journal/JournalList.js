import { getEntries, useEntries } from "./JournalProvider.js"
import { journal } from "./Journal.js"

const contentTarget = document.querySelector("#entryLog")
const eventHub = document.querySelector(".container")

let visibility = false

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
    contentTarget.classList.add("invisible")
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