import { GoCloudDownload } from 'react-icons/go'

function Download({ name }) {

    // Function
    const alert = name => {
        window.alert(`Thanks for download our ${name}`)
    }

    return (
        <button className="download" onClick={() => alert(name)}>
            <GoCloudDownload /> <span className='download-p'>Download</span>
        </button>
    );
}

export default Download;