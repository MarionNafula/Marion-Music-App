import '../css/Table.css'


function Table() {
    

    
    return(
        <>
        <table className="table container">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Song Name</th>
                    <th scope="col">Artist Name</th>
                    <th scope="col">Single/Album</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Action</th>

                    </tr>
                </thead>
                <tbody>
                    





                   
                    <tr>
                    <th scope="row">1</th>
                    <td>Hold on</td>
                    <td>The Internet</td>
                    <td>Hive Mind</td>
                    <td>R&B</td>
                    <td>
                        <button className="btn">Update</button>
                        <button className="btn">Delete</button>
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Green Eyes</td>
                    <td>Erykah Badu</td>
                    <td>Mama's Gun</td>
                    <td>Soul</td>
                    <td>
                        <button className="btn">Update</button>
                        <button className="btn">Delete</button>
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Stay Tru</td>
                    <td>Mereba</td>
                    <td>The jungle is the only way out</td>
                    <td>Soul</td>
                    <td>
                        <button className="btn">Update</button>
                        <button className="btn">Delete</button>
                    </td>
                    </tr>
                </tbody>
        </table>
        </>
    )
}
export default Table