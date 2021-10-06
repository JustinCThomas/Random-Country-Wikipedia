import React from "react"

const iframeContainerStyling = {
  height: "100vh",
  width: "100vw"
};

function IframeContainer(props) {

  return (
    <div className="iframe-container" style={iframeContainerStyling}>
      <iframe src={"https://en.wikipedia.org/wiki/" + props.country} height="70%" width="70%" title="Wikipedia page of a country"></iframe>
    </div>
  )
}

export default IframeContainer
