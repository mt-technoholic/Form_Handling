import React from "react";
// import { PlaidLink } from 'react-plaid-link';
import { usePlaidLink } from "react-plaid-link";
import { complete_idv } from "../../../network/landlord/plaid";

const PlaidIntegration = ({ linkToken, setLinkToken }) => {
  const onSuccess = async (publicToken, metadata) => {
    console.log(`Finished with IDV! ${JSON.stringify(metadata)}`);
    const res = await complete_idv({ idvSession: metadata.link_session_id});
    console.log('Complete Response ===> ', res);
    setLinkToken("");
};

  const onExit = async (error, metadata) => {
    console.log("Error: ", error);
    console.log("Metadata: ", metadata);
    const res = await complete_idv({ idvSession: metadata.link_session_id});
    console.log('Complete Response ===> ', res);
    setLinkToken("");
  };

  // Initialize PlaidLink with token and callbacks
  const config = {
    token: linkToken,
    onSuccess,
    onExit,
  };

  const { open, ready } = usePlaidLink(config);

  //   const handleClick = () => {
  //     if (ready) {
  //       open(); // Opens the Plaid Link when user clicks the button
  //     }
  //   };

  return (
    <div>{linkToken && ready && open()}</div>
    // <PlaidLink
    //   token={linkToken}
    //   onSuccess={onSuccess}
    //   onExit={onExit}
    // >
    //   Connect your bank
    // </PlaidLink>
  );
};

export default PlaidIntegration;
