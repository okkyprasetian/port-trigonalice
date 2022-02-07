function Download({ name }) {

    // Function
    const alert = name => {
        window.alert(`Thanks for download our ${name}`)
    }

    return (
        <button className="download" onClick={() => alert(name)}>
            Download
        </button>
    );
}

export default Download;