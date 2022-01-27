import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getExhibitionsRequest } from "../../Redux/action";
import { rootState } from "../../interfaces/rootState";
import { handleGetDate } from "../../utils/handleDate";
import Spinner from "../../Components/Spinner";

const Exhibition = () => {
  const router = useRouter();

  const { id } = router.query;

  const dispatch = useDispatch();
  const {
    exhibition: { data: data },
  } = useSelector((state: rootState) => state);

  const { exhibition } = useSelector((state: rootState) => state);

  useEffect(() => {
    if (id) {
      dispatch(getExhibitionsRequest({ id: id }));
    }
  }, [id]);

  const handleBack = () => {
    router.push("/");
  };

  if (exhibition.isLoading) {
    return (
      <div className="px-12">
        <button onClick={handleBack} className="text-blue-600 text-2xl">
          {"<-"} Back
        </button>
        <Spinner />
      </div>
    );
  }

  return (
    <div>
      <div className="px-12">
        <button onClick={handleBack} className="text-blue-600 text-2xl">
          {"<-"} Back
        </button>
        <p>
          <span className="text-4xl mr-6">{data?.title}</span>
          {handleGetDate(data?.aic_start_at)} -{" "}
          {handleGetDate(data?.aic_end_at)}
        </p>
        <div className="grid grid-cols-4 my-12 gap-12">
          <div className="col-span-1">
            <img
              src={
                data?.image_url ? data?.image_url : "/images/placeholder.jpeg"
              }
              alt="Gallery Image"
              height={500}
              width={500}
              className="object-cover h-auto w-100"
            />
          </div>
          <div className="col-span-3">
            <p>{data?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exhibition;
