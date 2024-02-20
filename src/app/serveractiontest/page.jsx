import React from "react";

const ServerActionTestPage = () => {

  const actionInComponent = async () => {
    "use server";
    console.log("it works");
  };

  return (
    <div>
        <form action={actionInComponent}>
            <input type="text" placeholder="title" />
            <input type="text" placeholder="desc" />
            <input type="text" placeholder="slug" />
            <button>Test me</button>
        </form>
    </div>
  )
};

export default ServerActionTestPage;
