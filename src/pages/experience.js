import React from "react";
import "../styles/stepper.css";
import work from "../data/Work";
import leadershipRoles from "../data/LeadershipRoles";
import orgs from "../data/Organizations";
import awards from "../data/Awards";
import {
	ExperienceWrapper,
	WorkWrapper,
	EdWrapper,
	EdContent,
	Stepper,
	StepperHead,
	LogoLink,
	StepperDesc
} from "../styles/workStyle.js";
import Layout from "../components/layout";

const Experience = () => (
	<Layout>
		<ExperienceWrapper>
			<WorkWrapper>
				<h1>Work Experience</h1>
				<div className="experience-stepper">
					{work.map(item => (
						<div key={item.id} className="step">
							<div>
								<div className="circle" />
								<div className="line" />
							</div>
							<Stepper>
								<StepperHead>
									<div>
										<h3>{item.designation}</h3>
										<a
											href={item.companyLink}
											target="_blank"
										>
											{item.name}
										</a>
										<p>{item.dated}</p>
									</div>
									<LogoLink href={item.companyLink}>
										<img
											src={item.logo}
											alt="company"
											width="175px"
										/>
									</LogoLink>
								</StepperHead>
								<StepperDesc
									dangerouslySetInnerHTML={{
										__html: item.description
									}}
								/>
							</Stepper>
						</div>
					))}
				</div>
			</WorkWrapper>

			<EdWrapper>
				<h1>Leadership Roles</h1>
				<EdContent>
					{leadershipRoles.map(item => (
						<div key={item.id}>
							<p>
								{item.title} · ({item.date}) <br/>
								{item.org} <br/>
								<i>{item.desc}</i>
							</p>
						</div>
					))}
				</EdContent>
				<h1>Awards</h1>
				<EdContent>
					{awards.map(item => (
						<div key={item.id}>
							<p>{item.name} · ({item.date})
							</p>
						</div>
					))}
				</EdContent>
				<h1>Organizations</h1>
				<EdContent>
					{orgs.map(item => (
						<div key={item.id}>
							<p>{item.name} · ({item.date})</p>
						</div>
					))}
				</EdContent>
			</EdWrapper>
		</ExperienceWrapper>
	</Layout>
);

export default Experience;
