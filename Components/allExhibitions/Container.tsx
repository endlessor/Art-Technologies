import React from "react";
import { rootState } from "../../interfaces/rootState";
import { useSelector } from "react-redux";
import Gallery from "./Gallery";

const Container = () => {
  const {
    allExhibitions: { data: data },
  } = useSelector((state: rootState) => state);

  return (
    <div>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-12">
        {data &&
          data.length &&
          data.map((value, index) => {
            return (
              <div key={index}>
                <Gallery
                  image_url={value.image_url}
                  title={value.title}
                  aic_start_at={value.aic_start_at}
                  aic_end_at={value.aic_end_at}
                  id={value.id}
                />
              </div>
            );
          })}
        <div></div>
      </div>
    </div>
  );
};

export default Container;
