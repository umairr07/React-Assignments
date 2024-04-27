let ListComponent = () => {
    return (
        <div style={{ border: "1px solid black", padding: "20px", margin: "auto", width: "750px" }}>
            <h1>Topics covered</h1>
            <p>The following is a list of all the topics we cover in the MDN learning area.</p>

            <a href="#" style={{ color: "skyblue", fontWeight: "bold" }}>Getting started with the web</a>
            <ul>
                <li style={{ listStyle: "none" }}>Provides a practical introduction to web development for complete beginners</li>
            </ul>

            <a href="#" style={{ color: "skyblue", fontWeight: "bold" }}>HTML -- Structuring the web</a>
            <ul>
                <li style={{ listStyle: "none" }}>HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.</li>
            </ul>

            <a href="#" style={{ color: "skyblue", fontWeight: "bold" }}>CSS-Styling the web</a>
            <ul>
                <li style={{ listStyle: "none" }}>CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.</li>
            </ul>
        </div>
    )
}

ReactDOM.render(<ListComponent />, document.getElementById("root"))