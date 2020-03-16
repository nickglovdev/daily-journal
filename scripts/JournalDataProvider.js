/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data. Can't Touch This.
const journal = [
    {
        id: 1,
        date: "07/24/2025",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Ok"
    },
    {
        id: 2,
        date: "07/28/2025",
        concept: "HTML & CSS",
        entry: "Got angry at CSS becuase it didn't work the way I wanted it to.",
        mood: "Mad"
    },
    {
        id: 3,
        date: "07/30/2025",
        concept: "HTML & CSS",
        entry: "Figured our the JavaScript for dialong buttons, and feeling groovy.",
        mood: "Groovy"
    }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}