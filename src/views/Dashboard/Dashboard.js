import React, { Component, lazy, Suspense, useState } from "react"
import { Bar, Line } from "react-chartjs-2"
import {
  Alert,
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Carousel,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  FormGroup,
  Input,
  Label,
  Progress,
  Row,
  Table,
} from "reactstrap"
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import { getStyle, hexToRgba } from "@coreui/coreui/dist/js/coreui-utilities";
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';


const localizer = momentLocalizer(moment);
let allViews = Object.keys(Views).map(k => Views[k])
 
const Dashboard = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const items = [
    {
      src:
        "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1607923e7e2%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1607923e7e2%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.9296875%22%20y%3D%22217.75625%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
      altText: "Slide 1",
      caption: "Slide 1",
    },
    {
      src:
        "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
      altText: "Slide 2",
      caption: "Slide 2",
    },
    {
      src:
        "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
      altText: "Slide 3",
      caption: "Slide 3",
    },
    {
      src:
        "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1607923e7e2%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1607923e7e2%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.9296875%22%20y%3D%22217.75625%22%3EForth%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
      altText: "Slide 4",
      caption: "Slide 4",
    },
    {
      src:
        "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3EFifth%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
      altText: "Slide 5",
      caption: "Slide 5",
    },
    {
      src:
        "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3ESixth%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
      altText: "Slide 6",
      caption: "Slide 6",
    },
  ]

  const slides = items.map((item) => {
    return (
      <CarouselItem
        // onExiting={this.onExiting}
        // onExited={this.onExited}
        key={item.src}
      >
        <img className="d-block w-100" src={item.src} alt={item.altText} />
      </CarouselItem>
    )
  });
  const animating = false;
  const onExiting = () => {
    animating = true
  }

  const onExited = () => {
    animating = false
  }

  const next = () => {
    if (animating) return
    const nextIndex =
      activeIndex === items.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex =
      activeIndex === 0 ? items.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex)
  }

  return (
    <div>
      <Alert color="primary">This is a primary alert — check it out!</Alert>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>Dropdown</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem>Some Action</DropdownItem>
          <DropdownItem disabled>Action (disabled)</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Foo Action</DropdownItem>
          <DropdownItem>Bar Action</DropdownItem>
          <DropdownItem>Quo Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <div>
        <br />
        <Button color="primary">Primary</Button>{" "}
      </div>
      <div>
        <br />
        {/* <Carousel
          activeIndex={0}
          next={next}
          previous={previous}
          ride="carousel"
        >
          {slides}
        </Carousel> */}

        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          interval={0}
          // data-slide={false}
          // data-ride={false}
          // data-wrap={false}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>

      </div>

      <div>
        <br />
        {/* <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="https://homepages.cae.wisc.edu/~ece533/images/airplane.png" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://homepages.cae.wisc.edu/~ece533/images/boat.png" alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://homepages.cae.wisc.edu/~ece533/images/monarch.png" alt="Third slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div> */}
      </div>
      <div>
        <div>
          <br />
          <Calendar
            localizer={localizer}
            events={[
              {
                'title': 'Long Event',
                'start': new Date(2020, 3, 7),
                'end': new Date(2020, 3, 7, 0)
              },
              // {
              //   'title': 'My event',
              //   'allDay': true,
              //   // 'start': new Date(2020, 0, 1, 10, 0), // 10.00 AM
              //   // 'end': new Date(2020, 0, 1, 14, 0), // 2.00 PM 
              // }
            ]}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500, width: '45%', float: 'left', margin: '10px' }}
          />
          <Calendar
            localizer={localizer}
            // views={allViews}
            events={[
              {
                'title': 'Long Event',
                'start': new Date(2020, 3, 7),
                'end': new Date(2020, 3, 7, 0)
              },
              // {
              //   'title': 'My event',
              //   'allDay': true,
              //   // 'start': new Date(2020, 0, 1, 10, 0), // 10.00 AM
              //   // 'end': new Date(2020, 0, 1, 14, 0), // 2.00 PM 
              // }
            ]}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500, width: '45%', margin: '10px' }}
          />
        </div>
      </div>
      <div>
        <br />
        <nav aria-label="...">
          <ul className="pagination">
            <li className="page-item disabled">
              <span className="page-link">Previous</span>
            </li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item active">
              <span className="page-link">
                2
                <span className="sr-only">(current)</span>
              </span>
            </li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
              <a className="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
      </div>
      {/* <div>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://picsum.photos/seed/picsum/200/300" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img src="https://picsum.photos/id/870/200/300?grayscale&blur=2" alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img src="https://picsum.photos/200/300/?blur" alt="Third slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div> */}



















      <div>
        <br />
        <Form inline>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="exampleEmail" className="mr-sm-2">
              Email
            </Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="something@idk.cool"
            />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="examplePassword" className="mr-sm-2">
              Password
            </Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="don't tell!"
            />
          </FormGroup>
          <Button>Submit</Button>

        </Form>
      </div>
    </div>
  )
}

export default Dashboard

// import React, { Component, lazy, Suspense } from 'react';
// import { Bar, Line } from 'react-chartjs-2';
// import {
//   Badge,
//   Button,
//   ButtonDropdown,
//   ButtonGroup,
//   ButtonToolbar,
//   Card,
//   CardBody,
//   CardFooter,
//   CardHeader,
//   CardTitle,
//   Col,
//   Dropdown,
//   DropdownItem,
//   DropdownMenu,
//   DropdownToggle,
//   Progress,
//   Row,
//   Table,
// } from 'reactstrap';
// import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
// import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'

// const Widget03 = lazy(() => import('../../views/Widgets/Widget03'));

// const brandPrimary = getStyle('--primary')
// const brandSuccess = getStyle('--success')
// const brandInfo = getStyle('--info')
// const brandWarning = getStyle('--warning')
// const brandDanger = getStyle('--danger')

// // Card Chart 1
// const cardChartData1 = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//   datasets: [
//     {
//       label: 'My First dataset',
//       backgroundColor: brandPrimary,
//       borderColor: 'rgba(255,255,255,.55)',
//       data: [65, 59, 84, 84, 51, 55, 40],
//     },
//   ],
// };

// const cardChartOpts1 = {
//   tooltips: {
//     enabled: false,
//     custom: CustomTooltips
//   },
//   maintainAspectRatio: false,
//   legend: {
//     display: false,
//   },
//   scales: {
//     xAxes: [
//       {
//         gridLines: {
//           color: 'transparent',
//           zeroLineColor: 'transparent',
//         },
//         ticks: {
//           fontSize: 2,
//           fontColor: 'transparent',
//         },

//       }],
//     yAxes: [
//       {
//         display: false,
//         ticks: {
//           display: false,
//           min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
//           max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
//         },
//       }],
//   },
//   elements: {
//     line: {
//       borderWidth: 1,
//     },
//     point: {
//       radius: 4,
//       hitRadius: 10,
//       hoverRadius: 4,
//     },
//   }
// }

// // Card Chart 2
// const cardChartData2 = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//   datasets: [
//     {
//       label: 'My First dataset',
//       backgroundColor: brandInfo,
//       borderColor: 'rgba(255,255,255,.55)',
//       data: [1, 18, 9, 17, 34, 22, 11],
//     },
//   ],
// };

// const cardChartOpts2 = {
//   tooltips: {
//     enabled: false,
//     custom: CustomTooltips
//   },
//   maintainAspectRatio: false,
//   legend: {
//     display: false,
//   },
//   scales: {
//     xAxes: [
//       {
//         gridLines: {
//           color: 'transparent',
//           zeroLineColor: 'transparent',
//         },
//         ticks: {
//           fontSize: 2,
//           fontColor: 'transparent',
//         },

//       }],
//     yAxes: [
//       {
//         display: false,
//         ticks: {
//           display: false,
//           min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
//           max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
//         },
//       }],
//   },
//   elements: {
//     line: {
//       tension: 0.00001,
//       borderWidth: 1,
//     },
//     point: {
//       radius: 4,
//       hitRadius: 10,
//       hoverRadius: 4,
//     },
//   },
// };

// // Card Chart 3
// const cardChartData3 = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//   datasets: [
//     {
//       label: 'My First dataset',
//       backgroundColor: 'rgba(255,255,255,.2)',
//       borderColor: 'rgba(255,255,255,.55)',
//       data: [78, 81, 80, 45, 34, 12, 40],
//     },
//   ],
// };

// const cardChartOpts3 = {
//   tooltips: {
//     enabled: false,
//     custom: CustomTooltips
//   },
//   maintainAspectRatio: false,
//   legend: {
//     display: false,
//   },
//   scales: {
//     xAxes: [
//       {
//         display: false,
//       }],
//     yAxes: [
//       {
//         display: false,
//       }],
//   },
//   elements: {
//     line: {
//       borderWidth: 2,
//     },
//     point: {
//       radius: 0,
//       hitRadius: 10,
//       hoverRadius: 4,
//     },
//   },
// };

// // Card Chart 4
// const cardChartData4 = {
//   labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
//   datasets: [
//     {
//       label: 'My First dataset',
//       backgroundColor: 'rgba(255,255,255,.3)',
//       borderColor: 'transparent',
//       data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98],
//     },
//   ],
// };

// const cardChartOpts4 = {
//   tooltips: {
//     enabled: false,
//     custom: CustomTooltips
//   },
//   maintainAspectRatio: false,
//   legend: {
//     display: false,
//   },
//   scales: {
//     xAxes: [
//       {
//         display: false,
//         barPercentage: 0.6,
//       }],
//     yAxes: [
//       {
//         display: false,
//       }],
//   },
// };

// // Social Box Chart
// const socialBoxData = [
//   { data: [65, 59, 84, 84, 51, 55, 40], label: 'facebook' },
//   { data: [1, 13, 9, 17, 34, 41, 38], label: 'twitter' },
//   { data: [78, 81, 80, 45, 34, 12, 40], label: 'linkedin' },
//   { data: [35, 23, 56, 22, 97, 23, 64], label: 'google' },
// ];

// const makeSocialBoxData = (dataSetNo) => {
//   const dataset = socialBoxData[dataSetNo];
//   const data = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [
//       {
//         backgroundColor: 'rgba(255,255,255,.1)',
//         borderColor: 'rgba(255,255,255,.55)',
//         pointHoverBackgroundColor: '#fff',
//         borderWidth: 2,
//         data: dataset.data,
//         label: dataset.label,
//       },
//     ],
//   };
//   return () => data;
// };

// const socialChartOpts = {
//   tooltips: {
//     enabled: false,
//     custom: CustomTooltips
//   },
//   responsive: true,
//   maintainAspectRatio: false,
//   legend: {
//     display: false,
//   },
//   scales: {
//     xAxes: [
//       {
//         display: false,
//       }],
//     yAxes: [
//       {
//         display: false,
//       }],
//   },
//   elements: {
//     point: {
//       radius: 0,
//       hitRadius: 10,
//       hoverRadius: 4,
//       hoverBorderWidth: 3,
//     },
//   },
// };

// // sparkline charts
// const sparkLineChartData = [
//   {
//     data: [35, 23, 56, 22, 97, 23, 64],
//     label: 'New Clients',
//   },
//   {
//     data: [65, 59, 84, 84, 51, 55, 40],
//     label: 'Recurring Clients',
//   },
//   {
//     data: [35, 23, 56, 22, 97, 23, 64],
//     label: 'Pageviews',
//   },
//   {
//     data: [65, 59, 84, 84, 51, 55, 40],
//     label: 'Organic',
//   },
//   {
//     data: [78, 81, 80, 45, 34, 12, 40],
//     label: 'CTR',
//   },
//   {
//     data: [1, 13, 9, 17, 34, 41, 38],
//     label: 'Bounce Rate',
//   },
// ];

// const makeSparkLineData = (dataSetNo, variant) => {
//   const dataset = sparkLineChartData[dataSetNo];
//   const data = {
//     labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
//     datasets: [
//       {
//         backgroundColor: 'transparent',
//         borderColor: variant ? variant : '#c2cfd6',
//         data: dataset.data,
//         label: dataset.label,
//       },
//     ],
//   };
//   return () => data;
// };

// const sparklineChartOpts = {
//   tooltips: {
//     enabled: false,
//     custom: CustomTooltips
//   },
//   responsive: true,
//   maintainAspectRatio: true,
//   scales: {
//     xAxes: [
//       {
//         display: false,
//       }],
//     yAxes: [
//       {
//         display: false,
//       }],
//   },
//   elements: {
//     line: {
//       borderWidth: 2,
//     },
//     point: {
//       radius: 0,
//       hitRadius: 10,
//       hoverRadius: 4,
//       hoverBorderWidth: 3,
//     },
//   },
//   legend: {
//     display: false,
//   },
// };

// // Main Chart

// //Random Numbers
// function random(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// var elements = 27;
// var data1 = [];
// var data2 = [];
// var data3 = [];

// for (var i = 0; i <= elements; i++) {
//   data1.push(random(50, 200));
//   data2.push(random(80, 100));
//   data3.push(65);
// }

// const mainChart = {
//   labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
//   datasets: [
//     {
//       label: 'My First dataset',
//       backgroundColor: hexToRgba(brandInfo, 10),
//       borderColor: brandInfo,
//       pointHoverBackgroundColor: '#fff',
//       borderWidth: 2,
//       data: data1,
//     },
//     {
//       label: 'My Second dataset',
//       backgroundColor: 'transparent',
//       borderColor: brandSuccess,
//       pointHoverBackgroundColor: '#fff',
//       borderWidth: 2,
//       data: data2,
//     },
//     {
//       label: 'My Third dataset',
//       backgroundColor: 'transparent',
//       borderColor: brandDanger,
//       pointHoverBackgroundColor: '#fff',
//       borderWidth: 1,
//       borderDash: [8, 5],
//       data: data3,
//     },
//   ],
// };

// const mainChartOpts = {
//   tooltips: {
//     enabled: false,
//     custom: CustomTooltips,
//     intersect: true,
//     mode: 'index',
//     position: 'nearest',
//     callbacks: {
//       labelColor: function(tooltipItem, chart) {
//         return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
//       }
//     }
//   },
//   maintainAspectRatio: false,
//   legend: {
//     display: false,
//   },
//   scales: {
//     xAxes: [
//       {
//         gridLines: {
//           drawOnChartArea: false,
//         },
//       }],
//     yAxes: [
//       {
//         ticks: {
//           beginAtZero: true,
//           maxTicksLimit: 5,
//           stepSize: Math.ceil(250 / 5),
//           max: 250,
//         },
//       }],
//   },
//   elements: {
//     point: {
//       radius: 0,
//       hitRadius: 10,
//       hoverRadius: 4,
//       hoverBorderWidth: 3,
//     },
//   },
// };

// class Dashboard extends Component {
//   constructor(props) {
//     super(props);

//     this.toggle = this.toggle.bind(this);
//     this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

//     this.state = {
//       dropdownOpen: false,
//       radioSelected: 2,
//     };
//   }

//   toggle() {
//     this.setState({
//       dropdownOpen: !this.state.dropdownOpen,
//     });
//   }

//   onRadioBtnClick(radioSelected) {
//     this.setState({
//       radioSelected: radioSelected,
//     });
//   }

//   loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

//   render() {

//     return (
//       <div className="animated fadeIn">
//         <Row>
//           <Col xs="12" sm="6" lg="3">
//             <Card className="text-white bg-info">
//               <CardBody className="pb-0">
//                 <ButtonGroup className="float-right">
//                   <ButtonDropdown id='card1' isOpen={this.state.card1} toggle={() => { this.setState({ card1: !this.state.card1 }); }}>
//                     <DropdownToggle caret className="p-0" color="transparent">
//                       <i className="icon-settings"></i>
//                     </DropdownToggle>
//                     <DropdownMenu right>
//                       <DropdownItem>Action</DropdownItem>
//                       <DropdownItem>Another action</DropdownItem>
//                       <DropdownItem disabled>Disabled action</DropdownItem>
//                       <DropdownItem>Something else here</DropdownItem>
//                     </DropdownMenu>
//                   </ButtonDropdown>
//                 </ButtonGroup>
//                 <div className="text-value">9.823</div>
//                 <div>Members online</div>
//               </CardBody>
//               <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
//                 <Line data={cardChartData2} options={cardChartOpts2} height={70} />
//               </div>
//             </Card>
//           </Col>

//           <Col xs="12" sm="6" lg="3">
//             <Card className="text-white bg-primary">
//               <CardBody className="pb-0">
//                 <ButtonGroup className="float-right">
//                   <Dropdown id='card2' isOpen={this.state.card2} toggle={() => { this.setState({ card2: !this.state.card2 }); }}>
//                     <DropdownToggle className="p-0" color="transparent">
//                       <i className="icon-location-pin"></i>
//                     </DropdownToggle>
//                     <DropdownMenu right>
//                       <DropdownItem>Action</DropdownItem>
//                       <DropdownItem>Another action</DropdownItem>
//                       <DropdownItem>Something else here</DropdownItem>
//                     </DropdownMenu>
//                   </Dropdown>
//                 </ButtonGroup>
//                 <div className="text-value">9.823</div>
//                 <div>Members online</div>
//               </CardBody>
//               <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
//                 <Line data={cardChartData1} options={cardChartOpts1} height={70} />
//               </div>
//             </Card>
//           </Col>

//           <Col xs="12" sm="6" lg="3">
//             <Card className="text-white bg-warning">
//               <CardBody className="pb-0">
//                 <ButtonGroup className="float-right">
//                   <Dropdown id='card3' isOpen={this.state.card3} toggle={() => { this.setState({ card3: !this.state.card3 }); }}>
//                     <DropdownToggle caret className="p-0" color="transparent">
//                       <i className="icon-settings"></i>
//                     </DropdownToggle>
//                     <DropdownMenu right>
//                       <DropdownItem>Action</DropdownItem>
//                       <DropdownItem>Another action</DropdownItem>
//                       <DropdownItem>Something else here</DropdownItem>
//                     </DropdownMenu>
//                   </Dropdown>
//                 </ButtonGroup>
//                 <div className="text-value">9.823</div>
//                 <div>Members online</div>
//               </CardBody>
//               <div className="chart-wrapper" style={{ height: '70px' }}>
//                 <Line data={cardChartData3} options={cardChartOpts3} height={70} />
//               </div>
//             </Card>
//           </Col>

//           <Col xs="12" sm="6" lg="3">
//             <Card className="text-white bg-danger">
//               <CardBody className="pb-0">
//                 <ButtonGroup className="float-right">
//                   <ButtonDropdown id='card4' isOpen={this.state.card4} toggle={() => { this.setState({ card4: !this.state.card4 }); }}>
//                     <DropdownToggle caret className="p-0" color="transparent">
//                       <i className="icon-settings"></i>
//                     </DropdownToggle>
//                     <DropdownMenu right>
//                       <DropdownItem>Action</DropdownItem>
//                       <DropdownItem>Another action</DropdownItem>
//                       <DropdownItem>Something else here</DropdownItem>
//                     </DropdownMenu>
//                   </ButtonDropdown>
//                 </ButtonGroup>
//                 <div className="text-value">9.823</div>
//                 <div>Members online</div>
//               </CardBody>
//               <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
//                 <Bar data={cardChartData4} options={cardChartOpts4} height={70} />
//               </div>
//             </Card>
//           </Col>
//         </Row>
//         <Row>
//           <Col>
//             <Card>
//               <CardBody>
//                 <Row>
//                   <Col sm="5">
//                     <CardTitle className="mb-0">Traffic</CardTitle>
//                     <div className="small text-muted">November 2015</div>
//                   </Col>
//                   <Col sm="7" className="d-none d-sm-inline-block">
//                     <Button color="primary" className="float-right"><i className="icon-cloud-download"></i></Button>
//                     <ButtonToolbar className="float-right" aria-label="Toolbar with button groups">
//                       <ButtonGroup className="mr-3" aria-label="First group">
//                         <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(1)} active={this.state.radioSelected === 1}>Day</Button>
//                         <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(2)} active={this.state.radioSelected === 2}>Month</Button>
//                         <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(3)} active={this.state.radioSelected === 3}>Year</Button>
//                       </ButtonGroup>
//                     </ButtonToolbar>
//                   </Col>
//                 </Row>
//                 <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
//                   <Line data={mainChart} options={mainChartOpts} height={300} />
//                 </div>
//               </CardBody>
//               <CardFooter>
//                 <Row className="text-center">
//                   <Col sm={12} md className="mb-sm-2 mb-0">
//                     <div className="text-muted">Visits</div>
//                     <strong>29.703 Users (40%)</strong>
//                     <Progress className="progress-xs mt-2" color="success" value="40" />
//                   </Col>
//                   <Col sm={12} md className="mb-sm-2 mb-0 d-md-down-none">
//                     <div className="text-muted">Unique</div>
//                     <strong>24.093 Users (20%)</strong>
//                     <Progress className="progress-xs mt-2" color="info" value="20" />
//                   </Col>
//                   <Col sm={12} md className="mb-sm-2 mb-0">
//                     <div className="text-muted">Pageviews</div>
//                     <strong>78.706 Views (60%)</strong>
//                     <Progress className="progress-xs mt-2" color="warning" value="60" />
//                   </Col>
//                   <Col sm={12} md className="mb-sm-2 mb-0">
//                     <div className="text-muted">New Users</div>
//                     <strong>22.123 Users (80%)</strong>
//                     <Progress className="progress-xs mt-2" color="danger" value="80" />
//                   </Col>
//                   <Col sm={12} md className="mb-sm-2 mb-0 d-md-down-none">
//                     <div className="text-muted">Bounce Rate</div>
//                     <strong>Average Rate (40.15%)</strong>
//                     <Progress className="progress-xs mt-2" color="primary" value="40" />
//                   </Col>
//                 </Row>
//               </CardFooter>
//             </Card>
//           </Col>
//         </Row>

//         <Row>
//           <Col xs="6" sm="6" lg="3">
//             <Suspense fallback={this.loading()}>
//               <Widget03 dataBox={() => ({ variant: 'facebook', friends: '89k', feeds: '459' })} >
//                 <div className="chart-wrapper">
//                   <Line data={makeSocialBoxData(0)} options={socialChartOpts} height={90} />
//                 </div>
//               </Widget03>
//             </Suspense>
//           </Col>

//           <Col xs="6" sm="6" lg="3">
//             <Suspense fallback={this.loading()}>
//               <Widget03 dataBox={() => ({ variant: 'twitter', followers: '973k', tweets: '1.792' })} >
//                 <div className="chart-wrapper">
//                   <Line data={makeSocialBoxData(1)} options={socialChartOpts} height={90} />
//                 </div>
//               </Widget03>
//             </Suspense>
//           </Col>

//           <Col xs="6" sm="6" lg="3">
//             <Suspense fallback={this.loading()}>
//               <Widget03 dataBox={() => ({ variant: 'linkedin', contacts: '500+', feeds: '292' })} >
//                 <div className="chart-wrapper">
//                   <Line data={makeSocialBoxData(2)} options={socialChartOpts} height={90} />
//                 </div>
//               </Widget03>
//             </Suspense>
//           </Col>

//           <Col xs="6" sm="6" lg="3">
//             <Suspense fallback={this.loading()}>
//               <Widget03 dataBox={() => ({ variant: 'google-plus', followers: '894', circles: '92' })} >
//                 <div className="chart-wrapper">
//                   <Line data={makeSocialBoxData(3)} options={socialChartOpts} height={90} />
//                 </div>
//               </Widget03>
//             </Suspense>
//           </Col>
//         </Row>

//         <Row>
//           <Col>
//             <Card>
//               <CardHeader>
//                 Traffic {' & '} Sales
//               </CardHeader>
//               <CardBody>
//                 <Row>
//                   <Col xs="12" md="6" xl="6">
//                     <Row>
//                       <Col sm="6">
//                         <div className="callout callout-info">
//                           <small className="text-muted">New Clients</small>
//                           <br />
//                           <strong className="h4">9,123</strong>
//                           <div className="chart-wrapper">
//                             <Line data={makeSparkLineData(0, brandPrimary)} options={sparklineChartOpts} width={100} height={30} />
//                           </div>
//                         </div>
//                       </Col>
//                       <Col sm="6">
//                         <div className="callout callout-danger">
//                           <small className="text-muted">Recurring Clients</small>
//                           <br />
//                           <strong className="h4">22,643</strong>
//                           <div className="chart-wrapper">
//                             <Line data={makeSparkLineData(1, brandDanger)} options={sparklineChartOpts} width={100} height={30} />
//                           </div>
//                         </div>
//                       </Col>
//                     </Row>
//                     <hr className="mt-0" />
//                     <div className="progress-group mb-4">
//                       <div className="progress-group-prepend">
//                         <span className="progress-group-text">
//                           Monday
//                         </span>
//                       </div>
//                       <div className="progress-group-bars">
//                         <Progress className="progress-xs" color="info" value="34" />
//                         <Progress className="progress-xs" color="danger" value="78" />
//                       </div>
//                     </div>
//                     <div className="progress-group mb-4">
//                       <div className="progress-group-prepend">
//                         <span className="progress-group-text">
//                         Tuesday
//                         </span>
//                       </div>
//                       <div className="progress-group-bars">
//                         <Progress className="progress-xs" color="info" value="56" />
//                         <Progress className="progress-xs" color="danger" value="94" />
//                       </div>
//                     </div>
//                     <div className="progress-group mb-4">
//                       <div className="progress-group-prepend">
//                         <span className="progress-group-text">
//                         Wednesday
//                         </span>
//                       </div>
//                       <div className="progress-group-bars">
//                         <Progress className="progress-xs" color="info" value="12" />
//                         <Progress className="progress-xs" color="danger" value="67" />
//                       </div>
//                     </div>
//                     <div className="progress-group mb-4">
//                       <div className="progress-group-prepend">
//                         <span className="progress-group-text">
//                         Thursday
//                         </span>
//                       </div>
//                       <div className="progress-group-bars">
//                         <Progress className="progress-xs" color="info" value="43" />
//                         <Progress className="progress-xs" color="danger" value="91" />
//                       </div>
//                     </div>
//                     <div className="progress-group mb-4">
//                       <div className="progress-group-prepend">
//                         <span className="progress-group-text">
//                         Friday
//                         </span>
//                       </div>
//                       <div className="progress-group-bars">
//                         <Progress className="progress-xs" color="info" value="22" />
//                         <Progress className="progress-xs" color="danger" value="73" />
//                       </div>
//                     </div>
//                     <div className="progress-group mb-4">
//                       <div className="progress-group-prepend">
//                         <span className="progress-group-text">
//                         Saturday
//                         </span>
//                       </div>
//                       <div className="progress-group-bars">
//                         <Progress className="progress-xs" color="info" value="53" />
//                         <Progress className="progress-xs" color="danger" value="82" />
//                       </div>
//                     </div>
//                     <div className="progress-group mb-4">
//                       <div className="progress-group-prepend">
//                         <span className="progress-group-text">
//                         Sunday
//                         </span>
//                       </div>
//                       <div className="progress-group-bars">
//                         <Progress className="progress-xs" color="info" value="9" />
//                         <Progress className="progress-xs" color="danger" value="69" />
//                       </div>
//                     </div>
//                     <div className="legend text-center">
//                       <small>
//                         <sup className="px-1"><Badge pill color="info">&nbsp;</Badge></sup>
//                         New clients
//                         &nbsp;
//                         <sup className="px-1"><Badge pill color="danger">&nbsp;</Badge></sup>
//                         Recurring clients
//                       </small>
//                     </div>
//                   </Col>
//                   <Col xs="12" md="6" xl="6">
//                     <Row>
//                       <Col sm="6">
//                         <div className="callout callout-warning">
//                           <small className="text-muted">Pageviews</small>
//                           <br />
//                           <strong className="h4">78,623</strong>
//                           <div className="chart-wrapper">
//                             <Line data={makeSparkLineData(2, brandWarning)} options={sparklineChartOpts} width={100} height={30} />
//                           </div>
//                         </div>
//                       </Col>
//                       <Col sm="6">
//                         <div className="callout callout-success">
//                           <small className="text-muted">Organic</small>
//                           <br />
//                           <strong className="h4">49,123</strong>
//                           <div className="chart-wrapper">
//                             <Line data={makeSparkLineData(3, brandSuccess)} options={sparklineChartOpts} width={100} height={30} />
//                           </div>
//                         </div>
//                       </Col>
//                     </Row>
//                     <hr className="mt-0" />
//                     <ul>
//                       <div className="progress-group">
//                         <div className="progress-group-header">
//                           <i className="icon-user progress-group-icon"></i>
//                           <span className="title">Male</span>
//                           <span className="ml-auto font-weight-bold">43%</span>
//                         </div>
//                         <div className="progress-group-bars">
//                           <Progress className="progress-xs" color="warning" value="43" />
//                         </div>
//                       </div>
//                       <div className="progress-group mb-5">
//                         <div className="progress-group-header">
//                           <i className="icon-user-female progress-group-icon"></i>
//                           <span className="title">Female</span>
//                           <span className="ml-auto font-weight-bold">37%</span>
//                         </div>
//                         <div className="progress-group-bars">
//                           <Progress className="progress-xs" color="warning" value="37" />
//                         </div>
//                       </div>
//                       <div className="progress-group">
//                         <div className="progress-group-header">
//                           <i className="icon-globe progress-group-icon"></i>
//                           <span className="title">Organic Search</span>
//                           <span className="ml-auto font-weight-bold">191,235 <span className="text-muted small">(56%)</span></span>
//                         </div>
//                         <div className="progress-group-bars">
//                           <Progress className="progress-xs" color="success" value="56" />
//                         </div>
//                       </div>
//                       <div className="progress-group">
//                         <div className="progress-group-header">
//                           <i className="icon-social-facebook progress-group-icon"></i>
//                           <span className="title">Facebook</span>
//                           <span className="ml-auto font-weight-bold">51,223 <span className="text-muted small">(15%)</span></span>
//                         </div>
//                         <div className="progress-group-bars">
//                           <Progress className="progress-xs" color="success" value="15" />
//                         </div>
//                       </div>
//                       <div className="progress-group">
//                         <div className="progress-group-header">
//                           <i className="icon-social-twitter progress-group-icon"></i>
//                           <span className="title">Twitter</span>
//                           <span className="ml-auto font-weight-bold">37,564 <span className="text-muted small">(11%)</span></span>
//                         </div>
//                         <div className="progress-group-bars">
//                           <Progress className="progress-xs" color="success" value="11" />
//                         </div>
//                       </div>
//                       <div className="progress-group">
//                         <div className="progress-group-header">
//                           <i className="icon-social-linkedin progress-group-icon"></i>
//                           <span className="title">LinkedIn</span>
//                           <span className="ml-auto font-weight-bold">27,319 <span className="text-muted small">(8%)</span></span>
//                         </div>
//                         <div className="progress-group-bars">
//                           <Progress className="progress-xs" color="success" value="8" />
//                         </div>
//                       </div>
//                       <div className="divider text-center">
//                         <Button color="link" size="sm" className="text-muted" data-toggle="tooltip" data-placement="top"
//                                 title="" data-original-title="show more"><i className="icon-options"></i></Button>
//                       </div>
//                     </ul>
//                   </Col>
//                 </Row>
//                 <br />
//                 <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
//                   <thead className="thead-light">
//                   <tr>
//                     <th className="text-center"><i className="icon-people"></i></th>
//                     <th>User</th>
//                     <th className="text-center">Country</th>
//                     <th>Usage</th>
//                     <th className="text-center">Payment Method</th>
//                     <th>Activity</th>
//                   </tr>
//                   </thead>
//                   <tbody>
//                   <tr>
//                     <td className="text-center">
//                       <div className="avatar">
//                         <img src={'assets/img/avatars/1.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
//                         <span className="avatar-status badge-success"></span>
//                       </div>
//                     </td>
//                     <td>
//                       <div>Yiorgos Avraamu</div>
//                       <div className="small text-muted">
//                         <span>New</span> | Registered: Jan 1, 2015
//                       </div>
//                     </td>
//                     <td className="text-center">
//                       <i className="flag-icon flag-icon-us h4 mb-0" title="us" id="us"></i>
//                     </td>
//                     <td>
//                       <div className="clearfix">
//                         <div className="float-left">
//                           <strong>50%</strong>
//                         </div>
//                         <div className="float-right">
//                           <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
//                         </div>
//                       </div>
//                       <Progress className="progress-xs" color="success" value="50" />
//                     </td>
//                     <td className="text-center">
//                       <i className="fa fa-cc-mastercard" style={{ fontSize: 24 + 'px' }}></i>
//                     </td>
//                     <td>
//                       <div className="small text-muted">Last login</div>
//                       <strong>10 sec ago</strong>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td className="text-center">
//                       <div className="avatar">
//                         <img src={'assets/img/avatars/2.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
//                         <span className="avatar-status badge-danger"></span>
//                       </div>
//                     </td>
//                     <td>
//                       <div>Avram Tarasios</div>
//                       <div className="small text-muted">

//                         <span>Recurring</span> | Registered: Jan 1, 2015
//                       </div>
//                     </td>
//                     <td className="text-center">
//                       <i className="flag-icon flag-icon-br h4 mb-0" title="br" id="br"></i>
//                     </td>
//                     <td>
//                       <div className="clearfix">
//                         <div className="float-left">
//                           <strong>10%</strong>
//                         </div>
//                         <div className="float-right">
//                           <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
//                         </div>
//                       </div>
//                       <Progress className="progress-xs" color="info" value="10" />
//                     </td>
//                     <td className="text-center">
//                       <i className="fa fa-cc-visa" style={{ fontSize: 24 + 'px' }}></i>
//                     </td>
//                     <td>
//                       <div className="small text-muted">Last login</div>
//                       <strong>5 minutes ago</strong>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td className="text-center">
//                       <div className="avatar">
//                         <img src={'assets/img/avatars/3.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
//                         <span className="avatar-status badge-warning"></span>
//                       </div>
//                     </td>
//                     <td>
//                       <div>Quintin Ed</div>
//                       <div className="small text-muted">
//                         <span>New</span> | Registered: Jan 1, 2015
//                       </div>
//                     </td>
//                     <td className="text-center">
//                       <i className="flag-icon flag-icon-in h4 mb-0" title="in" id="in"></i>
//                     </td>
//                     <td>
//                       <div className="clearfix">
//                         <div className="float-left">
//                           <strong>74%</strong>
//                         </div>
//                         <div className="float-right">
//                           <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
//                         </div>
//                       </div>
//                       <Progress className="progress-xs" color="warning" value="74" />
//                     </td>
//                     <td className="text-center">
//                       <i className="fa fa-cc-stripe" style={{ fontSize: 24 + 'px' }}></i>
//                     </td>
//                     <td>
//                       <div className="small text-muted">Last login</div>
//                       <strong>1 hour ago</strong>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td className="text-center">
//                       <div className="avatar">
//                         <img src={'assets/img/avatars/4.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
//                         <span className="avatar-status badge-secondary"></span>
//                       </div>
//                     </td>
//                     <td>
//                       <div>Enéas Kwadwo</div>
//                       <div className="small text-muted">
//                         <span>New</span> | Registered: Jan 1, 2015
//                       </div>
//                     </td>
//                     <td className="text-center">
//                       <i className="flag-icon flag-icon-fr h4 mb-0" title="fr" id="fr"></i>
//                     </td>
//                     <td>
//                       <div className="clearfix">
//                         <div className="float-left">
//                           <strong>98%</strong>
//                         </div>
//                         <div className="float-right">
//                           <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
//                         </div>
//                       </div>
//                       <Progress className="progress-xs" color="danger" value="98" />
//                     </td>
//                     <td className="text-center">
//                       <i className="fa fa-paypal" style={{ fontSize: 24 + 'px' }}></i>
//                     </td>
//                     <td>
//                       <div className="small text-muted">Last login</div>
//                       <strong>Last month</strong>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td className="text-center">
//                       <div className="avatar">
//                         <img src={'assets/img/avatars/5.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
//                         <span className="avatar-status badge-success"></span>
//                       </div>
//                     </td>
//                     <td>
//                       <div>Agapetus Tadeáš</div>
//                       <div className="small text-muted">
//                         <span>New</span> | Registered: Jan 1, 2015
//                       </div>
//                     </td>
//                     <td className="text-center">
//                       <i className="flag-icon flag-icon-es h4 mb-0" title="es" id="es"></i>
//                     </td>
//                     <td>
//                       <div className="clearfix">
//                         <div className="float-left">
//                           <strong>22%</strong>
//                         </div>
//                         <div className="float-right">
//                           <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
//                         </div>
//                       </div>
//                       <Progress className="progress-xs" color="info" value="22" />
//                     </td>
//                     <td className="text-center">
//                       <i className="fa fa-google-wallet" style={{ fontSize: 24 + 'px' }}></i>
//                     </td>
//                     <td>
//                       <div className="small text-muted">Last login</div>
//                       <strong>Last week</strong>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td className="text-center">
//                       <div className="avatar">
//                         <img src={'assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
//                         <span className="avatar-status badge-danger"></span>
//                       </div>
//                     </td>
//                     <td>
//                       <div>Friderik Dávid</div>
//                       <div className="small text-muted">
//                         <span>New</span> | Registered: Jan 1, 2015
//                       </div>
//                     </td>
//                     <td className="text-center">
//                       <i className="flag-icon flag-icon-pl h4 mb-0" title="pl" id="pl"></i>
//                     </td>
//                     <td>
//                       <div className="clearfix">
//                         <div className="float-left">
//                           <strong>43%</strong>
//                         </div>
//                         <div className="float-right">
//                           <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
//                         </div>
//                       </div>
//                       <Progress className="progress-xs" color="success" value="43" />
//                     </td>
//                     <td className="text-center">
//                       <i className="fa fa-cc-amex" style={{ fontSize: 24 + 'px' }}></i>
//                     </td>
//                     <td>
//                       <div className="small text-muted">Last login</div>
//                       <strong>Yesterday</strong>
//                     </td>
//                   </tr>
//                   </tbody>
//                 </Table>
//               </CardBody>
//             </Card>
//           </Col>
//         </Row>
//       </div>
//     );
//   }
// }

// export default Dashboard;
