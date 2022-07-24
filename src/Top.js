import React from "react";

export default function Top() {
    return (
<div className="Top">
    <div className="row d-flex  align-items-baseline">
        <div className="col-sm-12 col-md-4 col-lg-6 antipode">
            <h1>ANTIPODE WEATHER</h1>
            <h3>Try searching for:</h3>
            <h3>Taipei, Madrid, Perth, or Honolulu.</h3>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-2 yourCity">
            <h2>Find the weather in...</h2>
            <form>
                <div>
                    <input type="text" value="Placeholder" />
                    <input type="button"/>
                </div>
                <div>
                    <input type="text" value="Your location" disabled />
                    <input type="button"/>
                </div>
            </form>
        </div>
    </div>
</div>
    );
  }