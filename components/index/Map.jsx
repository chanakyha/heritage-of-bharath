import { useState } from "react";

import ReactDatamaps from "react-india-states-map";

const STATES = {
  Tamil: {
    value: 50,
    content: {
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A quisquam quae laboriosam sed magni aliquam dolore sequi libero harum, hic nihil. Omnis eos deserunt molestiae harum, cum nemo et temporibus?",
    },
  },
};

const Map = () => {
  const [activeState, setactiveState] = useState({
    data: STATES.Tamil,
    name: "India",
  });

  const [stateLists, setStateLists] = useState(STATES);

  const stateOnClick = (data, name) => {
    setactiveState({ data, name });
  };

  return (
    <div className="bg-red-500">
      <ReactDatamaps
        regionData={stateLists}
        mapLayout={{
          hoverComponent: true,
          hoverTitle: "Count",
          noDataColor: "#D36418",
          borderColor: "#ffffff",
          hoverBorderColor: "pink",
          hoverColor: "green",
        }}
        hoverComponent={({ value }) => {
          return (
            <>
              <p>{value.name}</p>
            </>
          );
        }}
        onClick={stateOnClick}
        activeState={activeState}
      />
    </div>
  );
};

export default Map;
