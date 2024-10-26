import styled from 'styled-components'
import {theme} from '../../../../styles/Theme'
import {StyledTitle} from '../StyledTitle'
import {Card} from '../card.tsx/Card'

const EducationData = [
    {
        id: 'education6',
        title: 'Student',
        time: 'Full Time',
        office: 'it-incubator "Front-end разработчиком уровня Middle+”',
        location: 'Belarus',
        calendar: 'March 2023 - ',
    },
    {
        id: 'education5',
        title: 'Student',
        time: 'Full Time',
        office: 'RS School "JavaScript / Front-end Course”',
        location: 'Belarus',
        calendar: 'Feb 2023 - ',
    },
    {
        id: 'education4',
        title: 'Student',
        time: 'Full Time',
        office: 'SkillBox “JavaScript-Framework React.js”',
        location: 'Belarus',
        calendar: 'Feb 2023 - May 2023',
    },
    {
        id: 'education3',
        title: 'Student',
        time: 'Full Time',
        office: 'My-IT-School “Front End web development from scratch”',
        location: 'Belarus',
        calendar: 'Oct 2020 - Mar 2021',
    },
    {
        id: 'education2',
        title: 'Student',
        time: 'Full Time',
        office: 'Belarusian National Technical University”',
        location: 'Belarus',
        calendar: '2016 - 2021',
    },
    {
        id: 'education1',
        title: 'Student',
        time: 'Full Time',
        office:
            'Educational institution "Belarusian State University of Informatics and Radioelectronics" branch "Minsk Radio Engineering College"',
        location: 'Belarus',
        calendar: '2012 - 2016',
    },
]

export default function Education() {
    return (
        <StyledEducation>
            <StyledTitle>Education</StyledTitle>
            {EducationData.map(education => (
                <Card
                    key = {education.id}
                    title = {education.title}
                    time = {education.time}
                    office = {education.office}
                    location = {education.location}
                    calendar = {education.calendar}
                />
            ))}
        </StyledEducation>
    )
}

const StyledEducation = styled.div`
    max-width: 704px;
    margin-bottom: 38px;
    @media ${theme.media.tablet} {
        margin-bottom: 25px;
        max-width: 100%;
    }
`
