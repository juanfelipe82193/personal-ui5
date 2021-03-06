import React from 'react'
import { useState, useRef } from "react";
import Media from "react-media";
import '@ui5/webcomponents-theme-base/dist/Assets.js';
import '@ui5/webcomponents/dist/generated/json-imports/Themes';
import '@ui5/webcomponents-fiori/dist/generated/json-imports/Themes';
import {
    Card,
    Avatar,
    List,
    StandardListItem,
    Timeline,
    TimelineItem,
    ShellBar,
    ValueState,
    ProgressIndicator,
    Title,
    TitleLevel,
    FlexBox,
    FlexBoxJustifyContent,
    FlexBoxWrap,
    Icon,
    Table,
    TableColumn,
    Label,
    TableRow,
    TableCell,
    Toast,
} from "@ui5/webcomponents-react"
import { RadarChart, BarChart } from "@ui5/webcomponents-react-charts";
import "@ui5/webcomponents-icons/dist/icons/person-placeholder.js"
import "@ui5/webcomponents-icons/dist/icons/business-card.js"
import "@ui5/webcomponents-icons/dist/icons/calendar.js"
import "@ui5/webcomponents-icons/dist/icons/approvals.js"
import "@ui5/webcomponents-icons/dist/icons/horizontal-bar-chart.js"
import "@ui5/webcomponents-icons/dist/icons/radar-chart.js"
import "@ui5/webcomponents-icons/dist/icons/sap-box.js"
import "@ui5/webcomponents-icons/dist/icons/factory.js"
import "@ui5/webcomponents-icons/dist/icons/email.js"
import "@ui5/webcomponents-icons/dist/icons/map.js"
import "@ui5/webcomponents-icons/dist/icons/search.js"
import "@ui5/webcomponents-icons/dist/icons/syntax.js"

import { spacing } from "@ui5/webcomponents-react-base"

export function MyPersonal() {
    const toast = useRef();
    const [toggleCharts, setToggleCharts] = useState("Chart");
    const [loading, setLoading] = useState(false);
    const handleHeaderClick = () => {
        // console.log('Header clicked');
        
        if (toggleCharts === "barChart") {
            setLoading(true);
            setTimeout(() => {
               setLoading(false);
               setToggleCharts("radarChart");
               
            }, 2000);
            setTimeout(() => {
                toast.current.show();
            }, 2000);
        } else {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setToggleCharts("barChart");
            }, 2000);
            setTimeout(() => {
                toast.current.show();
            }, 2000);
        }
    }
    const datasets = [{
        label: "Skill Level",
        data: [100, 60, 80, 80, 60, 90, 40, 50, 0]
    }];
    const labels = [
        "SAP HCM",
        "SAP MRS",
        "Software Testing",
        "SAP Implementation",
        "Scrum",
        "English",
        "Frontend Dev",
        "SAPUI5/SAP Fiori"
    ]
    // const switchToChart = toggleCharts === "barChart" ? "Bar Chart" : "Radar Chart"

    const sendRepo = function (e) {
        e.preventDefault();
        window.location.href='https://github.com/juanfelipe82193';
    }

    const sendMail = function () {
        var yourMessage = "Hello Juan I would like to contacto you for ...";
        var subject = "Contact";
        document.location.href = "mailto:juan19_93@hotmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(yourMessage);
    }
    return (<div>
         <ShellBar 
            logo = {'https://developers.sap.com/dam/application/shared/logos/sap-logo-svg.svg.adapt.svg/1493030643828.svg'}
            profile = {
                <Avatar 
                    icon = 'person-placeholder'
                    size = "XS"
                    shape = 'Circle'
                />
            }
            primaryTitle = 'My Personal UI5'
            secondaryTitle = 'Made up with SAPUI5'
            showNotifications = {true}
            notificationCount = '1'
            searchField = {
                <ui5-input placeholder="Enter search criteria ..."/>
            }
        />
        <FlexBox
            justifyContent = {FlexBoxJustifyContent.Center}
            wrap = {FlexBoxWrap.Wrap}
        >
            <Toast ref = {toast} duration = {'4000'}>
                Chart successfully changed
            </Toast>
            <Card 
                avatar={
                    <Avatar
                        image = 'https://media-exp1.licdn.com/dms/image/C4E03AQGmAknEsy8s1Q/profile-displayphoto-shrink_100_100/0?e=1599696000&v=beta&t=Z8LEiOCzqeNDKewlMokGHuIAxFqLbJBcnQhSdWuPZvk'  
                        size = "S"
                    />
                }
                heading = 'Juan Felipe Zorrilla'
                subheading = 'Senior SAP Consultant'
                style = {{ 
                    width: '500px', ...spacing.sapUiContentPadding
                }}
            >
                <List>
                    <StandardListItem 
                        description="LafargeHolcim"
                        icon = "factory"
                    >
                        Company
                    </StandardListItem>
                    <StandardListItem 
                        description="juan19_93@hotmail.com"
                        icon = "email"
                        onClick = {sendMail}
                    >
                        Email
                    </StandardListItem>
                    <StandardListItem 
                        description="Medellin, Colombia"
                        icon = "map"
                    >
                    Location
                    </StandardListItem>
                    <StandardListItem 
                        description="Click here to see my github repo"
                        icon = "syntax"
                        onClick = {sendRepo}
                    >
                        Github
                    </StandardListItem>
                </List>
            </Card>
            <Media queries = {{ mobile: "(max-width: 420px)" }}>
                {matches =>
                    matches.mobile ? (
                        <Card
                            heading = "Skills"
                            subheading = {`Click here to change chart`}
                            avatar = {
                                toggleCharts === "barChart" ? (
                                    <Icon name = { "radar-chart" }/>
                                ) : (
                                    <Icon name = { "horizontal-bar-chart" }/>
                                )
                            }
                            onHeaderClick = {handleHeaderClick}
                            headerInteractive = { Boolean('headerInteractive', true) }
                            style = {{
                                width: '340px', ...spacing.sapUiContentPadding
                            }}
                        >
                            {toggleCharts === "barChart" ? (
                                <RadarChart 
                                    datasets = {datasets}
                                    labels = {labels}
                                    loading = {loading}
                                    style = {{ width: '500px' }}
                                />
                            ) : (
                                <BarChart 
                                    datasets = {datasets}
                                    labels = {labels}
                                    loading = {loading}
                                    style = {{ width: '500px' }}
                                />
                            )
                            }
                        </Card>
                    ) : (
                        <Card
                            heading = "Skills"
                            subheading = {`Click here to change chart`}
                            avatar = {
                                toggleCharts === "barChart" ? (
                                    <Icon name = { "radar-chart" }/>
                                ) : (
                                    <Icon name = { "horizontal-bar-chart" }/>
                                )
                            }
                            onHeaderClick = {handleHeaderClick}
                            headerInteractive = { Boolean('headerInteractive', true) }
                            style = {{ 
                                width: '500px', ...spacing.sapUiContentPadding
                            }}
                        >
                            {toggleCharts === "barChart" ? (
                                <RadarChart 
                                    datasets = {datasets}
                                    labels = {labels}
                                    loading = {loading}
                                    style = {{ width: '500px' }}
                                />
                            ) : (
                                <BarChart 
                                    datasets = {datasets}
                                    labels = {labels}
                                    loading = {loading}
                                    style = {{ width: '500px' }}
                                />
                            )
                            }
                        </Card>
                    )
                }
            </Media>
            <Card
                style = {{ width: '610px', ...spacing.sapUiContentPadding }}
                heading = 'Job Experience'
                subheading = 'Timeline'
                avatar = {
                    <Icon
                        name = {"business-card"}
                    />
                }
            >
                <Timeline >
                    <TimelineItem 
                        icon = "calendar"
                        titleText = "Senior QAT SAP Payroll Specialist"
                        subtitleText = "Scotiabank | Jan 2020 to present | Bogota, CO"
                    >
                        <div>SAP Payroll testing support for Scotiabank Canada</div>
                    </TimelineItem>
                    <TimelineItem
                        icon = "calendar"
                        titleText = "SAP Functional Consultant"
                        subtitleText = "Deloitte | Oct 2018 to Jan 2020 | Bogota, CO"
                    >
                        <ul>
                            <li>Level 3 ticket support for the Deloitte global staffing Web and Mobile App (STAFFIT).</li>
                            <li>Requirement definition for new application releases (User Stories and Bugs), FUT and BCT follow up process.</li>
                            <li>Design and implementation of business solutions (Functional Specification development and Configuration)</li>
                            <li>Lead new member firm’s deployment projects of the STAFFIT Template (Wave 7, Wave 8 and Wave 9).</li>
                            <li>Leading the functional team for the new and enhanced Mobile application project (Developing new Functional Specifications and working together with Business 
                                Analysts, Developers and Designers)
                            </li>
                        </ul>
                    </TimelineItem>
                    <TimelineItem
                        icon = "calendar"
                        titleText = "Software Quality Assurance Tester"
                        subtitleText = "Deloitte | Nov 2017 to Oct 2018 | Bogota, CO"
                    >
                        <ul>
                            <li>
                                Developing and implementing Test Plans, running Integration Test Cycles (ITC), Regression or Functional Tests (FUT), 
                                Business Compliance Testing or User Acceptance Testing (BCT), Compatibility testing through Virtual Machines.
                            </li>
                            <li>HPE UFT Test Script automation, Data verification Front-end vs Back-end (SAP HR and MRS) and Mobile testing (iOS).</li>
                            <li>Tracking project task and progress by using VSTS by Microsoft Azure</li>
                        </ul>
                    </TimelineItem>
                </Timeline>
            </Card>
            <Media queries = {{ mobile: "(max-width: 420px)" }}>
                {matches =>
                    matches.mobile ? (
                        <Card
                            heading = 'Courses & Certifications'
                            subheading = 'List'
                            style = {{ width: "340px", ...spacing.sapUiContentPadding }}
                            avatar = {<Icon name = "approvals"/>}
                        >
                            <List>
                                <StandardListItem 
                                    info = 'Completed'
                                    infoState = {ValueState.Success} 
                                    style = {{ paddingTop: "50px", paddingBottom: "50px" }}
                                >
                                    <Title level = {TitleLevel.H5} wrap = {true}>SAP Fiori Overview - Design, Develop and Deploy</Title>
                                    <Title level = {TitleLevel.H6}>openSAP</Title>
                                    <ProgressIndicator 
                                        displayValue = "100%"
                                        percentValue = {100}
                                        width = '200px'
                                        state = {ValueState.Success} 
                                    />
                                </StandardListItem>
                                <StandardListItem 
                                    info = 'Completed' 
                                    infoState = {ValueState.Success} 
                                    style = {{ paddingTop: "50px", paddingBottom: "50px" }}
                                >
                                    <Title level = {TitleLevel.H5} wrap = {true}>Complete JavaScript Course 2020</Title>
                                    <Title level = {TitleLevel.H6}>Udemy | Issued Apr 2020</Title>
                                    <ProgressIndicator 
                                        displayValue = "100%"
                                        percentValue = {100}
                                        width = '200px'
                                        state = {ValueState.Success} 
                                    />
                                </StandardListItem>
                                <StandardListItem 
                                    info = 'Completed' 
                                    infoState = {ValueState.Success} 
                                    style = {{ paddingTop: "50px", paddingBottom: "50px" }}
                                >
                                    <Title level = {TitleLevel.H5} wrap = {true}>UI Development with SAPUI5</Title>
                                    <Title level = {TitleLevel.H6}>SAP | Issued Oct 2019</Title>
                                    <ProgressIndicator 
                                        displayValue = "100%"
                                        percentValue = {100}
                                        width = '200px'
                                        state = {ValueState.Success} 
                                    />
                                </StandardListItem>
                                <StandardListItem 
                                    info = 'Completed' 
                                    infoState = {ValueState.Success} 
                                    style = {{ paddingTop: "50px", paddingBottom: "50px" }}
                                >
                                    <Title level = {TitleLevel.H5} wrap = {true}>SAP User Experience Fundamentals</Title>
                                    <Title level = {TitleLevel.H6}>SAP | Issued Aug 2019</Title>
                                    <ProgressIndicator 
                                        displayValue = "100%"
                                        percentValue = {100}
                                        width = '200px'
                                        state = {ValueState.Success} 
                                    />
                                </StandardListItem>
                                <StandardListItem 
                                    info = 'Completed' 
                                    infoState = {ValueState.Success} 
                                    style = {{ paddingTop: "50px", paddingBottom: "50px" }}
                                >
                                    <Title level = {TitleLevel.H5} wrap = {true}>SAP HCM Functional Consultant Advanced Level</Title>
                                    <Title level = {TitleLevel.H6}>CVOSOFT | Issued Dec 2018</Title>
                                    <ProgressIndicator 
                                        displayValue = "100%"
                                        percentValue = {100}
                                        width = '200px'
                                        state = {ValueState.Success} 
                                    />
                                </StandardListItem>
                                <StandardListItem 
                                    info = 'Completed' 
                                    infoState = {ValueState.Success} 
                                    style = {{ paddingTop: "50px", paddingBottom: "50px" }}
                                >
                                    <Title level = {TitleLevel.H5} wrap = {true}>SAP HCM Functional Consultant Beginner Level</Title>
                                    <Title level = {TitleLevel.H6}>CVOSOFT | Issued Aug 2018</Title>
                                    <ProgressIndicator 
                                        displayValue = "100%"
                                        percentValue = {100}
                                        width = '200px'
                                        state = {ValueState.Success} 
                                    />
                                </StandardListItem>
                            </List>
                        </Card>
                    ) : (
                        <Card
                            heading = 'Courses & Certifications'
                            subheading = 'List'
                            style = {{ width: "600px", ...spacing.sapUiContentPadding }}
                            avatar = {<Icon name = "approvals"/>}
                        >
                            <List>
                                <StandardListItem 
                                    info = 'Completed' 
                                    infoState = {ValueState.Success} 
                                    style = {{ paddingTop: "50px", paddingBottom: "50px" }}
                                >
                                    <Title level = {TitleLevel.H5}>SAP Fiori Overview - Design, Develop and Deploy</Title>
                                    <Title level = {TitleLevel.H6}>openSAP</Title>
                                    <ProgressIndicator 
                                        displayValue = "100%"
                                        percentValue = {100}
                                        width = '400px'
                                        state = {ValueState.Success} 
                                    />
                                </StandardListItem>
                                <StandardListItem 
                                    info = 'Completed' 
                                    infoState = {ValueState.Success} 
                                    style = {{ paddingTop: "50px", paddingBottom: "50px" }}
                                >
                                    <Title level = {TitleLevel.H5}>Complete JavaScript Course 2020</Title>
                                    <Title level = {TitleLevel.H6}>Udemy | Issued Apr 2020</Title>
                                    <ProgressIndicator 
                                        displayValue = "100%"
                                        percentValue = {100}
                                        width = '400px'
                                        state = {ValueState.Success} 
                                    />
                                </StandardListItem>
                                <StandardListItem 
                                    info = 'Completed' 
                                    infoState = {ValueState.Success} 
                                    style = {{ paddingTop: "50px", paddingBottom: "50px" }}
                                >
                                    <Title level = {TitleLevel.H5}>UI Development with SAPUI5</Title>
                                    <Title level = {TitleLevel.H6}>SAP | Issued Oct 2019</Title>
                                    <ProgressIndicator 
                                        displayValue = "100%"
                                        percentValue = {100}
                                        width = '400px'
                                        state = {ValueState.Success} 
                                    />
                                </StandardListItem>
                                <StandardListItem 
                                    info = 'Completed' 
                                    infoState = {ValueState.Success} 
                                    style = {{ paddingTop: "50px", paddingBottom: "50px" }}
                                >
                                    <Title level = {TitleLevel.H5}>SAP User Experience Fundamentals</Title>
                                    <Title level = {TitleLevel.H6}>SAP | Issued Aug 2019</Title>
                                    <ProgressIndicator 
                                        displayValue = "100%"
                                        percentValue = {100}
                                        width = '400px'
                                        state = {ValueState.Success} 
                                    />
                                </StandardListItem>
                                <StandardListItem 
                                    info = 'Completed' 
                                    infoState = {ValueState.Success} 
                                    style = {{ paddingTop: "50px", paddingBottom: "50px" }}
                                >
                                    <Title level = {TitleLevel.H5}>SAP HCM Functional Consultant Advanced Level</Title>
                                    <Title level = {TitleLevel.H6}>CVOSOFT | Issued Dec 2018</Title>
                                    <ProgressIndicator 
                                        displayValue = "100%"
                                        percentValue = {100}
                                        width = '400px'
                                        state = {ValueState.Success} 
                                    />
                                </StandardListItem>
                                <StandardListItem 
                                    info = 'Completed' 
                                    infoState = {ValueState.Success} 
                                    style = {{ paddingTop: "50px", paddingBottom: "50px" }}
                                >
                                    <Title level = {TitleLevel.H5}>SAP HCM Functional Consultant Beginner Level</Title>
                                    <Title level = {TitleLevel.H6}>CVOSOFT | Issued Aug 2018</Title>
                                    <ProgressIndicator 
                                        displayValue = "100%"
                                        percentValue = {100}
                                        width = '400px'
                                        state = {ValueState.Success} 
                                    />
                                </StandardListItem>
                            </List>
                        </Card>
                    )
                }
            </Media>
            <Media queries = {{ mobile: "(max-width: 420px)" }} >
                {matches =>
                    matches.mobile ? (
                        <Card
                            heading = "Projects"
                            subheading = "Table"
                            avatar = { <Icon name = {"sap-box"}/> }
                            style = {{width: '1250px', ...spacing.sapUiContentPadding, display: 'none'}}
                        >
                            <Table
                                columns = {
                                    <>
                                        <TableColumn style = {{ width: '200px' }}>
                                            <Label>Project Name</Label>
                                        </TableColumn>
                                        <TableColumn minWidth = {'250px'}>
                                            <Label>Company</Label>
                                        </TableColumn>
                                        <TableColumn minWidth = {'190px'}>
                                            <Label>Start Date</Label>
                                        </TableColumn>
                                        <TableColumn minWidth = {'120px'}>
                                            <Label>End Date</Label>
                                        </TableColumn>
                                        <TableColumn minWidth = {'300px'}>
                                            <Label>Description</Label>
                                        </TableColumn>
                                    </>
                                }
                            >
                                <TableRow>
                                    <TableCell>
                                        <Label>Payroll Stabilization</Label>
                                    </TableCell>
                                    <TableCell>
                                        <Label>Scotiabank</Label>
                                    </TableCell>
                                    <TableCell>
                                        <Label>March 2020</Label>
                                    </TableCell>
                                    <TableCell>
                                        <Label>Current</Label>
                                    </TableCell>
                                    <TableCell>
                                        <Label>Special team to fix SAP Payroll issues in a Kanban Agile environment</Label>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Label>STAFFIT Wave 9 Expansion</Label>
                                    </TableCell>
                                    <TableCell>
                                        <Label>Deloitte</Label>
                                    </TableCell>
                                    <TableCell>
                                        <Label>Sept 2019</Label>
                                    </TableCell>
                                    <TableCell>
                                        <Label>Dec 2019</Label>
                                    </TableCell>
                                    <TableCell>
                                        <Label>STAFFIT App deployment for new LoB on Deloitte Italy and Greece</Label>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Label>STAFFIT Release 2.1.3 Global Reports</Label>
                                    </TableCell>
                                    <TableCell>
                                        <Label>Deloitte</Label>
                                    </TableCell>
                                    <TableCell>
                                        <Label>Jun 2019</Label>
                                    </TableCell>
                                    <TableCell>
                                        <Label>Sept 2019</Label>
                                    </TableCell>
                                    <TableCell>
                                        <Label>New Global BI Reports to enhance Reporting Experience for cluster Member Firms</Label>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Label>STAFFIT Wave 8</Label>
                                    </TableCell>
                                    <TableCell>
                                        <Label>Deloitte</Label>
                                    </TableCell>
                                    <TableCell>
                                        <Label>Dec 2018</Label>
                                    </TableCell>
                                    <TableCell>
                                        <Label>May 2019</Label>
                                    </TableCell>
                                    <TableCell>
                                        <Label>STAFFIT Deployment for new Deloitte Member Firms (Central Mediterranean, Middle East, Ireland, New Zealand and India)</Label>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Label>STAFFIT Wave 7</Label>
                                    </TableCell>
                                    <TableCell>
                                        <Label>Deloitte</Label>
                                    </TableCell>
                                    <TableCell>
                                        <Label>Nov 2018</Label>
                                    </TableCell>
                                    <TableCell>
                                        <Label>Apr 2019</Label>
                                    </TableCell>
                                    <TableCell>
                                        <Label>STAFFIT Deployment for new Deloitte Member Firms (Central Europe and Germany)</Label>
                                    </TableCell>
                                </TableRow>
                            </Table>
                        </Card>
                    ) : (
                        <Card
                            heading = "Projects"
                            subheading = "Table"
                            avatar = { <Icon name = {"sap-box"}/> }
                            style = {{width: '1250px', ...spacing.sapUiContentPadding}}
                        >
                            <Table
                                columns = {
                                    <>
                                        <TableColumn style = {{ width: '200px' }}>
                                            <Label>Project Name</Label>
                                        </TableColumn>
                                        <TableColumn minWidth = {'250px'}>
                                            <Label>Company</Label>
                                        </TableColumn>
                                        <TableColumn minWidth = {'190px'}>
                                            <Label>Start Date</Label>
                                        </TableColumn>
                                        <TableColumn minWidth = {'120px'}>
                                            <Label>End Date</Label>
                                        </TableColumn>
                                        <TableColumn minWidth = {'250px'}>
                                            <Label>Description</Label>
                                        </TableColumn>
                                    </>
                                }
                            >
                                <TableRow>
                                    <TableCell>
                                        <Label>Payroll Stabilization</Label>
                                    </TableCell>
                                    <TableCell>
                                        <Label>Scotiabank</Label>
                                    </TableCell>
                                    <TableCell>
                                        <Label>March 2020</Label>
                                    </TableCell>
                                    <TableCell>
                                        <Label>Current</Label>
                                    </TableCell>
                                    <TableCell>
                                        <Label wrap = {true}>Special team to fix SAP Payroll issues in a Kanban Agile environment</Label>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Label>STAFFIT Wave 9 Expansion</Label>
                                    </TableCell>
                                    <TableCell>
                                        <Label>Deloitte</Label>
                                    </TableCell>
                                    <TableCell>
                                        <Label>Sept 2019</Label>
                                    </TableCell>
                                    <TableCell>
                                        <Label>Dec 2019</Label>
                                    </TableCell>
                                    <TableCell>
                                        <Label wrap = {true}>STAFFIT App deployment for new LoB on Deloitte Italy and Greece</Label>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Label wrap = {true}>STAFFIT Release 2.1.3 Global Reports</Label>
                                    </TableCell>
                                    <TableCell>
                                        <Label>Deloitte</Label>
                                    </TableCell>
                                    <TableCell>
                                        <Label>Jun 2019</Label>
                                    </TableCell>
                                    <TableCell>
                                        <Label>Sept 2019</Label>
                                    </TableCell>
                                    <TableCell>
                                        <Label wrap = {true}>New Global BI Reports to enhance Reporting Experience for cluster Member Firms</Label>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Label>STAFFIT Wave 8</Label>
                                    </TableCell>
                                    <TableCell>
                                        <Label>Deloitte</Label>
                                    </TableCell>
                                    <TableCell>
                                        <Label>Dec 2018</Label>
                                    </TableCell>
                                    <TableCell>
                                        <Label>May 2019</Label>
                                    </TableCell>
                                    <TableCell>
                                        <Label wrap = {true}>STAFFIT Deployment for new Deloitte Member Firms (Central Mediterranean, Middle East, Ireland, New Zealand and India)</Label>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Label>STAFFIT Wave 7</Label>
                                    </TableCell>
                                    <TableCell>
                                        <Label>Deloitte</Label>
                                    </TableCell>
                                    <TableCell>
                                        <Label>Nov 2018</Label>
                                    </TableCell>
                                    <TableCell>
                                        <Label>Apr 2019</Label>
                                    </TableCell>
                                    <TableCell>
                                        <Label wrap = {true}>STAFFIT Deployment for new Deloitte Member Firms (Central Europe and Germany)</Label>
                                    </TableCell>
                                </TableRow>
                            </Table>
                        </Card>
                    )
                }
            </Media>
        </FlexBox>
        </div>
        
    )
}