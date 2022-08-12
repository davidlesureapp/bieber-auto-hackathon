import React, { useEffect, useState } from "react";

import "../style/index.scss";

import Timeline from "../components/timeline";

import logo from "../images/logo.svg";

const IndexPage = () => {
  let timeline = [
    {
      time: "5:35PM UTC",
      date: "August 10, 2022",
      type: "canceled",
      event: "Policy Canceled",
      name: "Alejandro Angulo",
      comment: `Alejandro hates affordable quality coverage. Bye, Belieber Auto
        won’t miss you at all!`,
    },
    {
      time: "5:35PM UTC",
      date: "August 10, 2022",
      type: "disputed",
      event: "Policy Disputed",
      name: "Chelsea Wills",
      comment: `Chelsea has disputed this month’s payment. Did nobody tell them about the Belieber Tax?`,
    },
    {
      time: "5:35PM UTC",
      date: "August 10, 2022",
      type: "non-payment",
      event: "Policy Canceled (Non-payment)",
      name: "David Le",
      comment: `David didn’t want to pay for this month’s premium, so the policy has been terminated. See ya, stay broke!`,
    },
    {
      time: "5:35PM UTC",
      date: "August 10, 2022",
      type: "success",
      event: "Payment Succcessful",
      name: "Cherith Simmons",
      comment: `Another monthly payment of $320.20 has processed! Cherith really loves Belieber Auto, believe that! `,
    },
    {
      time: "5:35PM UTC",
      date: "August 10, 2022",
      type: "new",
      event: "New Policy",
      name: "Deanna Shih",
      comment: `Joining us from all the way in California, please welcome Deanna to the Belieber Auto family!`,
    },
    {
      time: "5:35PM UTC",
      date: "August 10, 2022",
      type: "renewed",
      event: "Policy Renewed",
      name: "Brian Rutledge",
      comment: `Brian just can’t get enough of us! Welcome back for another year of Belieber Auto!`,
    },
    {
      time: "5:35PM UTC",
      date: "August 10, 2022",
      type: "new",
      event: "New Policy",
      name: "Brian Chew",
      comment: `Joining us from all the way in California, please welcome Brian to the Belieber Auto family!`,
    },
    {
      time: "5:35PM UTC",
      date: "August 10, 2022",
      type: "new",
      event: "New Policy",
      name: "Robbie Walsh",
      comment: `Joining us from all the way in Arizona, please welcome Robbie to the Belieber Auto family!`,
    },
    {
      time: "5:35PM UTC",
      date: "August 10, 2022",
      type: "renewed",
      event: "Policy Renewed",
      name: "Bruce Xu",
      comment: `Bruce just can’t get enough of us! Welcome back for another year of Belieber Auto!`,
    },
    {
      time: "5:35PM UTC",
      date: "August 10, 2022",
      type: "success",
      event: "Payment Successful",
      name: "Hemhem Elegbede",
      comment: `Another monthly payment of $320.20 has processed! Hemhem really loves Belieber Auto, believe that!`,
    },
  ];

  const [toast, setToast] = useState(false);

  const [totalEvents, setTotalEvents] = useState(3);

  function addEvent() {
    setTotalEvents(totalEvents + 1);
    setToast(true);
    setTimeout(() => {
      setToast(false);
    }, 3000);
  }

  return (
    <main>
      <img className="logo" src={logo} />
      {toast && (
        <div className="toast">
          <strong>New Policy!</strong> If I was your carrier, I’d never let you
          go.
        </div>
      )}
      <Timeline
        data={timeline.slice(0, totalEvents).reverse()}
        key={totalEvents}
      />
      <button className="new-event-button" onClick={() => addEvent()}>
        Test New Event
      </button>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Belieber Auto</title>;
