import Header from "./components/ThirdPageHeader"
import Entry from "./components/ThirdPageEntry"
import data from "./data"
import './css/thirdpage.css';

export default function ThirdPage() {

    const entryElements = data.map((entry) => {
        return (
            <Entry
                key={entry.id}
                {...entry}
            />
        )
    })

    return (
        <>
            <Header />
            <main className="container">
                {entryElements}
            </main>
        </>
    )
}