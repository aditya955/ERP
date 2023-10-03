import './style.scss'
import React from 'react'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import UserCard from '../../components/usercard/UserCard'
import Container from '../../components/container/Container'
import DataContainer from '../../components/datacontainer/DataContainer'
import AttendanceGauge from '../../components/attendanceGauge/AttendanceGauge'

const Home = () => {
	const props = {
		name: 'John Doe',
		rollNo: 1,
		ID: 100100101,
		course: 'CSE',
		sem: '7th Semester',
		acadYear: 2023,
		acadTerm: '2023Odd',
		dept: 'CSE',
		year: 3,
		regNo: '6',
		email: "test@clg.edu.in",
		wifiUsername: 'test',
		wifiPassword: 'test',
		readmissionStatus: "Yes",
		section: "A",
		present: 80,
		absent: 20,
		total: 100,
		academicSession: "2023-24"
	}
	const suffix = (props.year == 1) ? "st" : (props.year == 2) ? "nd" : (props.year == 3) ? "rd" : "th"
	return (
		<div className='home'>
			<Sidebar />
			<Header />
			<Container className="container">
				<h1>Hello, {props.name} </h1>
				<div className="row1">
					<div className="user-card">
						<UserCard name={props.name} year={props.year} course={props.course} />
					</div>
					<div className="student-info">
						<DataContainer title="Student's Details">
							{/* <Details /> */}
							<div className='user-data'>
								<h3> Name: {props.name} </h3>
								<p> <b>Roll No</b>: {props.rollNo} </p>
								<p> <b>Email</b>: {props.email} </p>
								<p> <b>Year</b>: {props.year}{suffix} year </p>
								<p> <b>Registration Number</b>: {props.regNo} </p>
							</div>
						</DataContainer>
						<DataContainer title={"Academic Details"}>
							<div className="other-user-data">
								<p> <b>ID No</b>: {props.ID} </p>
								<p> <b>Course</b>: {props.course} </p>
								<p> <b>Sem</b>: {props.sem} </p>
								<p> <b>Department</b>: {props.dept} </p>
								<p> <b>Acad Year</b>: {props.acadYear} </p>
								<p> <b>Acad Term</b>: {props.acadTerm} </p>
							</div>
						</DataContainer>
						<DataContainer title={"Wi-Fi Details"}>
							<h3> Wi-Fi Login Detail </h3> <br />
							<p> <b>Username</b>: {props.wifiUsername} </p>
							<p> <b>Password</b>: {props.wifiPassword} </p>
						</DataContainer>
					</div>
				</div>
				<div className="row2">
					<DataContainer title="Attendance">
						<AttendanceGauge present={props.present} absent={props.absent} total={props.total} title={""} />
					</DataContainer>
					<DataContainer title="Re-dmission Status">
						<div className="readmission-status">
							<h3> Academic Session: {props.academicSession} </h3>
							<h3> Year: {props.year}{suffix} year </h3>
							<h3> Re-admission Status: <span style={(props.readmissionStatus.toLowerCase() == "yes") ? { color: "green" } : { color: "red" }}>{props.readmissionStatus}</span> </h3>
							<h3> Section / Roll No. : {props.section} / {props.rollNo} </h3>
						</div>
					</DataContainer>
					<DataContainer title="Academic Marks (GPA)">
						<div className="marks-overview">
							<div className='marks-col1'>
								<h3> <b> SEM I</b>: 9.5 </h3>
								<h3> <b> SEM II</b>: 9.3 </h3>
								<h3> <b> SEM III</b>: 9.75 </h3>
							</div>
							<div className='marks-col2'>
								<h3> <b> SEM IV</b>: 9.5 </h3>
								<h3> <b> SEM V</b>: 9.3 </h3>
								<h3> <b> SEM VI</b>: 9.75 </h3>
							</div>
						</div>
					</DataContainer>
				</div>
			</Container >
		</div >
	)
}

export default Home