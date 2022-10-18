import React from 'react';

const About = () => {
    return (
        <div className="recent--patients">
        <div className="title">
            <h2 className="section--title">Recent Patients</h2>
            <button className="add"><i className="ri-add-line"></i>Add Doctor</button>
        </div>
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date in</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Status</th>
                        <th>Settings</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Cameron Williamson</td>
                        <td>30/07/2022</td>
                        <td>Male</td>
                        <td>61kg</td>
                        <td className="pending">pending</td>
                        <td><span><i className="ri-edit-line edit"></i><i className="ri-delete-bin-line delete"></i></span></td>
                    </tr>
                    <tr>
                        <td>George Washington</td>
                        <td>30/07/2022</td>
                        <td>Male</td>
                        <td>54kg</td>
                        <td className="confirmed">Confirmed</td>
                        <td><span><i className="ri-edit-line edit"></i><i className="ri-delete-bin-line delete"></i></span></td>
                    </tr>
                    <tr>
                        <td>John Adams</td>
                        <td>29/07/2022</td>
                        <td>Male</td>
                        <td>56kg</td>
                        <td className="confirmed">Confirmed</td>
                        <td><span><i className="ri-edit-line edit"></i><i className="ri-delete-bin-line delete"></i></span></td>
                    </tr>
                    <tr>
                        <td>Thomas Jefferson</td>
                        <td>29/07/2022</td>
                        <td>Male</td>
                        <td>11kg</td>
                        <td className="rejected">Rejected</td>
                        <td><span><i className="ri-edit-line edit"></i><i className="ri-delete-bin-line delete"></i></span></td>
                    </tr>
                    <tr>
                        <td>James Madison</td>
                        <td>29/07/2022</td>
                        <td>Male</td>
                        <td>69kg</td>
                        <td className="confirmed">Confirmed</td>
                        <td><span><i className="ri-edit-line edit"></i><i className="ri-delete-bin-line delete"></i></span></td>
                    </tr>
                    <tr>
                        <td>Andrew Jackson</td>
                        <td>28/07/2022</td>
                        <td>Male</td>
                        <td>88kg</td>
                        <td className="confirmed">Confirmed</td>
                        <td><span><i className="ri-edit-line edit"></i><i className="ri-delete-bin-line delete"></i></span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    );
};

export default About;