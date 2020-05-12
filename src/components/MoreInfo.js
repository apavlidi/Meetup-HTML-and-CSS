import React, { useState } from "react";

const MoreInfo = () => {
  const [showMore, setShowMore] = useState(false);
  const setShowToTrue = () => setShowMore(true);
  return (
    <>
      <button onClick={setShowToTrue}>More info</button>
      {showMore && (
        <section className="more-info">
          <h2>More info...</h2>
        </section>
      )}
    </>
  );
};

export { MoreInfo };
