import Header from "../Header/Header";
import SuggestionsAdd from "../SuggestionsAdd/SuggestionsAdd";



function Suggestions() {

    const countries = [
        {
            AddBtn: "112",
            h3: "Add tags for solutions",
            p: "Easier to search for solutions based on a specific stack.",
            button: "Enhancement",
            span: "2"
        },
        {
            AddBtn: "99",
            h3: "Add a dark theme option",
            p: "It would help people with light sensitivities and who prefer dark mode.",
            button: "Feature",
            span: "4"
        },
        {
            AddBtn: "65",
            h3: "Q&A within the challenge hubs",
            p: "Challenge-specific Q&A would make for easy reference.",
            button: "Feature",
            span: "1"
        },
        {
            AddBtn: "51",
            h3: "Allow image/video upload to feedback",
            p: "Images and screencasts can enhance comments on solutions.",
            button: "Enhancement",
            span: "2"
        },
        {
            AddBtn: "42",
            h3: "Ability to follow others",
            p: "Stay updated on comments and solutions other people post.",
            button: "Feature",
            span: "3"
        },
        {
            AddBtn: "3",
            h3: "Preview images not loading",
            p: "Challenge preview images are missing when you apply a filter.",
            button: "Bug",
            span: "0"
        },
    ]

    return <>
        <Header />
        {
            countries.map(country => <Suggestions AddBtn={country.AddBtn} h3={country.h3} p={country.p} button={country.button} span={country.span} />)
        }
    </>
}

export default Suggestions