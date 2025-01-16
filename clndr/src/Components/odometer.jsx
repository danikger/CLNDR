export default function Odometer({
  value,
  duration = 1000,
  size = "3rem",
}) {
  // Converts the value to a string with leading zeros (format as 001, 010, 100 instead of 1, 10, 100)
  const paddedValue = String(value).padStart(3, "0");

  return (
    <div
      className="flex justify-center overflow-hidden"
      style={{
        height: size,
        fontSize: size,
        lineHeight: size,
      }}
    >
      {paddedValue.split("").map((val, idx) => (
        <div
          key={idx}
          className="relative transition-transform duration-1000 [transition-timing-function:cubic-bezier(0,0.99,1,1.01)]"
          style={{
            transform: `translateY(-${val * 100}%)`, // Scrolls to the correct digit
            transition: `transform ${duration}ms`,
            transitionDelay: `${(paddedValue.length - idx) * 20}ms`,
          }}
        >
          {/* Render digits from 0 to 9 */}
          {[...Array(10).keys()].map((digit) => (
            <div
              key={digit}
              className="text-center text-zinc-100"
              style={{
                height: size,
                lineHeight: size,
              }}
            >
              {digit}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

