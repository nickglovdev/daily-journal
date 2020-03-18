const contentTarget = document.querySelector(".entries__button")
const eventHub = document.querySelector(".container")


contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showAllEntries") {
        // Create a custom event to tell any interested component that the user wants to see entries
        const allEntriesEvent = new CustomEvent("allEntriesClicked")

        // Dispatch it to event hub
        eventHub.dispatchEvent(allEntriesEvent)
    }
})

export const DisplayEntriesButton = () => {
    contentTarget.innerHTML = "<button id='showAllEntries'>Journal Entries</button>"
}