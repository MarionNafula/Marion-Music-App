
import '../css/AddSongs.css'
function Form() {
    return (
        <>
        <div>
            <h1>Songs Suggestion Form</h1>
        </div>
        <form className="container">
            <div className="mb-3">
            <label htmlFor="song" className="form-label">Song Name</label>
            <input id="song" type="text" className="form-control" required />
            </div>
            <div className="mb-3">
            <label htmlFor="artist" className="form-label">Artist Name</label>
            <input id="artist" type="text" className="form-control" required />
            </div>
            <div className="mb-3">
            <label htmlFor="single-album" className="form-label">Single/Album</label>
            <input id="single-album" type="text" className="form-control" required />
            </div>
            <div className="mb-3">
            <label htmlFor="genre" className="form-label">Genre</label>
            <input id="genre" type="text" className="form-control" required />
            </div>
            <button className="button">Submit</button>
        </form>
        </>
    )
}
export default Form