
import { saveEntries } from "./JournalProvider.js"
import { DisplayEntriesButton } from "./DisplayJournalButton.js"

const contentTarget = document.querySelector(".form__container")
const eventHub = document.querySelector('.container')



// Handle browser-generated click event in component
contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveEntries") {

        const journalDate = document.querySelector("#journalDate").value
        const journalConcept = document.querySelector("#journalConcept").value
        const journalEntry = document.querySelector("#journalEntry").value
        const journalOptions = document.querySelector("#journalOptions").value
        
        

        // Make a new object representation of a journal
        const newEntrie = {
            date: journalDate,
            concept: journalConcept,
            entry: journalEntry,
            mood: journalOptions
        }
        
        // Change API state and application state
        saveEntries(newEntrie)
            
    }
})

const render = () => {
    contentTarget.innerHTML = `
        <h1>Daily Journal</h1>
        <form action="" class="journal">
            <fieldset class="journal__field">
                <label for="journalDate">Date of entry</label>
                <input type="date" name="journalDate" id="journalDate">
            </fieldset>

            <fieldset class="journal__field">
                <label for="journalConcept">Concepts covered</label>
                <input type="text" name="journalConcept" id="journalConcept">
            </fieldset>

            <fieldset class="journal__field">
                <label for="journalEntry">Journal Entry</label>
                <textarea name="journalEntry" id="journalEntry" cols="30" rows="4"></textarea>
            </fieldset>
            
            <fieldset class="journal__field">
                <label for="journalOptions">Mood for the day</label>
                <select name="journalOptions" id="journalOptions">
                    <option value="Ok">Ok</option>
                    <option value="happy">Happy</option>
                    <option value="mad">Mad</option>
                    <option value="groovy">Groovy</option>  
                </select>
            </fieldset>
        </form>
        <button id="saveEntries">Save Entrie</button>
        ${DisplayEntriesButton()}
    `
}

const JournalForm = () => {
    render()
}

export default JournalForm