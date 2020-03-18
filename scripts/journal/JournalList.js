import { getEntries, useEntries } from "./JournalProvider.js"
import { journal } from "./Journal.js"

const contentTarget = document.querySelector("#entryLog")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("allEntriesClicked", customEvent => {
    render()
})

const render = () => {
    getEntries().then(() => {
        const allTheEntries = useEntries()
        debugger

        contentTarget.innerHTML = allTheEntries.map(
            currentEntryObject => {
                return journal(currentEntryObject)
            }
        ).join("")
    })
}