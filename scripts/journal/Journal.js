/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const journal = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <div>${entry.date}</div>
            <div>${entry.concept}</div>
            <div>${entry.entry}</div>
            <div>${entry.mood}</div>
        </section>
    `
}

