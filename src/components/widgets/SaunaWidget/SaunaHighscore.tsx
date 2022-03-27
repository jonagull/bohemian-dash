import React from "react";
import { useSaunaHighscore } from "./useSaunaHighscore";
import { FireIcon } from "icons";

export function SaunaHighscore() {
  const highscore = useSaunaHighscore();

  // Don't render anything if highscore has not been fetched.
  if (!highscore) {
    return null;
  }

  return (
    <div className="sauna-highscore">
      <FireIcon />
      <div>
        {`Hottest session ever was a steaming `}
        <span>{highscore.temperature} C°</span>
        {` with a humidity of `}
        <span>{highscore.humidity}%</span>
        {` on `}
        {new Intl.DateTimeFormat("en-US", {
          dateStyle: "full",
          timeStyle: "long",
          hour12: false,
        }).format(new Date(highscore.created_at))}
        .
      </div>
    </div>
  );
}
