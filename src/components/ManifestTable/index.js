import React from 'react'
import Table_td from './Table_td';

const ManifestTable = ({name, launch_date, landing_date, max_date, max_sol, status, total_photos}) => {
    return (
        <>
            <table>
                <caption>Mission Manifest</caption>
                <thead>
                    <tr> 
                        <th colSpan="2">{name.length > 0 && name}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <Table_td payload={`The Rover's launch date from Earth`}/>
                        <Table_td payload={launch_date}/>
                    </tr>
                    <tr>
                        <Table_td payload={`The Rover's landing date on Mars`}/>
                        <Table_td payload={landing_date}/>
                    </tr>
                    <tr>
                        <Table_td payload={`The most recent Earth date from which photos exist`}/>
                        <Table_td payload={max_date}/>
                    </tr>
                    <tr>
                        <Table_td payload={'The most recent Martian sol from which photos exist'}/>
                        <Table_td payload={max_sol}/>
                    </tr>
                    <tr>
                        <Table_td payload={`The Rover's mission status`}/>
                        <Table_td payload={status}/>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <Table_td payload={`Number of photos taken by that Rover`}/>
                        <Table_td payload={total_photos}/>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}
export default ManifestTable;
