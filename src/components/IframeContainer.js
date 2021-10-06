import React from "react"

const iframeContainerStyling = {
  height: "92vh",
  width: "95vw"
};

function IframeContainer(props) {

  return (
    <div className="iframe-container" style={iframeContainerStyling}>
      <iframe src={"https://en.wikipedia.org/wiki/" + props.country} height="100%" width="100%" title="Wikipedia page of a country"></iframe>
    </div>
  )
}

export default IframeContainer
