import React, { useState } from "react";
import { Button } from "../../../components";
import { getLink } from "../../../network/landlord/plaid";
import PlaidIntegration from "./PlaidIntegration";

const Dashboard = () => {
  const [linkToken, setLinkToken] = useState("");

  const handleGenerateLink = async () => {
    const res = await getLink();
    setLinkToken(res.message.link_token);
  };

  return (
    <div className="h-full flex flex-col items-center m-10 gap-14">
      <Button handler={handleGenerateLink}>Generate link</Button>
      {!linkToken ? (
        <div>Landlord...</div>
      ) : (
        <PlaidIntegration 
          linkToken={linkToken} 
          setLinkToken={setLinkToken}
        />
      )}
    </div>
  );
};

export default Dashboard;
