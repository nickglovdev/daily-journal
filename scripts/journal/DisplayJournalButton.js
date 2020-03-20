const eventHub = document.querySelector(".container")


eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showAllEntries") {
        // Create a custom event to tell any interested component that the user wants to see entries
        const allEntriesEvent = new CustomEvent("allEntriesClicked")

        // Dispatch it to event hub
        eventHub.dispatchEvent(allEntriesEvent)
    }
})

export const DisplayEntriesButton = () => {
    return "<button id='showAllEntries'>Show Journal Entries</button>"
}