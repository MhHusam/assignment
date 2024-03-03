/////////////////////////////////////////// fuch to calculate rating by star///////////////////////////////////

export function renderRatingStars(rateValue: any) {
  const numericRating = parseFloat(rateValue);
  const filledStars = Math.floor(numericRating);
  const hasHalfStar = numericRating % 1 === 0.5;

  const stars = [];

  for (let i = 0; i < filledStars; i++) {
    stars.push(
      <div key={i} className="w-4 h-4 text-[#FFC600]">
        ★
      </div>
    );
  }

  if (hasHalfStar) {
    stars.push(
      <div
        key="half"
        className="w-4 h-4 text-[#FFC600]"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <div
          style={{
            position: "absolute",
            display: "inline-block",
            width: "50%",
            overflow: "hidden",
          }}
        >
          ★
        </div>
        <div
          style={{
            position: "absolute",
            display: "inline-block",
            width: "50%",
          }}
        >
          ☆
        </div>
      </div>
    );
  }

  const emptyStars = 5 - filledStars - (hasHalfStar ? 1 : 0);

  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <div key={i + filledStars} className="w-4 h-4 text-gray-300">
        ☆
      </div>
    );
  }

  return <div className="flex gap-1">{stars}</div>;
}
