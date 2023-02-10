import React from 'react';
import "./TopStudents.css";
const TopStudents = () => {
    return (
        <div className='top-students-section bg-white rounded-md'>
            <h3 className="p-5 text-left text-2xl font-bold">Top Students</h3>
            <div className="top-student-list px-5">
            <div className="overflow-x-auto">
  <table className="table top-student-list table-compact w-full nth-child(2):text-left">
    <thead>
      <tr>
        <th>Id</th> 
        <th>Name</th> 
        <th>Marks</th> 
        <th>Percentage</th> 
        <th>Year</th> 
      </tr>
    </thead> 
    <tbody className="text-left">
      <tr>
        <td>5454</td> 
        <td><img className="w-6 h-6 inline rounded-full mr-1" src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600" alt="John Smith" /> John Smith</td> 
        <td>1190</td> 
        <td>95%</td> 
        <td>2018</td> 
      </tr>
      <tr className='active'>
        <td>5482</td> 
        <td><img className="w-6 h-6 inline rounded-full mr-1" src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600" alt="John Smith" />Saidul Islam</td> 
        <td>1195</td> 
        <td>99.5%</td> 
        <td>2018</td> 
      </tr>
      <tr>
        <td>2568</td> 
        <td><img className="w-6 h-6 inline rounded-full mr-1" src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600" alt="John Smith" />Md Rohim</td> 
        <td>1116</td> 
        <td>93%</td> 
        <td>2018</td> 
      </tr>
      <tr className='active'>
        <td>2554</td> 
        <td><img className="w-6 h-6 inline rounded-full mr-1" src="https://images.pexels.com/photos/718261/pexels-photo-718261.jpeg?auto=compress&cs=tinysrgb&w=600" alt="John Smith" />Kaisar Uddin</td> 
        <td>1092</td> 
        <td>91%</td> 
        <td>2017</td> 
      </tr>
      <tr>
        <td>6065</td> 
        <td><img className="w-6 h-6 inline rounded-full mr-1" src="https://images.pexels.com/photos/1073097/pexels-photo-1073097.jpeg?auto=compress&cs=tinysrgb&w=600" alt="John Smith" />Mahfujur</td> 
        <td>1195</td> 
        <td>99.5%</td> 
        <td>2021</td> 
      </tr>
      <tr className='active'>
        <td>2548</td> 
        <td><img className="w-6 h-6 inline rounded-full mr-1" src="https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&w=600" alt="John Smith" />Md Yasin</td> 
        <td>1080</td> 
        <td>90%</td> 
        <td>2018</td> 
      </tr>
      <tr>
        <td>5624</td> 
        <td><img className="w-6 h-6 inline rounded-full mr-1" src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=600" alt="John Smith" />Md Harun</td> 
        <td>1056</td> 
        <td>88%</td> 
        <td>2018</td> 
      </tr>
      <tr className='active'>
        <td>8765</td> 
        <td><img className="w-6 h-6 inline rounded-full mr-1" src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600" alt="John Smith" />Rashedul Islam</td> 
        <td>1050</td> 
        <td>87.5%</td> 
        <td>2019</td> 
      </tr>
      <tr>
        <td>6521</td> 
        <td><img className="w-6 h-6 inline rounded-full mr-1" src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600" alt="John Smith" />Inam Hossain</td> 
        <td>1020</td> 
        <td>85%</td> 
        <td>2020</td> 
      </tr>
    </tbody> 
  </table>
</div>
            </div>
        </div>
    );
};

export default TopStudents;