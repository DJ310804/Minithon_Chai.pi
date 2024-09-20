import React from 'react';
import { Link } from 'react-router-dom';
import { Bar, Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  
  // Register Chart.js components
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
  );

export default function Dashboard() {
  // Data for the bar chart
  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  // Data for the pie chart
  const pieData = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ],
      },
    ],
  };

  return (
    <>
      {/* Importing Google Material Icons */}
      <link
        href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
        rel="stylesheet"
      />

      {/* Main container */}
      <div className="bg-base-100 min-h-screen">
        {/* Sidebar and content */}
        <div className="flex flex-row pt-24 px-10 pb-4">
          {/* Sidebar */}
          <div className="w-2/12 mr-6 h-screen">
            <div className="bg-base rounded-xl shadow-lg mb-6 px-6 py-4">
              <Link to="" className="inline-block text-base-content hover:text-base-content my-4 w-full">
                <span className="material-icons-outlined float-left pr-2">dashboard</span>
                Library
                <span className="material-icons-outlined float-right">keyboard_arrow_right</span>
              </Link>
              <Link to="#" className="inline-block text-base-content hover:text-base-content my-4 w-full">
                <span className="material-icons-outlined float-left pr-2">tune</span>
                Lab facilities
                <span className="material-icons-outlined float-right">keyboard_arrow_right</span>
              </Link>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-10/12">
            <div className="flex flex-row">
              {/* Welcome Card */}
              <div className="bg-base border border-base-content rounded-xl w-7/12 mr-2 p-6">
                <p className="text-5xl text-base">
                  Welcome <br />
                  <strong>SPIT TEAM Ipsum</strong>
                </p>
              </div>

              {/* Inbox Card */}
              <div className="bg-base border border-base-content rounded-xl w-5/12 ml-2 p-6">
                <p className="text-5xl text-base">
                  Announcements <br />
                  <strong>Admissions starting from October</strong>
                </p>
                <a
                  href="#"
                  className="bg-base text-xl text-white underline hover:no-underline inline-block rounded-full mt-12 px-8 py-2"
                >
                  <strong>See messages</strong>
                </a>
              </div>
            </div>

          {/* Event Cards */}
<div className="flex flex-row h-64 mt-6">
  <div className="bg-base rounded-xl shadow-lg px-6 py-4 w-4/12 overflow-hidden">
    <div className="flex items-center justify-between">
      <label className="swap swap-flip text-9xl">
        <input type="checkbox" />
        <div className="swap-on">
          <img
            src="./src/assets/Aeravat_24.webp"
            alt="Sad"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="swap-off">
          <img
            src="./src/assets/ipl_auction.jpeg"
            alt="Happy"
            className="w-full h-auto object-cover"
          />
        </div>
      </label>
    </div>
  </div>

  <div className="bg-base rounded-xl shadow-lg px-6 py-4 w-4/12 overflow-hidden">
    <div className="flex items-center justify-between">
      <label className="swap swap-flip text-9xl">
        <input type="checkbox" />
        <div className="swap-on">
          <img
            src="./src/assets/Aeravat_24.webp"
            alt="Sad"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="swap-off">
          <img
            src="./src/assets/CSI.jpg"
            alt="Happy"
            className="w-full h-auto object-cover"
          />
        </div>
      </label>
    </div>
  </div>

  <div className="bg-base rounded-xl shadow-lg px-6 py-4 w-4/12 overflow-hidden">
    <div className="flex items-center justify-between">
      <label className="swap swap-flip text-9xl">
        <input type="checkbox" />
        <div className="swap-on">
          <img
            src="./src/assets/Aeravat_24.webp"
            alt="Sad"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="swap-off">
          <img
            src="./src/assets/ECell.png"
            alt="Happy"
            className="w-full h-auto object-cover"
          />
        </div>
      </label>
    </div>
  </div>
</div>


            {/* Bar and Pie Charts */}
            <div className="flex flex-row mt-6">
              <div className="w-1/2 mr-2">
                <h3 className="text-xl font-bold mb-4">Sales Bar Chart</h3>
                <Bar data={barData} options={{ responsive: true }} />
              </div>
              <div className="w-1/2 ml-2">
                <h3 className="text-xl font-bold mb-4">Votes Pie Chart</h3>
                <Pie data={pieData} options={{ responsive: true }} />
              </div>
            </div>

            {/* Comparison Section */}
            <section id="comparison" aria-label="QuickEdit vs traditional editor" className="bg-base-100 dark:bg-base-900 py-20 sm:py-32">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl md:text-center">
                  <h2 className="font-display text-3xl tracking-tight text-base-content dark:text-base-content sm:text-4xl">
                    The Faster, Affordable, Better Solution
                  </h2>
                  <p className="mt-4 text-lg tracking-tight text-base-content">
                    Discover the advantages of choosing QuickEdit over a traditional editor. Say goodbye to delays and elevate your content creation process.
                  </p>
                </div>
                <ul role="list" className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
                  <li>
                    <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                      <li>
                        <figure className="relative rounded-2xl bg-base-100 dark:bg-base-900 p-6 text-center shadow-xl shadow-base-900/10">
                          <blockquote className="relative p-3">
                            <p className="text-6xl font-bold tracking-tight text-base-content dark:text-base-content">98%</p>
                          </blockquote>
                          <figcaption className="text-center">
                            <div className="font-display text-base-content dark:text-base-content"> ✅ faster than a traditional editor </div>
                          </figcaption>
                        </figure>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                      <li>
                        <figure className="relative rounded-2xl bg-base-100 dark:bg-base-900 p-6 text-center shadow-xl shadow-base-900/10">
                          <blockquote className="relative p-3">
                            <p className="text-6xl font-bold tracking-tight text-base-content dark:text-base-content">85%</p>
                          </blockquote>
                          <figcaption className="text-center">
                            <div className="font-display text-base-content dark:text-base-content">💰 more affordable than a traditional editor</div>
                          </figcaption>
                        </figure>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul role="list" clnssName="flex flex-col gap-y-6 sm:gap-y-8">
                      <li>
                        <figure className="relative rounded-2xl bg-base-100 dark:bg-base-900 p-6 text-center shadow-xl shadow-base-900/10">
                          <blockquote className="relative p-3">
                            <p className="text-6xl font-bold tracking-tight text-base-content dark:text-base-content">120%</p>
                          </blockquote>
                          <figcaption className="text-center">
                            <div className="font-display text-base-content dark:text-base-content">😎 increased efficiency and features</div>
                          </figcaption>
                        </figure>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
